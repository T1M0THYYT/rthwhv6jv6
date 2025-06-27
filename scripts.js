document.body.classList.add("desktop");

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
    const card = document.createElement("div");
    card.classList.add("preview-card");

    const content = document.createElement("div");
    content.classList.add("preview-card-content");

    const header = document.createElement("div");
    header.classList.add("preview-card-header");

    if (title) {
        const h3 = document.createElement("h3");
        h3.textContent = title;
        header.appendChild(h3);
    }

    if (description) {
        const p = document.createElement("p");
        p.textContent = description;
        header.appendChild(p);
    }

    const meta = document.createElement("div");
    meta.classList.add("preview-card-meta");

    if (meta.children.length > 0) {
        header.appendChild(meta);
    }

    content.appendChild(header);

    if (link) {
        const footer = document.createElement("div");
        footer.classList.add("preview-footer");

        const a = document.createElement("a");
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
        const { title, description, link } = proj;
        section.appendChild(createPreviewCard(title, description, link));
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

const proj = document.getElementById("proj");
const sections = [
    {
        title: "Here are some of my texture packs:",
        subtitle: "Click the 'View' button on a project to learn more.",
        projects: [
            {
                title: "Quick Settings Hud",
                description: "Overlay the settings screen in the HUD!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/quick-settings-hud"
            },
            {
                title: "Toggle ESP",
                description: "A resource pack that allows you to see players/entities through walls and blocks!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-esp"
            },
            {
                title: "Fast Commands",
                description: "A resource pack that adds a Command Panel inside the chat screen for easy access.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-commands"
            },
            {
                title: "Java Locate Command",
                description: "Are you tired of constantly typing in structure or biome coordinates? This pack is the solution!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/java-locate-command"
            },
            {
                title: "Animated Hover Tooltips",
                description: "Adds unnecessary animations and effects to the item tooltips.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/animated-hover-tooltips"
            },
            {
                title: "Ui Utils [JEI]",
                description: "A Minecraft bedrock texture pack that imitates a popular Minecraft mod called \"Just Enough Items (JEI)\" with a bunch of neat features.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/ui-utils"
            },
            {
                title: "Fast Loading Screen Pack",
                description: "This pack \"removes\" the loading screen menu and allows you to freely move your camera and mouse while loading the world or dimension.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-loading-screen-pack"
            },
            {
                title: "Toggle Night Vision",
                description: "Want to see caves but too lazy to get torches? This pack makes easier for you to see in dark places without them!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-night-vision"
            },
            {
                title: "Cape Physics Resource Pack",
                description: "This resource pack adds an animation that simulates 'Physics' to your personal cape.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/cape-physics-resource-pack"
            },
            {
                title: "Minimap Resource Pack",
                description: "This is a very powerful resource pack for Minecraft Bedrock that uses the structure renderer to display an area around you as a 3D renderer.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/minimap-resource-pack"
            },
            {
                title: "Effect Display Overlay",
                description: "View active mob effects while moving!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/effect-display-overlay"
            },
            {
                title: "Low Item Durability Warning",
                description: "Tired of accidentally breaking your tools without realizing their low durability? Well this pack is for you!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/low-item-durability-warning"
            }
        ]
    }
]


const projdisc = document.getElementById("proj-disc");
const sectionsdisc = [
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
    proj.appendChild(createSection(sec.title, sec.subtitle, sec.projects));
});

sectionsdisc.forEach(sec => {
    projdisc.appendChild(createSection(sec.title, sec.subtitle, sec.projects));
});

