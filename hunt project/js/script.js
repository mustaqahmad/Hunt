$(function () {

  $('#banner').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    fade: true,
    // vertical:true,
    prevArrow: '<i class="fa fa-angle-left icon left"></i>',
    nextArrow: '<i class="fa fa-angle-right icon right"></i>',
  });
  // venobox
  $('.venobox').venobox();
})


// service slider
$('.service-main-slider').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  autoplay:  false,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "0",
  vertical: true,
  verticalSwiping: true,
  prevArrow: '<i class="fa fa-angle-up icon up"></i>',
  nextArrow: '<i class="fa fa-angle-down icon down"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        vertical: false,
        verticalSwiping: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        vertical: false,
        verticalSwiping: false,
      }
    }
    
    
  ]
});
// counter
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// sponsor start
$('.sponsor-main').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  autoplay: true,
  slidesToScroll: 5,
  arrows: false,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
                                     // vvi
        // centerPadding: '80px',
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
                                     // vvi
        // centerPadding: '80px',
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      }
    }
    
  ]
});
// sponsor end


// feed start
$('.feed-person-main').slick({
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  autoplay:  false,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "0",
  vertical: true,
  verticalSwiping: true,
  prevArrow: '<i class="fa fa-angle-up icon up"></i>',
  nextArrow: '<i class="fa fa-angle-down icon down"></i>',
  asNavFor:'.feed-details-main'
  
});


$('.feed-details-main').slick({
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:false,
  asNavFor:'.feed-person-main'
 
});
// feed end








