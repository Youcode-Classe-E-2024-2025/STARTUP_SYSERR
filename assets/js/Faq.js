let answers = document.querySelectorAll(".accordion");
answers.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
            accordion.style.animation = "none"; 
            setTimeout(() => {
                accordion.style.animation = "accordslideback 0.2s ease forwards";
            }, 10);
        } else {
            answers.forEach((item) => {
                item.classList.remove("active");
                item.style.animation = "none";
            });
            accordion.classList.add("active");
            setTimeout(() => {
                accordion.style.animation = "accordslide 0.2s ease forwards";
            }, 10);
        }
    });
});
