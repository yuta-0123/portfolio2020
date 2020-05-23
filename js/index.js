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

$(function(){
    $(window).scroll(function (){
        $('.fadeIn').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
