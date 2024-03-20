import { Directus } from '@directus/sdk';
export default defineEventHandler(async (event) => {
  const client = new Directus(process.env['LOCAL_API_URL'] || "");
  await client.auth.static(process.env['LOCAL_API_TOKEN'] || "");
  const { productId, couponCode } = await readBody(event);

  const coupons = await client.graphql.items(
    `
    query ($productId: ID!, $couponCode: String) {
      products_by_id(id: $productId) {
        coupons(
          filter: {
            coupons_id: {
              code: { _eq: $couponCode }
              start: { _lte: "$NOW" }
              end: { _gte: "$NOW" }
            }
          }
        ) {
          coupons_id {
            id
            description
            percent
            checkoutLink
          }
        }
      }
    }       
    `,
    {
      productId,
      couponCode,
    }
  );
  event.node.res.setHeader('Cloudflare-CDN-Cache-Control', 'public, max-age=864000, s-maxage=864000');
  return (coupons?.data as any)?.products_by_id?.coupons?.[0]?.coupons_id || null;
});
