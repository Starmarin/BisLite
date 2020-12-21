$(document).ready(function () {
    $(".dropdown").click(function () {
        $(this).toggleClass("focus");
        $(".dropdown__menu", this).toggleClass("open");

    });

    $('.slider-box').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });
});
