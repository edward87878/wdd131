// constants
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// Last Modified Date

document.addEventListener("DOMContentLoaded", () => {
    const lastModRaw = document.lastModified;
    const lastModDate = new Date(lastModRaw);

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(lastModDate);

    document.getElementById("lastModified").textContent = `Last Modification: ${formattedDate} Mountain Standard Time`;
});

const temperature = document.querySelector("#temperature");
const conditions = document.querySelector("#conditions");
const wind = document.querySelector("#wind");
const windchill = document.querySelector("#windchill");

temperature.textContent = "84";
conditions.textContent = "Partly Cloudy";
wind.textContent = "5";

function calculateWindChill(temp, windSpeed) {
  if (temp <= 50 && windSpeed > 3) {
      return Math.round(
          35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) +
          0.4275 * temp * Math.pow(windSpeed, 0.16)
      );
  } else {
    return "N/A";
  }
}

const tempValue = parseFloat(temperature.textContent);
const windValue = parseFloat(wind.textContent);

windchill.textContent = calculateWindChill(tempValue, windValue);