// AR Heritage Platform - Global JavaScript

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initCardInteractions();
  initNavigation();
  initSearch();
  initARInteractions();
  initCommunityFeatures();
  initMobileMenu();
  initLazyLoading();
  initSmoothScroll();
});

// Theme initialization
function initTheme() {
  const body = document.body;
  const currentPage = window.location.pathname.split('/').pop();
  
  // Remove all theme classes
  body.classList.remove('home', 'heritage', 'ar', 'community', 'ai-assistant');
  
  // Add appropriate theme class based on current page
  if (currentPage === 'index.html' || currentPage === '' || currentPage.includes('index')) {
    body.classList.add('home');
  } else if (currentPage.includes('heritage')) {
    body.classList.add('heritage');
  } else if (currentPage.includes('ar-experiences')) {
    body.classList.add('ar');
  } else if (currentPage.includes('community')) {
    body.classList.add('community');
  } else if (currentPage.includes('ai-assistant')) {
    body.classList.add('ai-assistant');
  }
}

// Card interaction animations (Simple hover effects)
function initCardInteractions() {
  const cards = document.querySelectorAll('.card, .feature-card, .heritage-card, .ar-card, .community-card, .stat-card, .showcase-item');
  cards.forEach(card => {
    // Only apply for non-touch devices for better performance
    if (!('ontouchstart' in window)) {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    }
  });
}

// Navigation management (Ensure active class is set)
function initNavigation() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    // Check if the link href matches the current page file name
    if (linkHref === currentPage || 
        // Also handle case where index.html might be accessed as just '/'
        (currentPage === '' && linkHref === 'index.html') ||
        (currentPage.includes('index') && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Basic search functionality (Placeholder/Simulation)
function initSearch() {
  const searchBar = document.querySelector('.search-bar button');
  if (searchBar) {
    searchBar.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const query = input.value.trim();
      if (query) {
        // In a real application, this would redirect or filter content
        console.log(`Searching for: ${query}`);
        alert(`Search initiated for: ${query}. (In a real app, results would appear here)`);
        input.value = '';
      }
    });
  }
}

// AR Experiences button logic (Placeholder/Simulation)
function initARInteractions() {
  const arButtons = document.querySelectorAll('.ar-card .btn-primary, .heritage-card .btn-primary');
  arButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cardTitle = this.closest('.ar-card, .heritage-card').querySelector('.card-title').textContent;
      // In a real application, this would launch the AR viewer
      console.log(`Launching AR Experience for: ${cardTitle}`);
      alert(`Launching AR Experience for: ${cardTitle}. (Requires a WebXR/AR compatible environment)`);
    });
  });
}

// Community Features interaction (Placeholder/Simulation)
function initCommunityFeatures() {
  // Story reading functionality
  const storyButtons = document.querySelectorAll('.community-card .btn-primary');
  storyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const cardTitle = this.closest('.community-card').querySelector('.card-title').textContent;
      if (cardTitle.includes('Stories')) {
        alert('Navigating to Local Stories feed...');
      } else if (cardTitle.includes('Projects')) {
        alert('Navigating to Collaboration Projects...');
      } else if (cardTitle.includes('Events')) {
        // Event buttons are typically handled separately or click is used for 'view'
        alert('Showing Upcoming Events list...');
      }
    });
  });

  // Individual event joining functionality
  const eventButtons = document.querySelectorAll('.event-card .btn-primary');
  eventButtons.forEach(button => {
    button.addEventListener('click', function() {
      const eventTitle = this.closest('.event-card').querySelector('.event-title').textContent;
      joinEvent(eventTitle);
    });
  });
}

function joinEvent(eventTitle) {
  // In a real app, this would register the user for the event
  console.log(`Joining event: ${eventTitle}`);
  alert(`You are attempting to join the event: ${eventTitle}. (A registration form would appear here)`);
}

// Responsive menu for mobile
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  // This project uses a CSS-only approach for responsiveness, 
  // but if a button to toggle the sidebar was added, this logic would apply:
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('mobile-open');
    });
  }
}

// Image lazy loading (for performance)
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Check for data-src before assigning to src
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc) {
            img.src = dataSrc;
        }
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// AI Assistant specific logic (Auto-expand textarea)
function autoExpand(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = (textarea.scrollHeight) + 'px';
}

// AI Assistant specific logic (Simulated message sending - full logic is in ai-assistant.html for simplicity)
/*
function sendMessage() {
    // ... logic is duplicated in the HTML for self-contained functionality ...
}

function handleQuickAction(action) {
    // ... logic is duplicated in the HTML for self-contained functionality ...
}
*/