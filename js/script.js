$( document ).ready(function() {
    
    var one = $("#testimonial_carousel");
    var two = $("#product_carousel");
    var three = $("#article_slider");
    var four = $("#product_cover_slider");

// testimonial_carousel_start
one.owlCarousel({
    loop:true,
    autoplay: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout:1000,
    autoplayHoverPause: false,
    stagePadding: 420,
    dots: false,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1,
            stagePadding: 0,
            padding:5
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
// testimonial_carousel_end

// product_carousel_start

two.owlCarousel({
    loop:true,
    autoplay: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout:1000,
    autoplayHoverPause: false,
    stagePadding: 280,
    dots: false,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1,
            stagePadding: 80
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});

// product_carousel_end

// article_carousel_start

three.owlCarousel({
    loop:true,
    autoplay: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout:1000,
    autoplayHoverPause: false,
    dots: false,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        }
    }
});

// article_carousel_end

// product_page_slider
four.owlCarousel({
    loop:true,
    autoplay: true,
    autoPlaySpeed: 2000,
    autoPlayTimeout:1000,
    autoplayHoverPause: false,
    dots: false,
    nav:true,
    responsive:{
        0:{
            dots:true,
            nav:false,
            items:1,
        },
        600:{
            dots:true,
            nav:false,
            items:1,
        },
        1000:{
            items:1
        }
    }
});
// product_page_slider







});
