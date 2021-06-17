addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById('nav');
    const items = document.getElementById('items');
    const link = document.getElementById('link');
    const mostrar = document.getElementById("mostrar");
    const cerrar = document.getElementById('cerrar');
    if (nav) {
        nav.addEventListener("click", () => {
            items.classList.toggle("anima-items");
            mostrar.classList.toggle("d-none");
            cerrar.classList.toggle("d-none");

        });
    }
    if (link) {
        link.addEventListener("click", () => {
            items.classList.toggle("anima-items");
            mostrar.classList.toggle("d-none");
            cerrar.classList.toggle("d-none");
        });
    }
    window.onscroll = function() {
        const scroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (scroll > 1100) {
            mostrar.style.color = "#000";
        } else {
            mostrar.style.color = "#fff"
        }
    }
});