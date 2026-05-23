const navToggle = document.querySelector(".nav-toggle"),
    navMenu = document.querySelector(".nav-menu"),
    themeToggle = document.getElementById("themeToggle"),
    body = document.body,
    shenanigansData = [{
        title: "Programming Shenanigans",
        subtitle: "Malware recreation, game development, and other computer-related experiments.",
        projects: [{
            title: "GDI Manipulation",
            description: "A C recreation of visual payloads inspired by solaris.exe.",
            video: "videos/test.mkv"
        }, {
            title: "GDI v2",
            description: "An expanded version with flashing lights, random error sounds, distortion, and additional effects.",
            video: "videos/test2.mp4"
        }, {
            title: "Mandelbrot",
            description: "A Mandelbrot set renderer written in C.",
            image: "images/mandelbrot.png"
        }, {
            title: "Doom-Style Game",
            description: "A simple raycasting game written in C and built with WinAPI functions.",
            video: "videos/2dshooter.mp4"
        }, {
            title: "3D Raycasting Game",
            description: "A raycasting experiment with procedural map generation.",
            video: "videos/3dshooter.mkv"
        }, {
            title: "3D Voxel Game",
            description: "A C++ and OpenGL project with procedural voxel landscapes and block-based rendering.",
            video: "videos/voxelgame.mkv"
        }]
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
        image.style.cursor = "pointer";
        image.addEventListener("click", () => {
            const overlay = createElement("div", "image-overlay");
            const enlargedImage = createElement("img", "enlarged-image", {
                src: project.image,
                alt: project.title
            });
            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });
            overlay.appendChild(enlargedImage);
            document.body.appendChild(overlay);
        });
        card.appendChild(image);
    }

    if (project.video) {
        const container = createElement("div", "video-container");
        const video = createElement("video", "project-video", {
            controls: "",
            preload: "metadata"
        });
        const source = createElement("source", "", {
            src: project.video,
            type: project.video.endsWith(".mp4") ? "video/mp4" : "video/x-matroska"
        });
        video.appendChild(source);
        video.appendChild(document.createTextNode("Your browser cannot play this video format."));
        container.appendChild(video);
        card.appendChild(container);
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
        link.textContent = "View Project";
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
    const projects = document.getElementById("projects");
    const { section, grid } = createSection(shenanigansData[0]);
    projects.appendChild(section);
    projects.appendChild(grid);
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
