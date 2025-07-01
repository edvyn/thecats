
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


const carousel = document.getElementById("carouselTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const itemWidth = 700; // 350px + margem de 2x5px

prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -itemWidth, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
});