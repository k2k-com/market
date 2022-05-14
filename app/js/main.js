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
        from: 20,
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

   
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

  
    $('.header__btn-menu').on('click', function(){
        $('.header__box').toggleClass('active');
    });
   

    $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
            $('.product-one__tabs .tabs, .settings__tabs .tab').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });

    $('input[type="file"], select').styler();



    var mixer = mixitup('.products__inner-box');

});


