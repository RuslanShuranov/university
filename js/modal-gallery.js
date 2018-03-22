$(document).ready(function () {
    $('.slider').slick({
        lazyLoad: 'ondemand',
        dots: true,
        infinite: true,
        adaptiveHeight: true
    });

    $('.audience-trigger').on('click', function () {
        var slider = $('.slider');
        slider.slick('slickFilter', '.audience-img');
        $('.modal-wrap').addClass('open');
        slider.focus();
    });
    $('.management-trigger').on('click', function () {
        var slider = $('.slider');
        slider.slick('slickFilter', '.management-img');
        $('.modal-wrap').addClass('open');
    });
    $('.university-trigger').on('click', function () {
        var slider = $('.slider');
        slider.slick('slickFilter', '.university-img');
        $('.modal-wrap').addClass('open');
    });
    $('.actions-trigger').on('click', function () {
        var slider = $('.slider');
        slider.slick('slickFilter', '.actions-img');
        $('.modal-wrap').addClass('open');
    });

    $(document).keydown(function (e) {
        if (e.which === 27) {
            $('.modal-wrap').removeClass('open');
            $('.slider').slick('slickUnfilter');
        }
    });

    $('.close-btn').on('click', function () {
        $('.modal-wrap').removeClass('open');
        $('.slider').slick('slickUnfilter');
    });
});