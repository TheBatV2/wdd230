document.addEventListener("DOMContentLoaded", function() {
    const baseUrl = "https://thebatv2.github.io/wdd230/";
    const linksURL = "https://thebatv2.github.io/wdd230/data/links.json";

    // Function to fetch the links data
    async function getLinks() {
        try {
            const response = await fetch(linksURL);  // Fetch the JSON data from the URL
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();  // Parse the response as JSON
            console.log(data)
            displayLinks(data);  // Call the function to display the links
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Function to display the links
    function displayLinks(weeks) {
        console.log(weeks);  // Log the data to see if it's correct
        const linksContainer = document.getElementById("la");  // Ensure this ID exists in your HTML
        linksContainer.innerHTML = "";  // Clear any existing content

        weeks.forEach(week => {
            const weekSection = document.createElement("section");
            const weekTitle = document.createElement("h3");
            weekTitle.textContent = `Week ${week.week}`;
            weekSection.appendChild(weekTitle);

            const list = document.createElement("ul");
            week.links.forEach(link => {
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.href = link.url;
                anchor.textContent = link.title;
                anchor.target = "_blank";
                listItem.appendChild(anchor);
                list.appendChild(listItem);
            });

            weekSection.appendChild(list);
            linksContainer.appendChild(weekSection);
        });
    }

    // Call the getLinks function when the script loads
    getLinks();
});
