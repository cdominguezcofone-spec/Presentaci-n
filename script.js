let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove('active');
        currentSlide++;
        slides[currentSlide].classList.add('active');
    } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide--;
        slides[currentSlide].classList.add('active');
    }
});
