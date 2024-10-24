var nowUrl = window.location.pathname.split('/').pop();

var navLink = document.querySelectorAll('.nav-links a, .burger-links a');

for (var i = 0; i < navLink.length; i++) {
    var link = navLink[i];

    if (link.getAttribute('href').split('/').pop() === nowUrl) {
        link.classList.add('active');
    }
}