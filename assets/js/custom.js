$(document).ready(function(){
    // THIS IS THE SLICKNAV SECTION START HERE
    $('nav').slicknav({
        prependTo:'.nav_two',
        label: '',
        duration: 1000,
        easingOpen: "easeOutBounce",
    });
    // THE SLICKNAV SECTION ENDS HERE
    // THIS IS THE SLIDER SECTION START HERE
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        loop: true,
        autoplayHoverPause: true,
        smartSpeed: 3000,
        nav: true,
    });
    // THE SLIDER SECTION ENDS HERE
    // THIS IS THE SMOOTHSCROLL START HERE
    $('html').smoothScroll(1000);
    // THE SMOOTHSCROLL ENDS HERE
    // THIS IS THE MATERIAL SCROLLTOP START HERE
    $('body').materialScrollTop({
        duration: 1000,
    });
    // THE MATERIAL SCROLLTOP ENDS HERE
    // THIS IS THE SCROLLSPY SECTION START HERE
    $('body').scrollspy({
        target: '#navbar-example'
    })
    // THE SCROLLSPY SECTION ENDS HERE
});