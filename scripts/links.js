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
           
            displayLinks(data.lessons);
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    
    const displayLinks = (lessons) => {
        const listContainer = document.querySelector(".la");  
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

               
                if (lesson.links.length > 1 && index < lesson.links.length - 1) {
                    listItem.appendChild(document.createTextNode(" | "));
                }
            });

           
            listContainer.appendChild(listItem);
        });
    };

    // Call the getLinks function to fetch and display the links
    getLinks();
});

