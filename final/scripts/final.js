document.addEventListener("DOMContentLoaded", () => {

    // Hamburger Menu
    const hamButton = document.querySelector("#hamburger");
    const navigation = document.querySelector(".navigation");

    if (hamButton && navigation) {
        hamButton.addEventListener("click", () => {
            navigation.classList.toggle("open");
            hamButton.classList.toggle("open");
        });
    }

    // Footer
    const year = document.querySelector("#currentyear");
    const today = new Date();
    if (year) {
        year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
    }

    // Last Modified Date
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

    // Content Area Creation
    const contentArea = document.querySelector(".images");
    if (!contentArea) return;
    contentArea.innerHTML = `<div class="frame"><p></p></div>`;

    // Button Configuration

    // Alexander
    document.querySelector("#aoverview")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Alexander brings a mix of technical insight and levity to the team. He is often in the thick of troubleshooting, especially with payment systems and network diagnostics. His tone is upbeat and humorous, which helps diffuse tension during stressful situations. He is also quick to acknowledge others efforts and keep the team informed.</p></div>`;
    });

    document.querySelector("#askills")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Alexander is good at everything that relates to helpdesk, though has a particular affinity for networking, hardware maintenance, RF guns, WIFI networks, and printers</p></div>`;
    });

    document.querySelector("#apersonality")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Alexander is a true ambivert, with extrovertive tendencies with those he knows and trusts. He works well with others and can communicate, but also has a strong tendency toward buckling down and getting things done. For this reason, he favors written commuication over verbal communication, but will communicate verbally if he feels comfortable that he will not be judged harshly for not getting things done in a more proactive manner. </p></div>`;
    });

    document.querySelector("#ahobbies")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Alexander was introduced to being a Dungeon Master by Winston. This has become one of his greatest delights. While not partial to any particular system or set of rules, he uses D&D because that draws in the most players.</p>
            <p>He also thoroughly enjoys working on and going outdoors to the cabin owned by his family.</p></div>`;
    });

    document.querySelector("#acontributions")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Alexander has diagnosed and resolved network issues, such our silent call problems or VPN connectivity. He's also managed hardware installations and configurations. He's supported software and service transitions, like Webex and SD-WAN. He's gathered and communicated pricing for IT equipment, as well as coordinated with vendors like Dell and FirstDigital to ensure timely and accurate orders. He's managed ticketing processes with attention to batch tracking and repair logistics. He's documented and communicated outages and service transitions clearly and proactively. He's contributed to internal documentation, such as the May IT newsletter and VPN troubleshooting. Last of all, he's consistently responded to things I've asked of him.</p>
            </div>`;
    });

    document.querySelector("#aaspirations")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>He would like to own his own cabin one day. Somewhere he could retire.</p></div>`;
    });

    // Bradley
    document.querySelector("#boverview")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Bradley is collaborative and helpful, often stepping in to assist with ticket escalations or user support even while away from his desk. He is proactive in asking for help when needed and contributes to group problem-solving with a clear, no-nonsense tone. His messages reflect a steady presence and a willingness to support the team wherever needed.</p></div>`;
    });

    document.querySelector("#bskills")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>He's pretty proficient with all things helpdesk, being able to accept the majority of tickets without complaint or needing to ask excessive questions. He also processes more tickets than everyone else. He's getting pretty good at security as well.</p></div>`;
    });

    document.querySelector("#bpersonality")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Bradley is quiet and unassertive at times. He's demonstrated more assertiveness, but those even more aggressive than him have resented him for it, which has driven him back into his shell. He is professional, kind, and helpful, and has a determination to learn and grow.</p></div>`;
    });

    document.querySelector("#bhobbies")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>He enjoys sports, particularly baseball, and being with his family.</p></div>`;
    });

    document.querySelector("#bcontributions")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Onboarding and offboarding. Ticket handling. Security.</p></div>`;
    });

    document.querySelector("#baspirations")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Become an airline pilot, and/or a security administrator.</p></div>`;
    });

    // Gerard
    document.querySelector("#goverview")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Gerard consistently brings a thoughtful, solution-oriented mindset to technical challenges. He often proposes diagnostic steps, such as using Wireshark to analyze network traffic, and offers structured hypotheses when troubleshooting issues like card reader failures. His tone is calm and constructive, and he frequently acknowledges others’ contributions. He also shows a sense of humor and camaraderie, which helps maintain morale during complex problem-solving.</p></div>`;
    });

    document.querySelector("#gskills")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Cloud admininistration. Programming. Leadership. Musicality.</p></div>`;
    });

    document.querySelector("#gpersonality")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>He is very careful with his words, wanting to give off the right impression and communicate effectively. He thinks highly of himself, though keeps that hidden until he trusts you with his vanity.</p></div>`;
    });

    document.querySelector("#ghobbies")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Raising his children. Playing instruments and making music. Singing. Software development. Messing with people online he does not agree with.</p></div>`;
    });

    document.querySelector("#gcontributions")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>daily Active Directory audits. Hourly DNS log audits. Password expiration notifications. Outgoing anti-phishing policy. Automations. Designed newsletters.</p></div>`;
    });

    document.querySelector("#gaspirations")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>He would like to travel to Europe one day.</p></div>`;
    });

    // Jethro
    document.querySelector("#joverview")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Jethro is analytical and inquisitive. He frequently asks probing questions to get to the root of technical issues and contributes detailed observations during troubleshooting. His tone is thoughtful and respectful, and he often validates others ideas while offering his own perspective. He is also not afraid to admit when he is unsure, which fosters open dialogue.</p></div>`;
    });

    document.querySelector("#jskills")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Helpdesk. Networking. Hardware repair.</p></div>`;
    });

    document.querySelector("#jpersonality")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Thoughtful and considerate. Curious and resourceful. Humble and self-aware. Collaborative. Easygoing and approachable.</p></div>`;
    });

    document.querySelector("#jhobbies")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Sports. Camping. Hiking. Spending time with his family.</p></div>`;
    });

    document.querySelector("#jcontributions")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Fixed WIFI issue at corporate. Consolidated plan for new switch and AP hardware.</p></div>`;
    });

    document.querySelector("#jaspirations")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>While he hasn't said this, I imagine he wants to get back to the same level he was at before in his job title and pay.</p></div>`;
    });

    // Winston
    document.querySelector("#woverview")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Winston is highly responsive and detail-oriented. He often takes initiative in resolving issues, such as handling VPN problems or coordinating with branches during outages. His messages reflect a practical, boots-on-the-ground approach, and he is quick to share updates or ask clarifying questions. He also contributes to team banter, showing a personable and grounded communication style</p></div>`;
    });

    document.querySelector("#wskills")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Networking. Social engineering. Security. Everything helpdesk. ERP systems.</p></div>`;
    });

    document.querySelector("#wpersonality")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Amiable. Approachable. Can get defensive, but believes in people and wants to help them.</p></div>`;
    });

    document.querySelector("#whobbies")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Dungeons and Dragons. Video games. Taking care of his dog. Hanging out with and making new friends.</p></div>`;
    });

    document.querySelector("#wcontributions")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Learned more about the firewall than I ever did. Got our VMs operational. Coordinated with vendors to accomplish tasks.</p></div>`;
    });

    document.querySelector("#waspirations")?.addEventListener("click", () => {
        contentArea.innerHTML =
            `<div class="frame"><p>Be in management. Find an eternal companion. See his family again someday.</p></div>`;
    });

});
