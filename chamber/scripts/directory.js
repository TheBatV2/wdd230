document.addEventListener("DOMContentLoaded", () => {
    const memberContainer = document.getElementById("member-container");
    const toggleView = document.getElementById("toggle-view");

    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            displayMembers(data.members, "grid");
        })
        .catch(error => console.error("Error fetching members:", error));

    toggleView.addEventListener("click", () => {
        const currentView = memberContainer.classList.contains("grid") ? "list" : "grid";
        fetch("data/members.json")
            .then(response => response.json())
            .then(data => {
                displayMembers(data.members, currentView);
            });
    });

    function displayMembers(members, view) {
        memberContainer.innerHTML = "";
        memberContainer.className = view;
        
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add(view === "grid" ? "member-card" : "member-list-item");
            
            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership">${member.membership} Member</p>
            `;
            
            memberContainer.appendChild(memberElement);
        });
    }
});
