$(document).ready(function(){
    $('.seoshine__sclick--slider').slick({
    slidesToShow: 3,
    dots:false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: false,
    nextArrow: false,
    centerPadding: 30,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 1,
            centerPadding: 20,
            }} 
        ]
    });
  });
  


