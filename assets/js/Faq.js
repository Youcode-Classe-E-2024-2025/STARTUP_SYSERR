
let answers = document.querySelectorAll(".accordion");
answers.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
            accordion.style.animation = "accordslideback 0.2s ease forwards";
        } else {
            // Close all other accordions
            answers.forEach((item) => item.classList.remove("active"));
            accordion.classList.add("active");
            accordion.style.animation = "accordslide 0.2s ease forwards";
        }
    });
});
