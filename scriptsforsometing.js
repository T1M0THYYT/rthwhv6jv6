document.body.style.zoom = "0.8";

function createPreviewCard({ title, description, link, image, video }) {
    const card = document.createElement("div");
    card.classList.add("preview-card", "horizontal-card");

    let videoContainer, vid;

    if (image) {
        const img = document.createElement("img");
        img.src = image;
        img.alt = title || "Preview image";
        img.classList.add("preview-card-image-v2");

        img.style.cursor = "pointer";

        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");

            const enlargedImg = document.createElement("img");
            enlargedImg.src = image;
            enlargedImg.alt = title || "Preview image";
            enlargedImg.classList.add("enlarged-image");

            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);
        });

        card.appendChild(img);
    }

    if (video) {
        videoContainer = document.createElement("div");
        videoContainer.classList.add("preview-video-container");

        vid = document.createElement("video");
        vid.src = video;
        vid.controls = true;
        vid.preload = "metadata";

        if (!image) {
            videoContainer.classList.add("expanded");
        }

        videoContainer.appendChild(vid);
        card.appendChild(videoContainer);
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
        section.appendChild(createPreviewCard(proj));
    }

    header.appendChild(h1);
    header.appendChild(p);
    container.appendChild(header);
    container.appendChild(section);

    return container;
}

const sections = [
    {
        title: "Programming Shenanigans",
        subtitle: "Malware recreation, game development, and some random computer related stuff.",
        projects: [
            {
                title: "gdi manipulation",
                description: "A recreation of visual payloads from solaris.exe, written in c",
                video: "videos/test.mkv"
            },
            {
                title: "gdi v2",
                description: "Added flashing lights, random error sounds, distortion and etc.",
                video: "videos/test2.mp4"
            },
            {
                title: "Mandelbrot",
                description: "A Mandelbrot set rendered using C.",
                image: "images/mandelbrot.png"
            },
            {
                title: "Doom Style Game",
                description: "A simple game written in c and built using WINAPI functions.",
                video: "videos/2dshooter.mp4"
            },
            {
                title: "3D Game??",
                description: "The same 'doom' style game but with a tweaked raycasting function. Also added procedural map generation.",
                video: "videos/3dshooter.mkv"
            }
        ]
    }
];

const proj = document.getElementById("proj");
sections.forEach(sec => {
    proj.appendChild(createSection(sec.title, sec.subtitle, sec.projects));
});


const toggleBtn = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") body.classList.add("light-mode");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
});
