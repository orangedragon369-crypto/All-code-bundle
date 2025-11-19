export default async function getApi(api) {
    if (api === null) return;
    try{
        const response = await fetch(api)
        if(!response.ok){
            throw new Error("Could not fetch response");
        }
        const data = await response.json()
        return data;
    }
    catch(error) {console.error(error)};
}