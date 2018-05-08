/******************************************************************* MENU SCROLL */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("ekogi-dev-navbar").style.top = "0";
  } else {
    document.getElementById("ekogi-dev-navbar").style.top = "-62px";
  }
  prevScrollpos = currentScrollPos;
}


/****************************************************************** BACK-TOP BTN*/
$(document).ready(function(){
  $(window).bind('scroll', function(){
          checkScrollPos();
  });
  checkScrollPos();

  $('#ekogi-back-top').bind('click',function(){
      $('html, body').animate({
          scrollTop:0
      }, $(window).scrollTop() / 3);
     return false;
  });
});

function checkScrollPos() {
    if ($(window).scrollTop() > 400) {
        $('#ekogi-back-top').fadeIn(1000);
    } else {
        $('#ekogi-back-top').fadeOut(1000);
    }
}


/******************************************** SCROLL SMOOTHLY ON OVERALL BODY */

$(function(){

  var $window = $(window);    //Window object

  var scrollTime = .7;      //Scroll time
  var scrollDistance = 170;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll

  $window.on("mousewheel DOMMouseScroll", function(event){

    event.preventDefault();

    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut, //For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
        autoKill: true,
        overwrite: 5
      });

  });

});

/**********************************************************seemore**/

$(document).ready(function() {
  $(".frontend-field__seemore-btn").click(function() {
    var elem = $(".frontend-field__seemore-btn").text();
    if (elem == "See More") {
      //Stuff to do when btn is in the see more state
      $(".frontend-field__seemore-btn").text("See Less");
      $(".frontend-field__seemore-content").slideDown();
    }
    else {
      //Stuff to do when btn is in the see less state
      $(".frontend-field__seemore-btn").text("See More");
      $(".frontend-field__seemore-content").slideUp();
    }
  });

  $(".UIUX-field__seemore-btn").click(function() {
    var elem = $(".UIUX-field__seemore-btn").text();
    if (elem == "See More") {
      //Stuff to do when btn is in the see more state
      $(".UIUX-field__seemore-btn").text("See Less");
      $(".UIUX-field__seemore-content").slideDown();
    }
    else {
      //Stuff to do when btn is in the see less state
      $(".UIUX-field__seemore-btn").text("See More");
      $(".UIUX-field__seemore-content").slideUp();
    }
  });

  $(".skills-field__seemore-btn").click(function() {
    var elem = $(".skills-field__seemore-btn").text();
    if (elem == "See More") {
      //Stuff to do when btn is in the see more state
      $(".skills-field__seemore-btn").text("See Less");
      $(".skills-field__seemore-content").slideDown();
    }
    else {
      //Stuff to do when btn is in the see less state
      $(".skills-field__seemore-btn").text("See More");
      $(".skills-field__seemore-content").slideUp();
    }
  });
});
