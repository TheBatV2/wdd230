document.addEventListener("DOMContentLoaded", () => {
    const memberContainer = document.getElementById("member-container");
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    // Set initial view to grid
    memberContainer.classList.add('grid-view');

    gridViewButton.addEventListener('click', () => {
        displayMembers(currentMembers, 'grid-view');
    });

    listViewButton.addEventListener('click', () => {
        displayMembers(currentMembers, 'list-view');
    });

    let currentMembers = [];

    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            currentMembers = data.members;
            displayMembers(currentMembers, "grid-view");
        })
        .catch(error => console.error("Error fetching members:", error));

    function displayMembers(members, view) {
        memberContainer.innerHTML = "";
        memberContainer.className = view;
        
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member-card");
            
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership ${member.membership.toLowerCase()}">${member.membership} Member</p>
            `;
            
            memberContainer.appendChild(memberElement);
        });
    }
});
