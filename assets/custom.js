function setupCarousel(trackId, prevBtnId, nextBtnId, itemWidth = 740) {
  const carousel = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!carousel || !prevBtn || !nextBtn) return;

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
  });
}

// Inicializa os dois carrosséis
setupCarousel("carouselTrack", "prevBtn", "nextBtn");
setupCarousel("carouselTrack2", "prevBtn2", "nextBtn2");




const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('v');
    observer.unobserve(entry.target); // Só anima uma vez
    }
});
});

// Seleciona todas as classes de animação
document.querySelectorAll('.fr, .fl, .fd, .fu, .sl').forEach(el => {
observer.observe(el);
});


