
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled'); // Add the class when scrolling down
    } else {
      navbar.classList.remove('scrolled'); // Remove the class when at the top
    }
  });
