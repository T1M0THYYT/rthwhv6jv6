// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Project Data
const projectsData = [
  {
    title: "My Minecraft Bedrock Texture Packs:",
    subtitle: "Projects I've made for Minecraft Bedrock. Click the 'View' button to see more details and download.",
    projects: [
      {
        title: "Timer Hud",
        description: "Display a timer at the top of the screen! Can also be used when speedrunning :p",
        link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/timer-hud",
        image: "https://media.forgecdn.net/attachments/description/null/description_23c5781c-0dc1-4391-a3da-14f3b2af35ea.png"
      },
      {
        title: "Toggle Night Vision",
        description: "Want to see caves but too lazy to get torches? This pack makes easier for you to see in dark places without them!",
        link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/toggle-night-vision",
        image: "https://media.forgecdn.net/avatars/thumbnails/1162/341/256/256/638731493141426148.png"
      },
      {
        title: "Cape Physics Resource Pack",
        description: "This resource pack adds an animation that simulates 'Physics' to your personal cape.",
        link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/cape-physics-resource-pack",
        image: "https://media.forgecdn.net/avatars/thumbnails/1184/227/256/256/638758100891478372.png"
      },
      {
        title: "Quick Settings Hud",
        description: "Overlay the settings screen in the hud!",
        link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/quick-settings-hud",
        image: "https://media.forgecdn.net/avatars/thumbnails/1300/332/256/256/638845164014325535.png"
      },
      {
        title: "Toggle ESP",
        description: "A resource pack that allows you to see players/entities through walls and blocks!",
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
        description: "A Minecraft bedrock texture pack that imitates a popular Minecraft mod called \"Just Enough Items (JEI)\" with a bunch of neat features.",
        link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/ui-utils",
        image: "https://media.forgecdn.net/avatars/thumbnails/1127/431/256/256/638685522076354600.png"
      },
      {
        title: "Fast Loading Screen Pack",
        description: "This pack \"removes\" the loading screen menu and allows you to freely move your camera and mouse while loading the world or dimension.",
        link: "https://www.curseforge.com/minecraft-bedrock/texture-packs/fast-loading-screen-pack",
        image: "https://media.forgecdn.net/avatars/thumbnails/1126/666/256/256/638684534685125337.png"
      },
      {
        title: "Minimap Resource Pack",
        description: "This is a very powerful resource pack for Minecraft Bedrock that uses the structure renderer to display an area around you as a 3D renderer.",
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
  }
];

const archivedData = [
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
  }
];

// Utility Functions
function createElement(tag, className, attributes = {}) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

function createProjectCard(project) {
  const card = createElement('div', 'project-card');
  
  if (project.image) {
    const image = createElement('img', 'project-image', {
      src: project.image,
      alt: project.title,
      loading: 'lazy'
    });
    card.appendChild(image);
  }
  
  const content = createElement('div', 'project-content');
  
  const title = createElement('h3', 'project-title');
  title.textContent = project.title;
  content.appendChild(title);
  
  const description = createElement('p', 'project-description');
  description.textContent = project.description;
  content.appendChild(description);
  
  if (project.link) {
    const link = createElement('a', 'project-link', {
      href: project.link,
      target: '_blank',
      rel: 'noopener'
    });
    link.textContent = 'View Project';
    content.appendChild(link);
  }
  
  card.appendChild(content);
  return card;
}

function createSection(data) {
  const section = createElement('div', 'section-header');
  
  const title = createElement('h2', 'section-title');
  title.textContent = data.title;
  section.appendChild(title);
  
  const subtitle = createElement('p', 'section-subtitle');
  subtitle.textContent = data.subtitle;
  section.appendChild(subtitle);
  
  const grid = createElement('div', 'projects-grid');
  data.projects.forEach(project => {
    grid.appendChild(createProjectCard(project));
  });
  
  return { section, grid };
}

// Mobile Navigation
function toggleMobileMenu() {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !isExpanded);
  navMenu.classList.toggle('active');
  
  // Animate hamburger menu
  const spans = navToggle.querySelectorAll('span');
  if (!isExpanded) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    
    // Reset hamburger animation
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }
}

function toggleTheme() {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Initialize Projects
function initProjects() {
  const projectsSection = document.getElementById('projects');
  const archivedSection = document.getElementById('archived');
  
  // Create projects section
  const { section: projectsHeader, grid: projectsGrid } = createSection(projectsData[0]);
  projectsSection.appendChild(projectsHeader);
  projectsSection.appendChild(projectsGrid);
  
  // Create archived section
  const { section: archivedHeader, grid: archivedGrid } = createSection(archivedData[0]);
  archivedSection.appendChild(archivedHeader);
  archivedSection.appendChild(archivedGrid);
}

// Event Listeners
navToggle.addEventListener('click', toggleMobileMenu);
themeToggle.addEventListener('click', toggleTheme);

// Close mobile menu on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 767) {
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    
    // Reset hamburger animation
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProjects();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Close mobile menu after navigation
      if (window.innerWidth <= 767) {
        toggleMobileMenu();
      }
    }
  });
});
