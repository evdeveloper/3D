$(document).ready(function () {
    svg4everybody({});

    var slider1 = '#gallery';
        $(slider1).slick({
        slidesToScroll: 2,
        slidesToShow: 2,
        arrows: true,
        prevArrow: '.gallery__arrow-prev',
        nextArrow: '.gallery__arrow-next',
        dots: false,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToScroll: 1,
                slidesToShow: 1
            }
        }
        ]
    });


});