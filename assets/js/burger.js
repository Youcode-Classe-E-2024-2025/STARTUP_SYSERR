function openMenu() {
    const sideBar = document.querySelector(".nav-burger");
    sideBar.style.display = "flex";
    sideBar.style.animation = "slideRight 0.5s forwards ease";
}

function closeMenu() {
    const sideBar = document.querySelector(".nav-burger");
    sideBar.style.animation = "slideBack 0.5s forwards ease";

    sideBar.addEventListener("animationend", () => {
        sideBar.style.display = "none";
    }, { once: true });
}