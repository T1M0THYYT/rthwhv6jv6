document.body.style.zoom = "0.8";

function createPreviewCard(title, description, link, image) {
    const card = document.createElement("div");
    card.classList.add("preview-card", "horizontal-card"); // Add a modifier class

    if (image) {
        const img = document.createElement("img");
        img.src = image;
        img.alt = title || "Project image";
        img.classList.add("preview-card-image"); // New class for horizontal layout
        card.appendChild(img);
    }

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
        const { title, description, link, image } = proj;
        section.appendChild(createPreviewCard(title, description, link, image));
    }

    header.appendChild(h1);
    header.appendChild(p);
    container.appendChild(header);
    container.appendChild(section);

    return container;
}

const proj = document.getElementById("proj");
const sections = [
    {
        title: "My Minecraft Bedrock Texture Packs:",
        subtitle: "Projects I've made for Minecraft Bedrock. Click the 'View' button to see more details and download.",
        projects: [
            {
                title: "Timer Hud",
                description: "Display a timer at the top of the screen! Can also be used when speedrunning :p",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/timer-hud",
                downloads: "None (Under Review)",
                dateCreated: "Aug 10, 2025",
                image: "images/placeholder.gif"
            },
            {
                title: "Toggle Night Vision",
                description: "Want to see caves but too lazy to get torches? This pack makes easier for you to see in dark places without them!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-night-vision",
                downloads: "363.1K",
                dateCreated: "Jan 22, 2025",
                image: "https://media.forgecdn.net/avatars/thumbnails/1162/341/256/256/638731493141426148.png"
            },
            {
                title: "Cape Physics Resource Pack",
                description: "This resource pack adds an animation that simulates 'Physics' to your personal cape.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/cape-physics-resource-pack",
                downloads: "3.2K",
                dateCreated: "Feb 22, 2025",
                image: "https://media.forgecdn.net/avatars/thumbnails/1184/227/256/256/638758100891478372.png"
            },
            {
                title: "Quick Settings Hud",
                description: "Overlay the settings screen in the hud!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/quick-settings-hud",
                downloads: "606",
                dateCreated: "Jun 3, 2025",
                image: "https://media.forgecdn.net/avatars/thumbnails/1300/332/256/256/638845164014325535.png"
            },
            {
                title: "Toggle ESP",
                description: "A resource pack that allows you to see players/entities through walls and blocks!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-esp",
                downloads: "1.0K",
                dateCreated: "Jun 14, 2025",
                image: "https://media.forgecdn.net/avatars/thumbnails/1314/923/256/256/638855045862214712.png"
            },
            {
                title: "Fast Commands",
                description: "A resource pack that adds a Command Panel inside the chat screen for easy access.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-commands",
                downloads: "529",
                dateCreated: "Jun 14, 2025",
                image: "https://media.forgecdn.net/avatars/thumbnails/1318/685/256/256/638857367858341274.png"
            },
            {
                title: "Java Locate Command",
                description: "Are you tired of constantly typing in structure or biome coordinates? This pack is the solution!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/java-locate-command",
                downloads: "2.2K",
                dateCreated: "Feb 4, 2025",
                image: "https://media.forgecdn.net/avatars/thumbnails/1171/412/256/256/638742722294753060.png"
            },
            {
                title: "Animated Hover Tooltips",
                description: "Adds unnecessary animations and effects to the item tooltips.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/animated-hover-text",
                downloads: "2.2K",
                dateCreated: "Mar 22, 2025",
                image: "https://media.forgecdn.net/avatars/thumbnails/1238/209/256/256/638810579238682277_animated.gif"
            },
            {
                title: "Ui Utils [JEI]",
                description: "A Minecraft bedrock texture pack that imitates a popular Minecraft mod called \"Just Enough Items (JEI)\" with a bunch of neat features.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/ui-utils",
                downloads: "18.5K",
                dateCreated: "Nov 17, 2024",
                image: "https://media.forgecdn.net/avatars/thumbnails/1127/431/256/256/638685522076354600.png"
            },
            {
                title: "Fast Loading Screen Pack",
                description: "This pack \"removes\" the loading screen menu and allows you to freely move your camera and mouse while loading the world or dimension.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-loading-screen-pack",
                downloads: "46.2K",
                dateCreated: "Nov 29, 2024",
                image: "https://media.forgecdn.net/avatars/thumbnails/1126/666/256/256/638684534685125337.png"
            },
            {
                title: "Minimap Resource Pack",
                description: "This is a very powerful resource pack for Minecraft Bedrock that uses the structure renderer to display an area around you as a 3D renderer.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/minimap-resource-pack",
                downloads: "40.5K",
                dateCreated: "Nov 18, 2024",
                image: "https://media.forgecdn.net/avatars/thumbnails/1142/5/256/256/638706011802199798.png"
            },
            {
                title: "Effect Display Overlay",
                description: "View active mob effects while moving!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/effect-display-overlay",
                downloads: "7.9K",
                dateCreated: "Dec 16, 2024",
                image: "https://media.forgecdn.net/avatars/thumbnails/1137/254/256/256/638699310946160265.png"
            },
            {
                title: "Low Item Durability Warning",
                description: "Tired of accidentally breaking your tools without realizing their low durability? Well this pack is for you! This texture pack indicates when an item is about to break.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/low-item-durability-warning",
                downloads: "1.4K",
                dateCreated: "Nov 26, 2024",
                image: "https://media.forgecdn.net/avatars/thumbnails/1125/23/256/256/638682233905187622.png"
            }
        ]
    }
]


const projdisc = document.getElementById("proj-disc");
const sectionsdisc = [
    {
        title: "Archived Projects:",
        subtitle: "These are not released to the public and has been discontinued for various reasons.",
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

document.body.classList.add("desktop");

const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") body.classList.add("light-mode");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
});
