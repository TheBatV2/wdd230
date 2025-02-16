// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 50 && windSpeed > 3.0) {
        let windChill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(2) + '°F';
    } else {
        return 'N/A';
    }
}

// Function to update wind chill in the weather section
document.addEventListener("DOMContentLoaded", function () {
    let tempElement = document.getElementById("temperature");
    let windSpeedElement = document.getElementById("windspeed");
    let windChillElement = document.getElementById("windchill");

    if (tempElement && windSpeedElement && windChillElement) {
        let temp = parseFloat(tempElement.textContent);
        let windSpeed = parseFloat(windSpeedElement.textContent);

        let windChill = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = windChill;
    }
});