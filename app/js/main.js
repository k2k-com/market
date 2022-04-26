$(function () {

    $('.product-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        focusOnSelect: true,
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
    });

    $('.icon-windows').on('click', function(){
     $('.products__item').addClass('list');
     $('.icon-windows').addClass('active');
     $('.icon-list').removeClass('active')
    });

    $('.icon-list').on('click', function(){
        $('.products__item').removeClass('list');
        $('.icon-list').addClass('active');
        $('.icon-windows').removeClass('active');
        
    });


    var mixer = mixitup('.products__inner-box');

});


