// number of slides viewable at a given time
var slidesPerWindow = 3;

/*
* This function will dynamically calculate and set the proper
* widths of the slider and the slides at load time.
*/
var setWidths = function(el, numSlides) {
  var numWindows           = numSlides/slidesPerWindow;
  var newSliderWidthLarge  = (100 * numWindows) + "%";
  var newSliderWidthSmall  = (100 * numSlides)  + "%";
  var newSlideWidth        = (100 / numSlides)  + "%";

  if ($(window).width() < 400 ) {
    $(".slider").css("width", newSliderWidthSmall);
    el.find(".slide").each(function() {
      $(this).css("width", newSlideWidth);
    });
  } else {
    el.css("width", newSliderWidthLarge);
    el.find(".slide").each(function() {
      $(this).css("width", newSlideWidth);
    });
  }
};


/*
* This function will display the carousel navigation buttons
* on sliders that have too many slides to fit in one window
*/
var displayNavButtons = function(el, numSlides) {
  var closestNav = el.next(".back-forward-nav");
  if (numSlides > slidesPerWindow) {
    closestNav.css("display", "inherit");
  }
};


/*
* Slides the slider to the left or right by the specified amount
* via animation of the 'left property'
*/
var slide = function(el, distance) {
  el.animate({
    left: "+=" +distance
  });
};


/*
* Attaches a click listener/handler to each carousel nav button,
* and slides the carousel to the left, by a multiple of a slide's width
*/
var bindListeners = function() {
  $('.carousel-nav .nav-button').click(function(event) {
    event.preventDefault(); // keeps the URL from changing

    var activeSlider = $(this).closest(".slider-container").children(),
        buttonNumber = $(this).attr("href").split('-').pop(),
        slideWidth   = $(".slide").width(),
        slideAmount  = buttonNumber * slideWidth * -1;

    activeSlider.animate({
      left: slideAmount
    });

  });

  $(".previous").click(function() {
    var activeSlider = $(this).closest(".slider-container").children(),
        slideAmount  = activeSlider.find(".slide").width();

    slide(activeSlider, slideAmount);
  });

  $(".next").click(function() {
    var activeSlider = $(this).closest(".slider-container").children(),
        slideAmount  = activeSlider.find(".slide").width() * -1;

    slide(activeSlider, slideAmount);
  });
};


$(document).ready(function() {

  // dispatches functions to style/add behavior to each slide on the fly
  $(".slider").each(function() {
    var $this     = $(this),
        numSlides = $this.children().length;

    setWidths($this, numSlides);
    displayNavButtons($this, numSlides);
  });

  bindListeners();

  // listens for a resize event and adjusts the elements' widths accordingly
  $(window).resize(function() {
    var sliderLeftPosn = $(".slider").position().left;
    if (sliderLeftPosn != 0) {
      $(".slider").css("left", "0px");
    }
  });

});