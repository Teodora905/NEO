import './style.css';
import './styles/main.scss';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

document.addEventListener("DOMContentLoaded", function () {

  const slidesContainer = document.querySelector(".carousel-slides");
  const slides = document.querySelectorAll(".carousel-slide");
  const nextButton = document.querySelector(".next-button");
  const prevButton = document.querySelector(".prev-button");
  let activeSlide = 0;

  function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth;
    slidesContainer.style.transition = "transform 0.5s ease-in-out"; // Smooth animation
    slidesContainer.style.transform = `translateX(-${activeSlide * slideWidth}px)`;
  }

  nextButton.addEventListener("click", function () {
    activeSlide = (activeSlide + 1) % slides.length;
    updateSlidePosition();
  });

  prevButton.addEventListener("click", function () {
    activeSlide = (activeSlide - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });

  window.addEventListener("resize", updateSlidePosition); // Maintain responsive behavior

  let step = 0;
  const steps = document.querySelectorAll('.step');
  const nextButtons = document.querySelectorAll(".next-step");

  function nextStep(nextStepIndex) {
    if (nextStepIndex >= steps.length || nextStepIndex < 0) return;
    
    steps[step].style.display = "none";
    step = nextStepIndex;
    steps[step].style.display = "block";
  }

  nextButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => nextStep(index + 1));
  });

  nextStep(0); // Initialize step sequence

 
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = "scale(1.1)";
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = "scale(1)";
    });
  });

});
