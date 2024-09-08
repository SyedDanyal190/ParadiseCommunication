document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const sliderContainer = document.querySelector('.slider-container');
    const scrollAmount = 300; // Adjust this value as needed
  
    nextBtn.addEventListener('click', function () {
      sliderContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  
    prevBtn.addEventListener('click', function () {
      sliderContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  });
  