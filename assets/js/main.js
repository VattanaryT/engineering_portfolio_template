// Smooth‑scroll for in‑page navigation
[...document.querySelectorAll('nav a')].forEach(link => {
  link.addEventListener('click', e => {
    const target = link.getAttribute('href');
    if (target.startsWith('#')) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }
  });
});