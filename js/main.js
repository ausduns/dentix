// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.style.boxShadow = window.scrollY > 50 
        ? '0 4px 30px rgba(0,0,0,0.1)' 
        : '0 2px 20px rgba(0,0,0,0.06)';
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      item.classList.toggle('active');
    });
  });

  // Accordion
  document.querySelectorAll('.accordion-header').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      document.querySelectorAll('.accordion-item').forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });

  // Mobile nav
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.getElementById('navLinks');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Image Comparison Sliders
  const sliders = document.querySelectorAll('.slider-range');
  sliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
      const container = e.target.closest('.slider-container');
      container.style.setProperty('--slider-pos', `${e.target.value}%`);
    });
  });
});
