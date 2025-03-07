document.addEventListener("DOMContentLoaded", function () {
    const baseUrl = "https://thebatv2.github.io/wdd230/";
    const linksURL = "https://thebatv2.github.io/wdd230/data/links.json";

    // Function to fetch the links data
    async function getLinks() {
        try {
            const response = await fetch(linksURL);
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            // Call the displayLinks function with the data
            displayLinks(data.lessons);
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Function to display the links
    const displayLinks = (lessons) => {
        const listContainer = document.querySelector("la");  // Make sure the la element exists
        if (!listContainer) {
            console.error("Element with class of la not found");
            return;
        }

        lessons.forEach((lesson) => {
            const listItem = document.createElement("li");

            const lessonTitle = document.createTextNode(`Lesson ${lesson.lesson}: `);
            listItem.appendChild(lessonTitle);

            lesson.links.forEach((link, index) => {
                const tag = document.createElement("a");
                tag.setAttribute("href", link.url);
                tag.textContent = link.title;

                listItem.appendChild(tag);

                // Add separator ("|") between links, but not after the last one
                if (lesson.links.length > 1 && index < lesson.links.length - 1) {
                    listItem.appendChild(document.createTextNode(" | "));
                }
            });

            // Append the list item to the list container
            listContainer.appendChild(listItem);
        });
    };

    // Call the getLinks function to fetch and display the links
    getLinks();
});

