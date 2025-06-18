document.addEventListener("DOMContentLoaded", () => {

    // === Hamburger Menu Scripting ===
    const hamButton = document.querySelector("#hamburger");
    const navigation = document.querySelector(".navigation");

    if (hamButton && navigation) {
        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        });
    }

    // === Footer Date Script ===
    const year = document.querySelector("#currentyear");
    const today = new Date();
    if (year) {
        year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
    }

    // === Last Modified Date ===
    const lastModRaw = document.lastModified;
    const lastModDate = new Date(lastModRaw);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
    }).format(lastModDate);

    const lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = `Last Modification: ${formattedDate} Mountain Standard Time`;
    }

    // === Content Area ===
    const contentArea = document.querySelector(".images");
    if (!contentArea) return;

    contentArea.innerHTML = `<div class="frame"><p></p></div>`;

    // === Helper Function to Attach Events ===
    function setContent(id, html) {
        const el = document.querySelector(id);
        if (el) {
            el.addEventListener("click", () => {
                contentArea.innerHTML = html;
            });
        }
    }

    // === Bind All Click Events ===

    // Alexander
    setContent("#aoverview", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#askills", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#apersonality", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#ahobbies", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#acontributions", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#aaspirations", `<div class="frame"><p>Hello there</p></div>`);

    // Bradley
    setContent("#boverview", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#bskills", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#bpersonality", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#bhobbies", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#bcontributions", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#baspirations", `<div class="frame"><p>Hello there</p></div>`);

    // Gerard
    setContent("#goverview", `<div class="frame"><p>Gerard consistently brings a thoughtful, solution-oriented mindset to technical challenges. He often proposes diagnostic steps, such as using Wireshark to analyze network traffic, and offers structured hypotheses when troubleshooting issues like card reader failures. His tone is calm and constructive, and he frequently acknowledges others’ contributions. He also shows a sense of humor and camaraderie, which helps maintain morale during complex problem-solving.</p></div>`);
    setContent("#gskills", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#gpersonality", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#ghobbies", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#gcontributions", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#gaspirations", `<div class="frame"><p>Hello there</p></div>`);

    // Jethro
    setContent("#joverview", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#jskills", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#jpersonality", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#jhobbies", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#jcontributions", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#jaspirations", `<div class="frame"><p>Hello there</p></div>`);

    // Winston
    setContent("#woverview", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#wskills", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#wpersonality", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#whobbies", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#wcontributions", `<div class="frame"><p>Hello there</p></div>`);
    setContent("#waspirations", `<div class="frame"><p>Hello there</p></div>`);

});
