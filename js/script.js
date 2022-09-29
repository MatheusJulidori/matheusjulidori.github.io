document.getElementById("download_cv").addEventListener("click", function downloadCV() {
    window.open("https://matheusjulidori.github.io/CV_MatheusJulidori.pdf", "_blank");
});

// Swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        1240: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        1600: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
