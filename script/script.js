$(document).ready(function(){
    $('.rand').text(Math.round(Math.random() * (3200 - 2900) + 2900))
   let f = $('#cta').offset().top
   $(window).scroll(function(){
       if($(window).scrollTop() >= f){
           $('.Popup').fadeIn(300)
       }
       else if($(window).scrollTop() < f){
           $('.Popup').fadeOut(300)
       }
   })

$(".button").click(function (){
        $('html, body').animate({
            scrollTop: $(".button").offset().top
        }, 1000);
    });
})
