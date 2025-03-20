document.addEventListener('DOMContentLoaded', () => {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const members = data.members;
            const spotlightDiv = document.querySelector('.spotlight');

            const spotlightMembers = members.filter(member => 
                member.membership === 'Silver' || member.membership === 'Gold'
            );

            function getRandomMembers(arr, num) {
                const shuffled = arr.sort(() => 0.5 - Math.random());
                return shuffled.slice(0, num);
            }

            const randomSpotlightMembers = getRandomMembers(spotlightMembers, 3);

            randomSpotlightMembers.forEach(member => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('member');

                const membershipClass = member.membership.toLowerCase();

                memberDiv.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}">${member.website}</a>
                    <img src="images/${member.image}" alt="${member.name}" class="member-img">
                    <p class="membership ${membershipClass}">Membership: ${member.membership}</p>
                `;

                spotlightDiv.appendChild(memberDiv);
            });
        })
        .catch(error => console.error('Error fetching members:', error));
});