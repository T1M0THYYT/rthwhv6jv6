// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Project Data for Shenanigans page
const shenanigansData = [
  {
    title: "Programming Shenanigans",
    subtitle: "Malware recreation, game development, and some random computer related stuff.",
    projects: [
      {
        title: "GDI Manipulation",
        description: "A recreation of visual payloads from solaris.exe, written in C",
        video: "videos/test.mkv"
      },
      {
        title: "GDI v2",
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
        description: "A simple game written in C and built using WINAPI functions.",
        video: "videos/2dshooter.mp4"
      },
      {
        title: "3D Game??",
        description: "The same 'doom' style game but with a tweaked raycasting function. Also added procedural map generation.",
        video: "videos/3dshooter.mkv"
      },
      {
        title: "3D Voxel Game",
        description: "A project written in C++ with OpenGL. Procedural generation of voxel landscapes and block-based rendering.",
        video: "videos/voxelgame.mkv"
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
    
    // Add click to enlarge functionality
    image.style.cursor = 'pointer';
    image.addEventListener('click', () => {
      const overlay = createElement('div', 'image-overlay');
      const enlargedImg = createElement('img', 'enlarged-image', {
        src: project.image,
        alt: project.title
      });
      
      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
      
      overlay.appendChild(enlargedImg);
      document.body.appendChild(overlay);
    });
    
    card.appendChild(image);
  }
  
  if (project.video) {
    const videoContainer = createElement('div', 'video-container');
    const video = createElement('video', 'project-video', {
      src: project.video,
      controls: '',
      preload: 'metadata'
    });
    
    videoContainer.appendChild(video);
    card.appendChild(videoContainer);
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
  
  // Create shenanigans section
  const { section: projectsHeader, grid: projectsGrid } = createSection(shenanigansData[0]);
  projectsSection.appendChild(projectsHeader);
  projectsSection.appendChild(projectsGrid);
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
