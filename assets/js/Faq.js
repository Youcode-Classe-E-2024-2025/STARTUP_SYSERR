
let answers = document.querySelectorAll(".accordion");
answers.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
        } else {
            // Close all other accordions
            answers.forEach((item) => item.classList.remove("active"));
            accordion.classList.add("active");
        }
    });
});
