const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") body.classList.add("light-mode");

toggleBtn.textContent = body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
    toggleBtn.textContent = body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";

});

function createPreviewCard(title, description, link, downloads, dateCreated) {
    let card = document.createElement("div");
    card.classList.add("preview-card");
    // Content Container
    let content = document.createElement("div");
    content.classList.add("preview-card-content");

    // Header: Title + Description
    let header = document.createElement("div");
    header.classList.add("preview-card-header");

    let h3 = document.createElement("h3");
    h3.textContent = title;
    header.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = description;
    header.appendChild(p);

    // Meta Info: Downloads + Date
    let meta = document.createElement("div");
    meta.classList.add("preview-card-meta");

    let downloadsInfo = document.createElement("p");
    downloadsInfo.textContent = `Total Downloads: ${downloads}`;
    meta.appendChild(downloadsInfo);

    let dateInfo = document.createElement("p");
    dateInfo.textContent = `Date Created: ${dateCreated}`;
    meta.appendChild(dateInfo);

    header.appendChild(meta);
    content.appendChild(header);

    // Footer: View Button
    let footer = document.createElement("div");
    footer.classList.add("preview-footer");

    let a = document.createElement("a");
    a.classList.add("preview-btn");
    a.href = link;
    a.target = "_blank";
    a.textContent = "View";
    footer.appendChild(a);

    content.appendChild(footer);
    card.appendChild(content);

    return card;
}


const section = document.querySelector(".preview-list-content");
section.appendChild(createPreviewCard("Ui Utils [JEI]", "A Minecraft Bedrock texture pack that imitates a popular Minecraft mod called 'Just Enough Items (JEI)' with a bunch of neat features.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/ui-utils", "9.8K", "2024-11-17"));
section.appendChild(createPreviewCard("Fast Loading Screen Pack", "This pack 'removes' the loading screen menu and allows you to freely move your camera and mouse while loading the world or dimension.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-loading-screen-pack", "26.8K", "2024-11-29"));
section.appendChild(createPreviewCard("Java Locate Command", "Are you tired of constantly typing in structure or biome coordinates? This pack is the solution!", "https://www.curseforge.com/minecraft-bedrock/texture-packs/java-locate-command", "1.0K", "2025-02-04"));
section.appendChild(createPreviewCard("Toggle Night Vision", "Want to see caves but too lazy to get torches? This pack makes it easier for you to see in dark places without them!", "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-night-vision", "158.6K", "2025-01-22"));
section.appendChild(createPreviewCard("Cape Physics Resource Pack", "This resource pack adds an animation that simulates 'Physics' to your personal cape.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/cape-physics-resource-pack", "1.3K", "2025-02-22"));
section.appendChild(createPreviewCard("Minimap Resource Pack", "This is a very powerful resource pack for Minecraft Bedrock that uses the structure renderer to display an area around you as a 3D renderer.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/minimap-resource-pack", "29.2K", "2024-11-18"));
section.appendChild(createPreviewCard("Effect Display Overlay", "View active mob effects while moving!", "https://www.curseforge.com/minecraft-bedrock/texture-packs/effect-display-overlay", "5.4K", "2024-12-16"));
section.appendChild(createPreviewCard("Low Item Durability Warning", "Tired of accidentally breaking your tools without realizing their low durability? Well, this pack is for you! This texture pack indicates when an item is about to break.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/low-item-durability-warning", "973", "2024-11-26"));
