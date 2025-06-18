// Hamburger Menu Scripting

const hamButton = document.querySelector("#hamburger");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// === Footer scripts ===

// constants
const year = document.querySelector("#currentyear");

const contentArea = document.querySelector(".images"); // Create Content Area

// Alexander constants

const aoverview = document.querySelector("#aoverview");
const askills = document.querySelector("#askills");
const apersonality = document.querySelector("#apersonality");
const ahobbies = document.querySelector("#ahobbies");
const acontributions = document.querySelector("#acontributions");
const aaspirations = document.querySelector("#aaspirations");

// Bradley Constants

const boverview = document.querySelector("#boverview");
const bskills = document.querySelector("#bskills");
const bpersonality = document.querySelector("#bpersonality");
const bhobbies = document.querySelector("#bhobbies");
const bcontributions = document.querySelector("#bcontributions");
const baspirations = document.querySelector("#baspirations");

// Gerard Constants

const goverview = document.querySelector("#goverview");
const gskills = document.querySelector("#gskills");
const gpersonality = document.querySelector("#gpersonality");
const ghobbies = document.querySelector("#ghobbies");
const gcontributions = document.querySelector("#gcontributions");
const gaspirations = document.querySelector("#gaspirations");

// Jethro Constants

const joverview = document.querySelector("#joverview");
const jskills = document.querySelector("#jskills");
const jpersonality = document.querySelector("#jpersonality");
const jhobbies = document.querySelector("#jhobbies");
const jcontributions = document.querySelector("#jcontributions");
const jaspirations = document.querySelector("#jaspirations");

// Winston Constants

const woverview = document.querySelector("#woverview");
const wskills = document.querySelector("#wskills");
const wpersonality = document.querySelector("#wpersonality");
const whobbies = document.querySelector("#whobbies");
const wcontributions = document.querySelector("#wcontributions");
const waspirations = document.querySelector("#waspirations");

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

    // Alexander content

    aoverview.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    askills.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    apersonality.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    ahobbies.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    acontributions.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    aaspirations.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    // Bradley content

    boverview.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    bskills.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    bpersonality.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    bhobbies.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    bcontributions.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    baspirations.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    // Gerard content

    goverview.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Gerard consistently brings a thoughtful, solution-oriented mindset to technical challenges. He often proposes diagnostic steps, such as using Wireshark to analyze network traffic, and offers structured hypotheses when troubleshooting issues like card reader failures. His tone is calm and constructive, and he frequently acknowledges others’ contributions. He also shows a sense of humor and camaraderie, which helps maintain morale during complex problem-solving.</p></div>`;
    });

    gskills.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    gpersonality.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    ghobbies.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    gcontributions.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    gaspirations.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    // Jethro content

    joverview.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    jskills.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    jpersonality.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    jhobbies.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    jcontributions.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    jaspirations.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    // Winston Content

    woverview.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    wskills.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    wpersonality.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    whobbies.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    wcontributions.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });

    waspirations.addEventListener("click", () => {
        contentArea.innerHTML = `<div class="frame"><p>Hello there</p></div>`;
    });
});

// Add in clickable changes to document

