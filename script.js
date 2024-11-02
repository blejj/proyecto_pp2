let currentIndex = 0;

function showNextSlide() {
  const slides = document.querySelector('.slides');
  currentIndex = (currentIndex + 1) % slides.children.length;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cambia de imagen cada 3 segundos
setInterval(showNextSlide, 3000);