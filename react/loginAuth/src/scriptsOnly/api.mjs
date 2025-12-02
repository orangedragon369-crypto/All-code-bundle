export default async function getApi(api) {
    if (!api) return;

    try {
        const response = await fetch(api);

        if (!response.ok) {
            const html = await response.text();
            throw new Error(`API error ${response.status}: ${html}`);
        }

        const contentType = response.headers.get("content-type");

        if (!contentType || !contentType.includes("application/json")) {
            const html = await response.text();
            throw new Error("Response was not JSON:\n" + html);
        }

        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        return null;
    }
}
