// Project Data
const projectData = [
    {
      title: "Safire",
      description: "An AI-powered system with a dashboard to detect, hide, and manage real-time harassment messages on social-media.",
      techStack: ["Plasmo", "Upstash", "Puppeteer", "NextJS", "ExpressJS", "Gemini"],
      imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2831&q=80",
      liveUrl: "https://safire-five.vercel.app",
      repoUrl: "https://github.com/Anamika1608/Harassment-Saver-Project",
      category: "ai"
    },
    {
      title: "Skymate",
      description: "Smart weather platform offering personalized forecasts, lifestyle recommendations, and interactive user engagement.",
      techStack: ["React", "Express", "MongoDB", "Cloudinary", "Weather API", "Groq"],
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      liveUrl: "https://skymate.vercel.app",
      repoUrl: "https://github.com/Anamika1608/SkyMate",
      category: "web"
    },
    {
      title: "Sukoon",
      description: "Mental wellness platform offering empathetic AI conversations, dream analysis with digital detox detoxification",
      techStack: ["React", "TailwindCSS", "Framer", "Gsap", "Hume", "Gemini"],
      imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      liveUrl: "https://sukoon-space.vercel.app",
      repoUrl: "https://github.com/Sukoon-A-Mental-Wellness-Platform/website",
      category: "ai"
    },
    {
      title: "Connect-Me",
      description: "Scalable video conferencing web-app using SFU to connect 100+ concurrent live users.",
      techStack: ["React", "Socket.io", "WebRTC", "MediaSoup", "Express"],
      imageUrl: "https://images.unsplash.com/photo-1607988795691-3d0147b43231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      liveUrl: "#",
      repoUrl: "https://github.com/Anamika1608/Connect-Me",
      category: "web"
    },
    {
      title: "Jivika",
      description: "A PWA having interactive 3D models of herbal plants, along with detailed information about each plant.",
      techStack: ["React", "PWA", "Three.js", "GLB 3D Models", "Blender"],
      imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      liveUrl: "https://jivika-orpin.vercel.app",
      repoUrl: "https://github.com/Anamika1608/Jivika",
      category: "mobile"
    }
  ];
  
  // DOM Elements
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectsGrid = document.querySelector('.projects-grid');
  
  // Theme Toggle Functionality
  function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Initialize theme based on localStorage or default to light
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme === 'dark' ? 'dark-theme' : 'light-theme');
    if (savedTheme === 'dark') {
      document.body.classList.remove('light-theme');
    }
  }
  
  // Mobile Menu Toggle
  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  }
  
  // Close mobile menu when a link is clicked
  function closeMobileMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  }
  
  // Generate Project Cards
  function generateProjectCards(projects = projectData) {
    projectsGrid.innerHTML = '';
  
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card fade-in';
      projectCard.dataset.category = project.category;
  
      projectCard.innerHTML = `
        <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="tech-stack">
            ${project.techStack.map(tech => `<span class="tech">${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.liveUrl}" class="project-link" target="_blank">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="${project.repoUrl}" class="project-link" target="_blank">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      `;
  
      projectsGrid.appendChild(projectCard);
    });
  }
  
  // Filter Projects
  function filterProjects(category) {
    if (category === 'all') {
      generateProjectCards();
      return;
    }
  
    const filteredProjects = projectData.filter(project => project.category === category);
    generateProjectCards(filteredProjects);
  }
  
  // Add animations to elements when they come into view
  function addScrollAnimations() {
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  }
  
  // Smooth scrolling for navigation links
  function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
  
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          closeMobileMenu();
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }
  
  // Typing animation for hero subtitle
  function setupTypingAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;
    subtitle.textContent = '';
  
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        subtitle.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
  
    setTimeout(typeWriter, 1000);
  }
  
  // Initialize the application
  function init() {
    // Init theme
    initTheme();
  
    // Event listeners
    themeToggleBtn.addEventListener('click', toggleTheme);
    hamburger.addEventListener('click', toggleMobileMenu);
  
    // Mobile menu close on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  
    // Project filtering
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProjects(btn.dataset.filter);
      });
    });
  
    // Generate initial project cards
    generateProjectCards();
  
    // Set up smooth scrolling
    setupSmoothScrolling();
  
    // Add scroll animations
    addScrollAnimations();
  
    // Setup typing animation
    setupTypingAnimation();
  
    // Add active class to nav link based on scroll position
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
  
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', init);
  