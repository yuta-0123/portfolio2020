$(function () {
    $('.menu').on('click', function () {
        event.preventDefault();
        $('#sp-nav').toggleClass('active');
        $('.menu').toggleClass('open_active');
    })
    $('#sp-nav a').on('click', function () {
        $('#sp-nav').removeClass('active');
        $('.menu').removeClass('open_active');
    })
})


