'use strict';

$(document).ready(function () {
    // jquery scroll up
    $.scrollUp();

    // header script
    if ($(window).width() < 1200) {
        $('.check-tool.s1').insertAfter('.menu-mobile');
        $('.check-tool.s2').insertAfter('.check-tool.s1');

        $('.check-tool').on('click', function () {
            $('.menu').removeClass('open');
            $('.overlay').fadeOut(500);
            $('html').css('overflow', 'auto');
        });
    }
    // HEADER CART SCRIPT
    $('.cart-panel .cart-list').click(function (e) {
        e.stopPropagation();
    });
    $('.btn-closedropdown').on('click', function () {
        $('.dropdown').dropdown('dispose');
    });

    // header scroll event
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    // MENU SCRIPT
    $('.btn-showmenu').on("click", function () {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
        $('html').css('overflow', 'hidden');
    });
    $('.overlay').on("click", function () {
        $('.menu').removeClass('open');
        $(this).fadeOut(500);
        $('html').css('overflow', 'auto');
    });

    // SEARCH SCRIPT
    if ($(window).width() > 1199) {
        $('.searchbox').on("click", function () {
            // event.stopPropagation();
            $(this).addClass('active');
            $('.search-result').fadeIn(500);
            $('.overlay').fadeIn(500);
        });
        $('.overlay').on("click", function () {
            // event.stopPropagation();
            $('.searchbox').removeClass('active');
            $('.searchbox input').val(null);
            $('.search-result').fadeOut(500);
            $(this).fadeOut(500);
        });
    } else {
        $('.search-toggle').on("click", function () {
            $('.search-wrap').fadeToggle(0);
        });
        $('.btn-closesearch').on("click", function () {
            $('.search-wrap').fadeOut(0);
        });
    }

    // breadcrumb script
    // $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

    // HOME PAGE SCRIPT
    if ($(window).width() < 992) {
        $('.home-video').insertBefore('.home-news');
    }

    // banner
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        arrows: true,
        dots: true,
        fade: true
    });
    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        asNavFor: '.banner-nav',
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.banner-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.banner-slide',
        speed: 500,
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });

    // HOME CATEGORY SLICK
    $('.category-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: true,
        dots: true,
        speed: 500,
        asNavFor: '.category-slick'
    });

    $('.category-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        asNavFor: '.category-nav',
        arrows: false,
        dots: false,
        fade: true,
        speed: 800
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Responsive tabs
    $('#responsivetabs').responsiveTabs({
        startCollapsed: 'accordion',
        animation: 'slide'
    });

    // Jquery rating
    $('.bar-rating').barrating({
        theme: 'fontawesome-stars'
    });

    // faq script
    $('.faq .faq-title').click(function () {
        if ($(this).parent().hasClass('active') == true) {
            $(this).parent().removeClass('active');
            $(this).parent().find('.faq-content').slideUp(500);
        } else {
            $('.faq').removeClass('active');
            $('.faq').find('.faq-content').slideUp(500);
            $(this).parent().addClass('active');
            $(this).parent().find('.faq-content').slideDown(500);
        }
    });
});