const navToggle = document.querySelector(".nav-toggle"),
    navMenu = document.querySelector(".nav-menu"),
    themeToggle = document.getElementById("themeToggle"),
    body = document.body,
    projectsData = [{
        title: "My Minecraft Content:",
        subtitle: "A selection of Minecraft Bedrock content I made over the past 2-3 years. Click View to see details and downloads.",
        projects: [
            {
                title: "Toggle Night Vision Pack",
                description: "Makes caves and dark areas easier to see without relying on torches.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-night-vision",
                image: "https://media.forgecdn.net/avatars/thumbnails/1162/341/256/256/638731493141426148.png"
            },
            {
                title: "Toggle Night Vision Text Display Remover",
                description: "An optional texture pack for Toggle Night Vision that removes the text at the top center of the screen.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/night-vision-text-display-remover",
                image: "https://media.forgecdn.net/avatars/thumbnails/1524/220/256/256/638989678194551698.png"
            },
            {
                title: "Deesse UI Pack",
                description: "A UI resource pack that adds new features, tweaks, and interface designs to improve Minecraft gameplay. Created by ItzRiyo, with my ToggleNightVision code contribution.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/deesse-ui-pack",
                image: "https://media.forgecdn.net/avatars/thumbnails/1580/691/256/256/639023452274223520.jpg"
            },
            {
                title: "Java Subtitles Pack",
                description: "Repositions subtitles to match Minecraft Java Edition. Currently built for Minecraft Preview.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/java-subtitles",
                image: "https://media.forgecdn.net/avatars/thumbnails/1556/676/256/256/639010090774649421.png"
            },
            {
                title: "Force Locator Bar Pack",
                description: "Forcibly enables the Locator Bar feature on servers and worlds.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/force-locator-bar",
                image: "https://media.forgecdn.net/avatars/thumbnails/1522/367/256/256/638988606284989720.png"
            },
            {
                title: "Better Enchant Pack",
                description: "Utility resource pack to view enchant names and quickly swap items after enchanting!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/quick-enchant",
                image: "https://media.forgecdn.net/avatars/thumbnails/1519/581/256/256/638986906341540659.png"
            },
            {
                title: "Pause Screen Fix Pack",
                description: "Swap the marketplace button with the settings button.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/pause-screen-fixer",
                image: "https://media.forgecdn.net/avatars/thumbnails/1497/790/256/256/638972949331132938.jpg"
            },
            {
                title: "Timer Hud",
                description: "Displays a timer at the top of the screen, useful for speedrunning and timed challenges.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/timer-hud",
                image: "https://media.forgecdn.net/attachments/description/null/description_23c5781c-0dc1-4391-a3da-14f3b2af35ea.png"
            },
            {
                title: "Cape Physics Resource Pack",
                description: "Adds an animation that simulates physics on your personal cape.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/cape-physics-resource-pack",
                image: "https://media.forgecdn.net/avatars/thumbnails/1184/227/256/256/638758100891478372.png"
            },
            {
                title: "Quick Settings Hud",
                description: "Overlays the settings screen inside the HUD for faster access.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/quick-settings-hud",
                image: "https://media.forgecdn.net/avatars/thumbnails/1300/332/256/256/638845164014325535.png"
            },
            {
                title: "Toggle ESP",
                description: "A resource pack that lets you see players and entities through walls and blocks.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-esp",
                image: "https://media.forgecdn.net/avatars/thumbnails/1314/923/256/256/638855045862214712.png"
            },
            {
                title: "Fast Commands",
                description: "A texture pack that adds a Command Panel inside the chat screen for easy access.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-commands",
                image: "https://media.forgecdn.net/avatars/thumbnails/1318/685/256/256/638857367858341274.png"
            },
            {
                title: "Java Locate Command",
                description: "Are you tired of constantly typing in structure or biome coordinates? This pack is the solution!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/java-locate-command",
                image: "https://media.forgecdn.net/avatars/thumbnails/1171/412/256/256/638742722294753060.png"
            },
            {
                title: "Animated Hover Tooltips",
                description: "Adds unnecessary animations and effects to the item tooltips.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/animated-hover-text",
                image: "https://media.forgecdn.net/avatars/thumbnails/1238/209/256/256/638810579238682277_animated.gif"
            },
            {
                title: "Ui Utils [JEI]",
                description: 'A Minecraft Bedrock texture pack that imitates the popular Java mod "Just Enough Items (JEI)" with several utility features.',
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/ui-utils",
                image: "https://media.forgecdn.net/avatars/thumbnails/1127/431/256/256/638685522076354600.png"
            },
            {
                title: "Fast Loading Screen Pack",
                description: 'This pack "removes" the loading screen menu and allows you to freely move your camera and mouse while loading the world or dimension.',
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-loading-screen-pack",
                image: "https://media.forgecdn.net/avatars/thumbnails/1126/666/256/256/638684534685125337.png"
            },
            {
                title: "Minimap Resource Pack",
                description: "A Minecraft Bedrock resource pack that uses the structure renderer to display the area around you as a 3D minimap.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/minimap-resource-pack",
                image: "https://media.forgecdn.net/avatars/thumbnails/1142/5/256/256/638706011802199798.png"
            },
            {
                title: "Effect Display Overlay",
                description: "View active mob effects while moving!",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/effect-display-overlay",
                image: "https://media.forgecdn.net/avatars/thumbnails/1137/254/256/256/638699310946160265.png"
            },
            {
                title: "Low Item Durability Warning",
                description: "Tired of accidentally breaking your tools without realizing their low durability? Well this pack is for you! This texture pack indicates when an item is about to break.",
                link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/low-item-durability-warning",
                image: "https://media.forgecdn.net/avatars/thumbnails/1125/23/256/256/638682233905187622.png"
            }
        ]
    }],
    archivedData = [{
        title: "Archived Projects:",
        subtitle: "These projects were discontinued or were not released publicly.",
        projects: [
            {
                title: "Cyanide Config Manager (Android App)",
                description: "An external app that allows you to configure Cyanide Texture Pack."
            },
            {
                title: "Keymapper (Android App)",
                description: "An Android app that maps volume keys to Minecraft-friendly keystrokes, such as F5 for quick third-person view."
            },
            {
                title: "MinecraftMod (Modded Minecraft Bedrock APK)",
                description: "A modified Minecraft Bedrock APK with custom UI, items, entities, and features that are not present in the base game.",
                link: "https://t1m0thyyt.github.io/MinecraftMod/"
            },
            {
                title: "Cyanide Launcher (Android App)",
                description: "A launcher for Minecraft Bedrock with neat utility features built using Sketchware with the beautiful Material Design 3 theme.",
                link: "https://www.youtube.com/watch?v=dALZiUsE1gg"
            },
            {
                title: "Item Identifier (Texture Pack)",
                description: "A texture pack that allows you to see namespaced item names.",
                link: "https://www.youtube.com/watch?v=j5ZCvQNc6Xo"
            },
            {
                title: "Shulkerbox Preview (Texture Pack for Minecraft Mod)",
                description: "A texture pack that allows you to see items inside shulker boxes. Works only with MinecraftMod.",
                link: "https://www.youtube.com/watch?v=mr1obbxR1yA"
            },
            {
                title: "Windows 11 Desktop (Texture Pack)",
                description: "A texture pack that brings the Windows 11 desktop look to Minecraft.",
                link: "https://www.youtube.com/watch?v=3y5gfQnlmiw"
            },
            {
                title: "MinecraftMod App (Android App)",
                description: "An app that contains utilities for MinecraftMod, built with OreUI-style design.",
                link: "https://www.youtube.com/watch?v=byWmylqgWnI"
            }
        ]
    }];

