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

    let content = document.createElement("div");
    content.classList.add("preview-card-content");

    let header = document.createElement("div");
    header.classList.add("preview-card-header");

    if (title) {
        let h3 = document.createElement("h3");
        h3.textContent = title;
        header.appendChild(h3);
    }

    if (description) {
        let p = document.createElement("p");
        p.textContent = description;
        header.appendChild(p);
    }

    let meta = document.createElement("div");
    meta.classList.add("preview-card-meta");

    if (downloads) {
        let downloadsInfo = document.createElement("p");
        downloadsInfo.textContent = `Total Downloads: ${downloads}`;
        meta.appendChild(downloadsInfo);
    }

    if (dateCreated) {
        let dateInfo = document.createElement("p");
        dateInfo.textContent = `Date Created: ${dateCreated}`;
        meta.appendChild(dateInfo);
    }

    if (meta.children.length > 0) {
        header.appendChild(meta);
    }

    content.appendChild(header);

    if (link) {
        let footer = document.createElement("div");
        footer.classList.add("preview-footer");

        let a = document.createElement("a");
        a.classList.add("preview-btn");
        a.href = link;
        a.target = "_blank";
        a.textContent = "View";
        footer.appendChild(a);

        content.appendChild(footer);
    }

    card.appendChild(content);

    return card;
}


function createSection(title, subtitle, projects = []) {
    const container = document.createElement("section");
    container.classList.add("dynamic-section");

    const header = document.createElement("div");
    header.classList.add("section-header");

    const h1 = document.createElement("h1");
    h1.classList.add("section-title");
    h1.textContent = title;

    const p = document.createElement("p");
    p.classList.add("section-subtitle");
    p.textContent = subtitle;

    const section = document.createElement("section");
    section.classList.add("preview-list-content");

    for (const proj of projects) {
        const { title, description, link, downloads, dateCreated } = proj;
        section.appendChild(createPreviewCard(title, description, link, downloads, dateCreated));
    }

    const divider = document.createElement("div");
    divider.classList.add("divider1");

    header.appendChild(h1);
    header.appendChild(p);
    container.appendChild(header);
    container.appendChild(section);
    container.appendChild(divider);

    return container;
}

const sectionsContainer = document.getElementById("sectionsContainer");
const sections = [
    {
        title: "Here are some of my texture packs:",
        subtitle: "Click the 'View' button on a project to learn more.",
        projects: [
            {
                title: "Ui Utils [JEI]",
                description: "A Minecraft Bedrock texture pack that imitates a popular Minecraft mod called 'Just Enough Items (JEI)' with a bunch of neat features.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/ui-utils",
                downloads: "9.8K",
                dateCreated: "2024-11-17"
            },
            {
                title: "Fast Loading Screen Pack",
                description: "This pack 'removes' the loading screen menu and allows you to freely move your camera and mouse while loading the world or dimension.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-loading-screen-pack",
                downloads: "26.8K",
                dateCreated: "2024-11-29"
            },
            {
                title: "Java Locate Command",
                description: "Are you tired of constantly typing in structure or biome coordinates? This pack is the solution!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/java-locate-command",
                downloads: "1.0K",
                dateCreated: "2025-02-04"
            },
            {
                title: "Toggle Night Vision",
                description: "Want to see caves but too lazy to get torches? This pack makes it easier for you to see in dark places without them!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-night-vision",
                downloads: "158.6K",
                dateCreated: "2025-01-22"
            },
            {
                title: "Cape Physics Resource Pack",
                description: "This resource pack adds an animation that simulates 'Physics' to your personal cape.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/cape-physics-resource-pack",
                downloads: "1.3K",
                dateCreated: "2025-02-22"
            },
            {
                title: "Minimap Resource Pack",
                description: "This is a very powerful resource pack for Minecraft Bedrock that uses the structure renderer to display an area around you as a 3D renderer.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/minimap-resource-pack",
                downloads: "29.2K",
                dateCreated: "2024-11-18"
            },
            {
                title: "Effect Display Overlay",
                description: "View active mob effects while moving!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/effect-display-overlay",
                downloads: "5.4K",
                dateCreated: "2024-12-16"
            },
            {
                title: "Low Item Durability Warning",
                description: "Tired of accidentally breaking your tools without realizing their low durability? Well, this pack is for you! This texture pack indicates when an item is about to break.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/low-item-durability-warning",
                downloads: "973",
                dateCreated: "2024-11-26"
            }

        ]
    },
    {
        title: "Unreleased and Discontinued Projects:",
        subtitle: "These projects are not finished and (some) will not be available for download.",
        projects: [
            {
                title: "Cyanide Config Manager (Android Apk)",
                description: "An Android app that allows you to configure Cyanide Pack."
            },
            {
                title: "Keymapper (Android Apk)",
                description: "An Android app that allows you map volume keys to other keys which minecraft can recognize."
            },
            {
                title: "MinecraftMod (Modded APK)",
                description: "A modded Minecraft Bedrock APK that contains custom ui, items, entites and more features that you can't find in the base game.",
                link: "https://t1m0thyyt.github.io/MinecraftMod/"
            },
            {
                title: "Cyanide Launcher (Android Apk)",
                description: "An Android launcher for Minecraft Bedrock with neat utility features built using Sketchware with the beautiful Material Design 3 theme.",
                link: "https://www.youtube.com/watch?v=dALZiUsE1gg"
            },
            {
                title: "Item Identifier (Minecraft Resource Pack)",
                description: "A texture pack that allows you to see namespaced item names.",
                link: "https://www.youtube.com/watch?v=j5ZCvQNc6Xo"
            },
            {
                title: "Shulkerbox Preview (Minecraft Resource Pack)",
                description: "A texture pack that allows you to see items inside shulker boxes.",
                link: "https://www.youtube.com/watch?v=mr1obbxR1yA"
            },
            {
                title: "Windows 11 Desktop (Minecraft Resource Pack)",
                description: "A texture pack that brings the Windows 11 desktop to Minecraft (its stupid i know).",
                link: "https://www.youtube.com/watch?v=3y5gfQnlmiw"
            },
            {
                title: "MinecraftMod App (Android Apk)",
                description: "An Android app that contains utilities with OreUi design.",
                link: "https://www.youtube.com/watch?v=byWmylqgWnI"
            }
        ]
    },
];

sections.forEach(sec => {
    sectionsContainer.appendChild(createSection(sec.title, sec.subtitle, sec.projects));
});
