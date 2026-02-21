// Mobile Menu Toggle
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Scroll Reveal Animations
ScrollReveal().reveal('.hero-content', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  duration: 1000
});

ScrollReveal().reveal('.card', {
  interval: 200,
  distance: '40px',
  origin: 'bottom',
  duration: 800
});

ScrollReveal().reveal('.section h2', {
  delay: 200,
  distance: '30px',
  origin: 'left',
  duration: 800
});