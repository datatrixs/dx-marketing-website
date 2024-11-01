// JavaScript to add the staggered fade-in effect
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.industries .fade-in');
    links.forEach((link, index) => {
        setTimeout(() => {
            link.classList.add('show');
        }, index * 500); // Adjust the delay (500ms) as needed
    });
  });
  