let interval;

let slides;
let banner;
let left;
let right;
let SLIDES_COUNT;

let current_slide = 0;

$(document).ready(() => {

    slides = document.querySelectorAll(".slide");
    banner = document.getElementById("banner");
    left = document.getElementById("left");
    right = document.getElementById("right");

    SLIDES_COUNT = slides.length;

    criarEventos();

});

function criarEventos() {

    left.addEventListener("click", () => {

        moverSlideEsquerda();
    
    });
    
    right.addEventListener("click", () => {
    
        moverSlideDireita();
    
    });

    // INTERVAL PARA MOVER OS BANNERS
    if (interval) clearInterval(interval);
    interval = setInterval(() => {

        moverSlideDireita();

    }, 4000)

}

function moverSlideEsquerda() {

    current_slide--;

    if (current_slide < 0) {
        current_slide = SLIDES_COUNT - 1;
    }

    updateBanner();

}

function moverSlideDireita() {

    current_slide++;

    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }

    updateBanner();

}

function updateBanner() {

    banner.style.transform = `translateX(${-current_slide * slides[0].offsetWidth}px)`;

}