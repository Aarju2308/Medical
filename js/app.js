$(document).ready(function (){
    $('.profile-slider').slick({
        slidesToShow:3,
        slidesToScrool:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        autoplay:true,
        autoplaySpeed:2000,

        responsive:[
            {
                breakpoint:1200,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                }
            },    
        ]
    });

    $('.nav-trigger').click(function(){
        $('.site-content-wrapper').toggleClass('scaled')
        $('.nav-background').toggleClass('show')
    });
});