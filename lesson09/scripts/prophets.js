const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets); // Temporary check
  displayProphets(data.prophets); // Call displayProphets() with the prophets data array
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create a section element for the card
    const card = document.createElement('section');
    card.classList.add('card'); // Add card class for styling

    // Create the full name heading
    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Create the portrait image
    const portrait = document.createElement('img');
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '200');
    portrait.setAttribute('height', '250');

    // Append the elements to the card
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Append the card to the cards div
    cards.appendChild(card);
  });
}

// Call the getProphetData function to fetch and display the data
getProphetData();
