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

  // Accordion — single-open state machine
  const accordionItems = document.querySelectorAll('.sa-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.sa-trigger');
    const panel = item.querySelector('.sa-panel');
    const iconSvg = item.querySelector('.sa-icon-svg');

    trigger.addEventListener('click', () => {
      const isOpen = item.getAttribute('data-status') === 'open';

      // Close all other items
      accordionItems.forEach(other => {
        if (other !== item) {
          other.setAttribute('data-status', 'closed');
          other.querySelector('.sa-panel').style.maxHeight = '0';
          other.querySelector('.sa-panel').style.opacity = '0';
          const svg = other.querySelector('.sa-icon-svg');
          if (svg) svg.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current
      if (isOpen) {
        item.setAttribute('data-status', 'closed');
        panel.style.maxHeight = '0';
        panel.style.opacity = '0';
        iconSvg.style.transform = 'rotate(0deg)';
      } else {
        item.setAttribute('data-status', 'open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.style.opacity = '1';
        iconSvg.style.transform = 'rotate(45deg)';
      }
    });
  });

  // Recalculate open panel heights on resize
  window.addEventListener('resize', () => {
    accordionItems.forEach(item => {
      if (item.getAttribute('data-status') === 'open') {
        const panel = item.querySelector('.sa-panel');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
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
