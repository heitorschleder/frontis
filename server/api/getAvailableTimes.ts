import { Directus } from '@directus/sdk';
export default defineEventHandler(async (event) => {

    const client = new Directus(process.env['LOCAL_API_URL'] || "");
    await client.auth.static(process.env['LOCAL_API_TOKEN'] || "");
    const availableTimes = await client.items('availableTimes').readByQuery({
        fields: "id, whatsappNumber, initialTime, endTime"
    });
    
    const currentTime = new Date().toLocaleTimeString('pt-BR', { hour12: false, hour: '2-digit', minute: '2-digit' });
    event.node.res.setHeader('Cloudflare-CDN-Cache-Control', 'public, max-age=864000, s-maxage=864000');
    return (availableTimes.data as {
        id: number;
        whatsappNumber: string;
        initialTime: string;
        endTime: string;
    }[]).filter(e => {
        // check if currentTime is beetwen e.initialTime and e.endTime
        const initialTime = e.initialTime.split(':');
        const endTime = e.endTime.split(':');
        const currentTimeSplit = currentTime.split(':');
        const initialTimeDate = new Date(0, 0, 0, parseInt(initialTime[0]), parseInt(initialTime[1]));
        const endTimeDate = new Date(0, 0, 0, parseInt(endTime[0]), parseInt(endTime[1]));
        const currentTimeDate = new Date(0, 0, 0, parseInt(currentTimeSplit[0]), parseInt(currentTimeSplit[1]));
        return currentTimeDate >= initialTimeDate && currentTimeDate <= endTimeDate;
    }).sort(() => 0.5 - Math.random());
});
