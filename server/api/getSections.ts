import { Directus } from '@directus/sdk';
export default defineEventHandler(async (event) => {

    const { hostPath } = await readBody(event);

    const client = new Directus(process.env['LOCAL_API_URL'] || "");
    await client.auth.static(process.env['LOCAL_API_TOKEN'] || "");

    const products = (await client.items('products').readByQuery({
        fields: ["id", "productType", "sections.*, productName, modules.*"],
        filter: {
            "sellingLink": {
                "_eq": hostPath
            }
        }
    })).data;
    if (!products || !products[0]) {
        return { status: 404, body: "Product not found" };
    }
    const product = products[0];
    let sections: any[] = [];
    const promises: Promise<any>[] = [];

    for (const section of product.sections) {
        try {
            promises.push((async () => {
                // get section data
                const sectionData = await client.items(section.collection).readOne(section.item, {
                    fields: ["*.*.*.*.*"]
                });

                // remove from section data status, sort, user_created, user_updated, date_created, date_updated
                delete sectionData.status;
                delete sectionData.sort;
                delete sectionData.user_created;
                delete sectionData.user_updated;
                delete sectionData.date_created;
                // get component name
                const componentName = (await client.items("directus_collections").readOne(section.collection, {
                    fields: ["meta.nuxtComponentName"]
                })).meta.nuxtComponentName;
                sections.push({
                    collection: section.collection,
                    componentName,
                    data: { collection: section.collection, order: section.order, ...sectionData }
                });
            })());
        }
        catch (err) {
            console.log(err);
            console.log("Error on getting ", section.collection, " data...");
        }
    }

    await Promise.all(promises);

    sections = sections.sort((a, b) => a.data.order - b.data.order);;
    event.node.res.setHeader('Cloudflare-CDN-Cache-Control', 'public, max-age=864000, s-maxage=864000');
    return {
        ...product,
        sections
    };
});
