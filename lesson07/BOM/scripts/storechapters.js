// Declare an array and assign it the results of getChapterList or an empty array
let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters
chaptersArray.forEach((chapter) => displayList(chapter));

// Event listener for the add button
document.querySelector("button").addEventListener("click", () => {
    const input = document.querySelector("input");
    
    if (input.value.trim() !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

// Function to display a chapter in the list
function displayList(item) {
    const list = document.querySelector("ul");
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    
    listItem.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
        deleteChapter(item);
        listItem.remove();
    });
    
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}

// Function to set the localStorage item
function setChapterList() {
    localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

// Function to get the localStorage item
function getChapterList() {
    return JSON.parse(localStorage.getItem("chapters")) || [];
}

// Function to delete a chapter
function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

