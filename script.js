window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    const logo = document.getElementById('logo');
    logo.style.filter = 'invert(0)';

    const contact = document.querySelector('.contact');
    contact.classList.add('visible');
  }, 1000);
});