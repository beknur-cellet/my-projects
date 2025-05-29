$('document').ready(function(){
    $('#slider').slick({
        dots:false,
        prevArrow: '<i class="fa-solid fa-chevron-left" style="color: #ffffff;"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>',
        infinite:true,
        slidesToShow:3,
        slidesToScroll:2,    
    })
})