const imageContainer = document.querySelector('.bio-image');
const images = imageContainer.querySelectorAll('img');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remove 'active' from current image
      images[0].classList.remove('active'); 
      // Add 'active' to the next image
      images[1].classList.add('active');
    } 
  });
}, { threshold: 0.5 }); // Trigger when 50% of the container is visible

observer.observe(imageContainer);
console.log('Image scroller initialized');