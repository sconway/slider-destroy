$(document).ready(function() {

  var numSlides = $(".slider").children().length;
  var slidesPerWindow = 3;

  /*
  * This function will dynamically calculate and set the proper
  * widths of the slider and the slides at load time.
  */
  var setWidths = function() {
    var numWindows           = numSlides/slidesPerWindow;
    var newSliderWidthLarge  = (100 * numWindows) + "%";
    var newSliderWidthSmall  = (100 * numSlides) + "%";
    var newSlideWidth   = (100 / numSlides)  + "%";

    if ($(window).width() > 400 ) {
      $(".slider").css("width", newSliderWidthLarge);
      $(".slide").css("width", newSlideWidth);
    } else {
      $(".slider").css("width", newSliderWidthSmall);
      $(".slide").css("width", newSlideWidth);
    }

  }


  /*
  * This function will display the carousel navigation buttons
  * when there are too many slides to fit in one window
  */
  var displayNavButtons = function() {
    if (numSlides > slidesPerWindow) {
      $(".carousel-nav").css("display", "inherit");
    }
    $(".carousel-nav").css("width", numSlides*58);
  };

  displayNavButtons();

  if (numSlides > 3){
    setWidths();
  }

  // slide the carousel, by a multiple of a slide's width, to the left
  $('.carousel-nav li a').click(function(event) {
    var buttonNumber = $(this).attr("href").split('-').pop(),
        slideWidth   = $(".slide").width(),
        slideAmount  = buttonNumber * slideWidth * -1;

    $(".slider").animate({
      left: slideAmount
    });
  });

});