const texts = ["یک طراح وب", "برنامه نویس حرفه‌ای"];
const typingSpeed = 150;
const deletingSpeed = 100; 
const delayBetweenTexts = 1000; 
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = texts[textIndex];
  const typingTextElement = document.getElementById("typingText");

  if (isDeleting) {
  
    typingTextElement.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; 
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(typeText, deletingSpeed);
    }
  } else {
    
    typingTextElement.innerHTML = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeText, delayBetweenTexts); 
    } else {
      setTimeout(typeText, typingSpeed);
    }
  }
}

window.onload = typeText;   


// swiper 
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//   tooltip



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});