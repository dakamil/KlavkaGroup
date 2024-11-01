
let swiper = new Swiper(".aerated-slid", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 5,
    navigation: {
        nextEl: ".aerated-button-next",
        prevEl: ".aerated-button-prev",
    },
});


let prodSwiper = new Swiper(".product-slid", {
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '768': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '480': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".product-button-next",
        prevEl: ".product-button-prev",
    },
});

let quanSwiper = new Swiper(".quan-slid", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
        '1299': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '480': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".quan-button-next",
        prevEl: ".quan-button-prev",
    },
});


let bestSwiper = new Swiper(".bestsel-slid", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    simulateTouch: false,
    breakpoints: {
        '1600': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,
        },
        '1300': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '768': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '480': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            simulateTouch: true,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            simulateTouch: true,

        },
    },
    navigation: {
        nextEl: ".bestsel-button-next",
        prevEl: ".bestsel-button-prev",
    },
});



let swiperSphinx = new Swiper(".clinker-sm-slid", {
    slidesPerView: 5,
    breakpoints: {
        '1399': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '1099': {
            slidesPerView: 4,
            slidesPerGroup: 1,

        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,

        },
        '767': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 3,

        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },

        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },

    },
    navigation: {
        nextEl: ".clinker-button-next",
        prevEl: ".clinker-button-prev",
    },
});
let swiperSphinx2 = new Swiper(".clinker-slid", {
    slidesPerView: 1,
    thumbs: {
        swiper: swiperSphinx,
    },
    pagination: {
        el: ".clinker-sl-pag",
        clickable: true,
    },
    navigation: {
        nextEl: ".clinker-button-next",
        prevEl: ".clinker-button-prev",
    },
});




let comeSwiper = new Swiper(".come-handy-slid", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        '1600': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,
        },
        '1300': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '768': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '480': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            simulateTouch: true,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            simulateTouch: true,

        },
    },
    navigation: {
        nextEl: ".come-button-next",
        prevEl: ".come-button-prev",
    },
});



let similarSwiper = new Swiper(".similar-slid", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
        '1600': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,
        },
        '1300': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '768': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '570': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            simulateTouch: false,

        },
        '480': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            simulateTouch: true,

        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            simulateTouch: true,

        },
    },
    navigation: {
        nextEl: ".similar-button-next",
        prevEl: ".similar-button-prev",
    },
});



let completedSwiper = new Swiper(".completed-slid", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '768': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '480': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".completed-button-next",
        prevEl: ".completed-button-prev",
    },
});




let teddSwiper = new Swiper(".ted-object-slid", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,

    breakpoints: {
        '1399': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '1200': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '768': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '480': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".completed-button-next",
        prevEl: ".completed-button-prev",
    },
});





let swiperphoto = new Swiper(".photo-small-slid", {
    spaceBetween: 3,
    slidesPerView: 5,
    direction: "vertical",
    breakpoints: {
        '1190': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 3,
        },
        '1099': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 3,

        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 3,

        },
        '760': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 3,

        },
        '570': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            direction: "horizontal",
        },
        '380': {
            direction: "horizontal",

            slidesPerView: 3,
            slidesPerGroup: 1,
        },'320': {
            direction: "horizontal",

            slidesPerView: 2,
            slidesPerGroup: 1,
        },

    },
    navigation: {
        nextEl: ".clinker-button-next",
        prevEl: ".clinker-button-prev",
    },
});
let swiperphoto2 = new Swiper(".photo-big-slid", {
    slidesPerView: 1,
    thumbs: {
        swiper: swiperphoto,
    },
    navigation: {
        nextEl: ".photo-arrow-next",
        prevEl: ".photo-arrow-prev",
    },
});


let catSwiper = new Swiper(".cat-part__slid", {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        '1700': {
            slidesPerView: 6,
            slidesPerGroup: 1,
        },
        '1500': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '1420': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1200': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".cat-part-next",
        prevEl: ".cat-part-prev",
    },
});


let compSwiper = new Swiper(".comparison__slider", {
    slidesPerView: 3,
    breakpoints: {
        '1600': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '1320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 1,

        },
    },
    navigation: {
        nextEl: ".compar-button-next",
        prevEl: ".compar-button-prev",
    },
});


let compOverSwiper = new Swiper(".comp-over__slider", {
    slidesPerView: 4,
    breakpoints: {
        '1600': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '1320': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '600': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".compar-button-next",
        prevEl: ".compar-button-prev",
    },
});




let gallSwiper = new Swiper(".comp-gall__slid", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    }
});







let facingSwiper = new Swiper(".facing-cat__slid", {
    slidesPerView: 5,
    loop: true,
    breakpoints: {
        '1600': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '1399': {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".facing-button-next",
        prevEl: ".facing-button-prev",
    },
});


let categSwiper = new Swiper(".category-cart__slid", {
    pagination: {
        el: ".swiper-pagination",
    }
});


