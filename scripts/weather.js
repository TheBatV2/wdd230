const forecastContainer = document.querySelector('#forecast');

async function apiFetch() {
    const latitude = 43.189622;
    const longitude = -112.346373;
    const apiKey = '07c3ebe7f994fe160a60ef7497f6d557';
    const units = 'imperial';
    const queryString = `?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast${queryString}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayResults(data) {
    
    forecastContainer.innerHTML = '';

    
    const forecast = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

    forecast.forEach(day => {
        const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
        const temperature = day.main.temp;
        const description = day.weather[0].description;
        const iconCode = day.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <h4>${date}</h4>
            <img src="${iconUrl}" alt="${description}">
            <p>Temperature: ${temperature}°F</p>
            <p>${description}</p>
        `;
        forecastContainer.appendChild(forecastItem);
    });
}

apiFetch();