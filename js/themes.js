$(document).ready(function() {

  var numSlides = $(".slider").children().length;
  var slidesPerWindow = 3;

  /*
  * This function will dynamically calculate and set the proper
  * widths of the slider and the slides at load time.
  */
  var setWidths = function() {
    var numWindows      = numSlides/slidesPerWindow;
    var newSliderWidth  = (100 * numWindows) + "%";
    var newSlideWidth   = (100 / numSlides)  + "%";

    if ($(window).width() > 400 ) {
      alert($(window).width());
      $(".slider").css("width", newSliderWidth);
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
  setWidths();

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