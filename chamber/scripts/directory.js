document.addEventListener("DOMContentLoaded", () => {
    const memberContainer = document.getElementById("member-container");
    const toggleView = document.getElementById("toggle-view");

    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            displayMembers(data.members, "grid");
        })
        .catch(error => console.error("Error fetching members:", error));

     // Toggle view functionality
     const gridViewButton = document.getElementById('grid-view');
     const listViewButton = document.getElementById('list-view');
 
     gridViewButton.addEventListener('click', function() {
         memberContainer.classList.add('grid-view');
         memberContainer.classList.remove('list-view');
     });
 
     listViewButton.addEventListener('click', function() {
         memberContainer.classList.add('list-view');
         memberContainer.classList.remove('grid-view');
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
