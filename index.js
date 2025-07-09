const reveals = document.querySelectorAll('.reveal');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const visibilityThreshold = 100;

    if (elementTop < windowHeight - visibilityThreshold) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
