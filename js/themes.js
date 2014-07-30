


$(document).ready(function() {
  $('.carousel-nav li a').click(function(event) {
    var buttonNumber = $(this).attr("href").split('-').pop(),
        slideWidth   = $(".slide").width(),
        slideAmount  = buttonNumber * slideWidth;

    $(".slider").animate({
      left: "-=" + slideAmount
    });
  });
});