const carouselImages = document.querySelector(".carousel-images");
let imageDivs = Array.from(document.querySelectorAll(".carousel-image"));

function moveSlide(direction) {
  if (direction === 1) {
    const firstElement = imageDivs.shift();
    imageDivs.push(firstElement);
  } else if (direction === -1) {
    const lastElement = imageDivs.pop();
    imageDivs.unshift(lastElement);
  }
  carouselImages.innerHTML = "";
  imageDivs.forEach((div) => carouselImages.appendChild(div));
}

//setInterval(() => moveSlide(1), 2000);
