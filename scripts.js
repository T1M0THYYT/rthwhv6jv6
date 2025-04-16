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

function createPreviewCard(title, description, link) {
    let card = document.createElement("div");
    card.classList.add("preview-card");

    let content = document.createElement("div");
    content.classList.add("preview-card-content");

    let header = document.createElement("div");
    header.classList.add("preview-card-header");

    let h3 = document.createElement("h3");
    h3.textContent = title;
    header.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = description;
    header.appendChild(p);

    content.appendChild(header);

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
section.appendChild(createPreviewCard("Ui Utils [JEI]", "A Minecraft Bedrock texture pack that imitates the popular 'Just Enough Items (JEI)' mod with a bunch of neat features.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/ui-utils", "https://media.forgecdn.net/avatars/847/270/638476130899474137.png"));
section.appendChild(createPreviewCard("Fast Loading Screen Pack", "Removes the loading screen menu, allowing you to move your camera and mouse freely while loading the world or dimension.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-loading-screen-pack", "https://media.forgecdn.net/avatars/846/786/638474429245906013.png"));
section.appendChild(createPreviewCard("Java Locate Command", "Simplifies locating structures or biomes by reducing the need to type coordinates manually.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/java-locate-command", "https://media.forgecdn.net/avatars/846/072/638471558173392288.png"));
section.appendChild(createPreviewCard("Toggle Night Vision", "Enables better visibility in dark places without the need for torches.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-night-vision", "https://media.forgecdn.net/avatars/846/068/638471554688276251.png"));
section.appendChild(createPreviewCard("Cape Physics Resource Pack", "Adds an animation that simulates 'Physics' to your personal cape.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/cape-physics-resource-pack", "https://media.forgecdn.net/avatars/843/695/638461828208595446.png"));
section.appendChild(createPreviewCard("Minimap Resource Pack", "Displays an area around you as a 3D renderer using the structure renderer.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/minimap-resource-pack", "https://media.forgecdn.net/avatars/839/918/638448591423988988.png"));
section.appendChild(createPreviewCard("Effect Display Overlay", "View active mob effects while moving.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/effect-display-overlay", "https://media.forgecdn.net/avatars/838/232/638442596018818856.png"));
section.appendChild(createPreviewCard("Low Item Durability Warning", "Indicates when an item is about to break, preventing accidental tool breakage.", "https://www.curseforge.com/minecraft-bedrock/texture-packs/low-item-durability-warning", "https://media.forgecdn.net/avatars/837/103/638438163486128992.png"));
