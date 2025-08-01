document.body.style.zoom = "0.8";

function createPreviewCard({ title, description, link, image, video }) {
    const card = document.createElement("div");
    card.classList.add("preview-card", "horizontal-card");

    let videoContainer, vid;

    // Optional image (thumbnail/screenshot)
    if (image) {
        const img = document.createElement("img");
        img.src = image;
        img.alt = title || "Preview image";
        img.classList.add("preview-card-image");

        img.style.cursor = "pointer";

        // Clicking image → enlarge fullscreen
        img.addEventListener("click", () => {
            const overlay = document.createElement("div");
            overlay.classList.add("image-overlay");

            const enlargedImg = document.createElement("img");
            enlargedImg.src = image;
            enlargedImg.alt = title || "Preview image";
            enlargedImg.classList.add("enlarged-image");

            // Click overlay to close
            overlay.addEventListener("click", () => {
                document.body.removeChild(overlay);
            });

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);
        });

        card.appendChild(img);
    }

    // Optional video
    if (video) {
        videoContainer = document.createElement("div");
        videoContainer.classList.add("preview-video-container");

        vid = document.createElement("video");
        vid.src = video;
        vid.controls = true;
        vid.preload = "metadata";

        // If no screenshot, show video expanded immediately
        if (!image) {
            videoContainer.classList.add("expanded");
        }

        videoContainer.appendChild(vid);
        card.appendChild(videoContainer);
    }

    // Text content
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

    // Footer link
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

// Section creator stays same
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
        title: "Windows shenanigans",
        subtitle: "malware payload recreation and whatnot.",
        projects: [
            {
                title: "gdi thing",
                description: "Click the thumbnail to expand the video.",
                video: "videos/test.mkv"
            },
            {
                title: "gdi v2",
                description: "Flashing lights, random error sounds, distortion and etc.",
                video: "videos/test2.mp4"
            },
            {
                title: "mandelbrot??",
                description: "interesting stuff",
                image: "images/mandelbrot.png"
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
