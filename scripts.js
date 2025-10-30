const navToggle = document.querySelector(".nav-toggle"),
    navMenu = document.querySelector(".nav-menu"),
    themeToggle = document.getElementById("themeToggle"),
    body = document.body,
    projectsData = [{ title: "My Minecraft Bedrock Texture Packs:", subtitle: "Projects I've made for Minecraft Bedrock. Click the 'View' button to see more details and download.", projects: [{ title: "Timer Hud", description: "Display a timer at the top of the screen! Can also be used when speedrunning :p", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/timer-hud", image: "https://media.forgecdn.net/attachments/description/null/description_23c5781c-0dc1-4391-a3da-14f3b2af35ea.png" }, { title: "Toggle Night Vision", description: "Want to see caves but too lazy to get torches? This pack makes easier for you to see in dark places without them!", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-night-vision", image: "https://media.forgecdn.net/avatars/thumbnails/1162/341/256/256/638731493141426148.png" }, { title: "Cape Physics Resource Pack", description: "This resource pack adds an animation that simulates 'Physics' to your personal cape.", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/cape-physics-resource-pack", image: "https://media.forgecdn.net/avatars/thumbnails/1184/227/256/256/638758100891478372.png" }, { title: "Quick Settings Hud", description: "Overlay the settings screen in the hud!", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/quick-settings-hud", image: "https://media.forgecdn.net/avatars/thumbnails/1300/332/256/256/638845164014325535.png" }, { title: "Toggle ESP", description: "A resource pack that allows you to see players/entities through walls and blocks!", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-esp", image: "https://media.forgecdn.net/avatars/thumbnails/1314/923/256/256/638855045862214712.png" }, { title: "Fast Commands", description: "A texture pack that adds a Command Panel inside the chat screen for easy access.", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-commands", image: "https://media.forgecdn.net/avatars/thumbnails/1318/685/256/256/638857367858341274.png" }, { title: "Java Locate Command", description: "Are you tired of constantly typing in structure or biome coordinates? This pack is the solution!", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/java-locate-command", image: "https://media.forgecdn.net/avatars/thumbnails/1171/412/256/256/638742722294753060.png" }, { title: "Animated Hover Tooltips", description: "Adds unnecessary animations and effects to the item tooltips.", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/animated-hover-text", image: "https://media.forgecdn.net/avatars/thumbnails/1238/209/256/256/638810579238682277_animated.gif" }, { title: "Ui Utils [JEI]", description: 'A Minecraft bedrock texture pack that imitates a popular Minecraft mod called "Just Enough Items (JEI)" with a bunch of neat features.', link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/ui-utils", image: "https://media.forgecdn.net/avatars/thumbnails/1127/431/256/256/638685522076354600.png" }, { title: "Fast Loading Screen Pack", description: 'This pack "removes" the loading screen menu and allows you to freely move your camera and mouse while loading the world or dimension.', link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-loading-screen-pack", image: "https://media.forgecdn.net/avatars/thumbnails/1126/666/256/256/638684534685125337.png" }, { title: "Minimap Resource Pack", description: "This is a very powerful resource pack for Minecraft Bedrock that uses the structure renderer to display an area around you as a 3D renderer.", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/minimap-resource-pack", image: "https://media.forgecdn.net/avatars/thumbnails/1142/5/256/256/638706011802199798.png" }, { title: "Effect Display Overlay", description: "View active mob effects while moving!", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/effect-display-overlay", image: "https://media.forgecdn.net/avatars/thumbnails/1137/254/256/256/638699310946160265.png" }, { title: "Low Item Durability Warning", description: "Tired of accidentally breaking your tools without realizing their low durability? Well this pack is for you! This texture pack indicates when an item is about to break.", link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/low-item-durability-warning", image: "https://media.forgecdn.net/avatars/thumbnails/1125/23/256/256/638682233905187622.png" }] }],
    archivedData = [{ title: "Archived Projects:", subtitle: "These are not released to the public and has been discontinued for various reasons.", projects: [{ title: "Cyanide Config Manager (Android Apk)", description: "An Android app that allows you to configure Cyanide Pack." }, { title: "Keymapper (Android Apk)", description: "An Android app that allows you map volume keys to other keys which minecraft can recognize." }, { title: "MinecraftMod (Modded APK)", description: "A modded Minecraft Bedrock APK that contains custom ui, items, entites and more features that you can't find in the base game.", link: "https://t1m0thyyt.github.io/MinecraftMod/" }, { title: "Cyanide Launcher (Android Apk)", description: "An Android launcher for Minecraft Bedrock with neat utility features built using Sketchware with the beautiful Material Design 3 theme.", link: "https://www.youtube.com/watch?v=dALZiUsE1gg" }, { title: "Item Identifier (Minecraft Resource Pack)", description: "A texture pack that allows you to see namespaced item names.", link: "https://www.youtube.com/watch?v=j5ZCvQNc6Xo" }, { title: "Shulkerbox Preview (Minecraft Resource Pack)", description: "A texture pack that allows you to see items inside shulker boxes.", link: "https://www.youtube.com/watch?v=mr1obbxR1yA" }, { title: "Windows 11 Desktop (Minecraft Resource Pack)", description: "A texture pack that brings the Windows 11 desktop ui to Minecraft.", link: "https://www.youtube.com/watch?v=3y5gfQnlmiw" }, { title: "MinecraftMod App (Android Apk)", description: "An Android app that contains utilities with OreUi design.", link: "https://www.youtube.com/watch?v=byWmylqgWnI" }] }];

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

function createProjectCard(e) {
    const t = createElement("div", "project-card");
    if (e.image) {
        const n = createElement("img", "project-image", { src: e.image, alt: e.title, loading: "lazy" });
        t.appendChild(n)
    }
    const n = createElement("div", "project-content"),
        a = createElement("h3", "project-title");
    a.textContent = e.title, n.appendChild(a);
    const i = createElement("p", "project-description");
    if (i.textContent = e.description, n.appendChild(i), e.link) {
        const t = createElement("a", "project-link", { href: e.link, target: "_blank", rel: "noopener" });
        t.textContent = "View Project", n.appendChild(t)
    }
    return t.appendChild(n), t
}

function createSection(e) {
    const t = createElement("div", "section-header"),
        n = createElement("h2", "section-title");
    n.textContent = e.title, t.appendChild(n);
    const a = createElement("p", "section-subtitle");
    a.textContent = e.subtitle, t.appendChild(a);
    const i = createElement("div", "projects-grid");
    return e.projects.forEach((e => { i.appendChild(createProjectCard(e)) })), { section: t, grid: i }
}

function toggleMobileMenu() {
    const e = "true" === navToggle.getAttribute("aria-expanded");
    navToggle.setAttribute("aria-expanded", !e), navMenu.classList.toggle("active");
    const t = navToggle.querySelectorAll("span");
    e ? (t[0].style.transform = "none", t[1].style.opacity = "1", t[2].style.transform = "none") : (t[0].style.transform = "rotate(45deg) translate(5px, 5px)", t[1].style.opacity = "0", t[2].style.transform = "rotate(-45deg) translate(7px, -6px)")
}

function initTheme() { "light" === localStorage.getItem("theme") && body.classList.add("light-mode") }

function toggleTheme() {
    body.classList.toggle("light-mode");
    const e = body.classList.contains("light-mode");
    localStorage.setItem("theme", e ? "light" : "dark")
}

function initProjects() {
    const e = document.getElementById("projects"),
        t = document.getElementById("archived"),
        { section: n, grid: a } = createSection(projectsData[0]);
    e.appendChild(n), e.appendChild(a);
    const { section: i, grid: o } = createSection(archivedData[0]);
    t.appendChild(i), t.appendChild(o)
}
document.addEventListener("click", (e => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute("aria-expanded", "false"), navMenu.classList.remove("active");
        const e = navToggle.querySelectorAll("span");
        e[0].style.transform = "none", e[1].style.opacity = "1", e[2].style.transform = "none"
    }
})), navToggle.addEventListener("click", toggleMobileMenu), themeToggle.addEventListener("click", toggleTheme), window.addEventListener("resize", (() => {
    if (window.innerWidth > 767) {
        navToggle.setAttribute("aria-expanded", "false"), navMenu.classList.remove("active");
        const e = navToggle.querySelectorAll("span");
        e[0].style.transform = "none", e[1].style.opacity = "1", e[2].style.transform = "none"
    }
})), document.addEventListener("DOMContentLoaded", (() => { initTheme(), initProjects() })), document.querySelectorAll('a[href^="#"]').forEach((e => {
    e.addEventListener("click", (function(e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute("href"));
        t && (t.scrollIntoView({ behavior: "smooth", block: "start" }), window.innerWidth <= 767 && toggleMobileMenu())
    }))
}));
const warning = document.getElementById("devtools-warning");

function showWarning() { warning.style.display = "block", setTimeout((() => { warning.style.display = "none" }), 2e3) }
document.addEventListener("keydown", (function(e) {
    ("F12" === e.key || e.ctrlKey && e.shiftKey && "i" === e.key.toLowerCase() || e.ctrlKey && "u" === e.key.toLowerCase()) && (e.preventDefault(), showWarning())
})), document.addEventListener("contextmenu", (function(e) { e.preventDefault(), showWarning() }));

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hero, .section-header, .project-card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
        scrollTopBtn.classList.toggle('show', window.scrollY > 300);
    });
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});