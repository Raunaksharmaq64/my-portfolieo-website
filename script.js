// Optional: Smooth scroll polyfill if needed (modern browsers support smooth scrolling by default)

// Add smooth scroll to nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form submit example (just prevent default and show alert)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  e.target.reset();
});
