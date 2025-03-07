const baseUrl = "https://thebatv2.github.io/wdd230/";
const linksURL = "https://thebatv2.github.io/wdd230/data/links.json";

async function fetchLinksData() {
    try {
        const response = await fetch(linksURL); // Use full URL
        if (!response.ok) {
            throw new Error(`Failed to fetch links.json: ${response.status}`);
        }
        const data = await response.json();
        console.log(data); // Log data for debugging
        return data;
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

fetchLinksData();