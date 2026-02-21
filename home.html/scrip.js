const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// -----------------------------
// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// -----------------------------
// ScrollReveal Animations
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

// -----------------------------
// Highlight Active Section in Navbar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${current}`) {
      a.classList.add('active');
    }
  });
});

// -----------------------------
// Optional: Contact Form Submission Feedback
// -----------------------------
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    contactForm.reset();
  });
}