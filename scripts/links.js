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
            console.log(data);  // Log the fetched data to check its structure
            displayLinks(data.lessons);  // Access the 'lessons' array
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    // Function to display the links
    function displayLinks(lessons) {
        const linksContainer = document.getElementById("la");  // Ensure this ID exists in your HTML
        linksContainer.innerHTML = "";  // Clear any existing content

        lessons.forEach(lesson => {
            const lessonSection = document.createElement("section");
            const lessonTitle = document.createElement("h3");
            lessonTitle.textContent = `Lesson ${lesson.lesson}`;
            lessonSection.appendChild(lessonTitle);

            const list = document.createElement("ul");
            lesson.links.forEach(link => {
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.href = link.url;
                anchor.textContent = link.title;
                anchor.target = "_blank";
                listItem.appendChild(anchor);
                list.appendChild(listItem);
            });

            lessonSection.appendChild(list);
            linksContainer.appendChild(lessonSection);
        });
    }

    // Call the getLinks function when the script loads
    getLinks();
});

