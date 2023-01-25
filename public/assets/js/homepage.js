$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: { items: 1, nav: true },
        600: { items: 2, nav: false, margin: 20 },
        1000: { items: 3, nav: true, loop: true, margin: 20 }
    }
})