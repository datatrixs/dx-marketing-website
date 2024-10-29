$(document).ready(function(){
    $('#slider1').slick({
        slidesToShow:5,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 1500, 
        arrows:false,
        cssEase: 'ease-in-out',
        variableWidth:true,
        initialSlide:1,
        pauseOnHover:false,
        respondTo:window,
        rtl:false,
      responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ], 
    });
});
