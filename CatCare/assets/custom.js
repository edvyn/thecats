
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
