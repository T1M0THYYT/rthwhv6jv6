function createPreviewCard(title, description, link, iconUrl) {
    const card = document.createElement("div");
    card.classList.add("preview-card");

    const cover = document.createElement("img");
    cover.classList.add("preview-card-cover");
    cover.src = iconUrl || "assets/placeholder.png";
    cover.alt = title;
    card.appendChild(cover);

    const content = document.createElement("div");
    content.classList.add("preview-card-content");
    card.appendChild(content);

    const header = document.createElement("div");
    header.classList.add("preview-card-header");
    content.appendChild(header);

    const h3 = document.createElement("h3");
    h3.textContent = title;
    header.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = description;
    header.appendChild(p);

    const footer = document.createElement("div");
    footer.classList.add("preview-footer");
    content.appendChild(footer);

    const a = document.createElement("a");
    a.classList.add("preview-btn");
    a.href = link;
    a.textContent = "View";
    footer.appendChild(a);

    return card;
}


async function loadProjects() {
    try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        const section = document.querySelector('.preview-list-content');

        data.data.forEach(project => {
            const title = project.name;
            const description = project.summary;
            const link = project.links.websiteUrl;
            const iconUrl = project.logo?.url || 'assets/placeholder.png';

            const card = createPreviewCard(title, description, link, iconUrl);
            section.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadProjects);
