const apiKey = '07c3ebe7f994fe160a60ef7497f6d557'; 
const city = 'Cozumel';
const weatherDiv = document.getElementById('weather');

async function fetchWeather() {
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentURL),
      fetch(forecastURL)
    ]);

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    
    const temp = currentData.main.temp;
    const humidity = currentData.main.humidity;
    const weather = currentData.weather[0]; 

    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const targetDate = tomorrow.toISOString().split('T')[0] + ' 15:00:00';

    const forecast3pm = forecastData.list.find(entry => entry.dt_txt === targetDate);

    let forecastInfo = '<p><strong>Tomorrow at 15:00:</strong> Not available</p>';
    if (forecast3pm) {
      const fTemp = forecast3pm.main.temp;
      const fWeather = forecast3pm.weather[0];
      forecastInfo = `
        <p><strong>Tomorrow at 15:00:</strong> ${fTemp}°C, ${fWeather.main}, ${fWeather.description}
          <img src="https://openweathermap.org/img/wn/${fWeather.icon}@2x.png" alt="icon">
        </p>
      `;
    }

    weatherDiv.innerHTML = `
    <h2>Weather in ${city}</h2>
      <p><strong>Current Temperature:</strong> ${temp}°C</p>
      <p><strong>Current Humidity:</strong> ${humidity}%</p>
      <p><strong>Current Weather:</strong> ${weather.main} - ${weather.description}
        <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="icon">
      </p>
      ${forecastInfo}
    `;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    weatherDiv.innerHTML = '<p>Failed to load weather data.</p>';
  }
}

fetchWeather();


