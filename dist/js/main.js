'use strict';

$(document).ready(function () {
    // jquery scroll up
    $.scrollUp();

    // header script
    if ($(window).width() < 1200) {}

    $('.btn-showmenu').click(function () {
        $('.menu').toggleClass('open');
        $('.overlay').fadeToggle(500);
    });
    $('.overlay').click(function () {
        $('.menu').removeClass('open');
        $(this).fadeOut(500);
    });
    $('.btn-closemenu').click(function () {
        $('.menu').removeClass('open');
        $('.overlay').fadeOut(500);
    });
    $('.btn-showsub').click(function () {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(500);
    });

    $('.search-toggle').click(function () {
        $('.search-wrap').fadeToggle(500);
    });

    // header scroll event
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    // breadcrumb script
    // $(".pagename").append($('.breadcrumb li a').eq(1).find('span').html());

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
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.banner-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.banner-slide',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Responsive tabs
    $('#responsivetabs').responsiveTabs({
        startCollapsed: 'accordion',
        animation: 'slide'
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