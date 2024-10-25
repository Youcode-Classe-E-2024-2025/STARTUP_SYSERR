const carouselImages = document.querySelector('.carousel-images');
let imageDivs = Array.from(document.querySelectorAll('.carousel-image'));
let currentIndex = 0;

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = imageDivs.length - 1;
    } else if (currentIndex >= imageDivs.length) {
        currentIndex = 0;
    }

    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => moveSlide(1), 2000);