function createElement(tagName, className, attributes = {}) {
    const element = document.createElement(tagName);
    if (className) {
        element.className = className;
    }
    Object.entries(attributes).forEach(([attrName, attrValue]) => {
        element.setAttribute(attrName, attrValue);
    });
    return element;
}

function createProjectCard(project) {
    const card = createElement("div", "project-card");

    if (project.image) {
        const image = createElement("img", "project-image", {
            src: project.image,
            alt: project.title,
            loading: "lazy"
        });
        card.appendChild(image);
    }

    const content = createElement("div", "project-content");
    const title = createElement("h3", "project-title");
    title.textContent = project.title;
    content.appendChild(title);

    const description = createElement("p", "project-description");
    description.textContent = project.description;
    content.appendChild(description);

    if (project.link) {
        const link = createElement("a", "project-link", {
            href: project.link,
            target: "_blank",
            rel: "noopener"
        });
        link.textContent = "View";
        content.appendChild(link);
    }

    card.appendChild(content);
    return card;
}

function createSection(sectionData) {
    const header = createElement("div", "section-header");
    const title = createElement("h2", "section-title");
    title.textContent = sectionData.title;
    header.appendChild(title);

    const subtitle = createElement("p", "section-subtitle");
    subtitle.textContent = sectionData.subtitle;
    header.appendChild(subtitle);

    const grid = createElement("div", "projects-grid");
    sectionData.projects.forEach(project => {
        grid.appendChild(createProjectCard(project));
    });
    return {
        section: header,
        grid
    };
}

function resetMobileMenuIcon() {
    navToggle.setAttribute("aria-expanded", "false");
    navMenu.classList.remove("active");
    const bars = navToggle.querySelectorAll("span");
    bars[0].style.transform = "none";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "none";
}

function toggleMobileMenu() {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", !expanded);
    navMenu.classList.toggle("active");
    const bars = navToggle.querySelectorAll("span");
    if (expanded) {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    } else {
        bars[0].style.transform = "rotate(45deg) translate(4px, 4px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(-45deg) translate(4px, -4px)";
    }
}

function initTheme() {
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }
}

function toggleTheme() {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
}

function initProjects() {
    const projectsSection = document.getElementById("projects");
    const archivedSection = document.getElementById("archived");

    if (projectsSection) {
        const { section, grid } = createSection(projectsData[0]);
        projectsSection.appendChild(section);
        projectsSection.appendChild(grid);
    }

    if (archivedSection) {
        const { section, grid } = createSection(archivedData[0]);
        archivedSection.appendChild(section);
        archivedSection.appendChild(grid);
    }
}

function initScrollTop() {
    const scrollTopBtn = document.getElementById("scrollTop");
    if (!scrollTopBtn) {
        return;
    }
    window.addEventListener("scroll", () => {
        scrollTopBtn.classList.toggle("show", window.scrollY > 300);
    });
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

document.addEventListener("click", event => {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        resetMobileMenuIcon();
    }
});

navToggle.addEventListener("click", toggleMobileMenu);
themeToggle.addEventListener("click", toggleTheme);

window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
        resetMobileMenuIcon();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initProjects();
    initScrollTop();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            if (window.innerWidth <= 767) {
                toggleMobileMenu();
            }
        }
    });
});
