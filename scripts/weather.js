const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const url = 'https://openweathermap.org/city/2821164';

async function apiFetch() {
    const latitude = 43.189622;
    const longitude = -112.346373;
    const apiKey = '07c3ebe7f994fe160a60ef7497f6d557';
    const units = 'imperial';
    const queryString = `?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    const url = `https://api.openweathermap.org/data/2.5/weather${queryString}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);  // Add this to call displayResults after fetching data
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayResults(data) {
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

    document.getElementById('temp').textContent = `Temperature: ${temperature}°F`;
    document.getElementById('description').textContent = `Weather: ${description}`;
    document.getElementById('icon').src = iconUrl;
}

apiFetch();
