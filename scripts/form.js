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

// Product List

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Product List Displayed

const selectElement = document.getElementById('productname');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

// Count Augment from the form page

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".webForm");

    if (form) {
        form.addEventListener("submit", () => {
            // Increment localStorage count BEFORE page changes
            let count = parseInt(localStorage.getItem("reviewCount") || "0", 10);
            localStorage.setItem("reviewCount", count + 1);
        });
    }
});

