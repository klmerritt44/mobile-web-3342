$( document ).ready(function() {
    $('.menu-toggle').click(function() {
        $('.site-nav').toggleClass('site-nav--open', 500);
        $(this).toggleClass('open');
      })
  
  });

  $('#image-slider').slick({
    dots: true,
    infinite: true,
    speed: 900,
    fade: true,
    slide: 'div',
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
  });