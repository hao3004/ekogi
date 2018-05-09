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
    /* Khi click vào seemore hay see_less thì nó sẽ kéo fields đấy về top như khi dùng menu điều hướng */
    $('html').animate({
        scrollTop: $('.frontend-field').offset().top }, 600);
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
    $('html').animate( {
        scrollTop: $('.UIUX-field').offset().top },600);
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
    $('html').animate( {
        scrollTop: $('.skills-field').offset().top },600);
  });
});

/**************************** CHUYỂN ĐỘNG BODY THEO ĐIỀU HƯỚNG MENU */

$(function(){
    $('.ekogi-dev-nav-right ul li:nth-child(1) a').on('click', function(event) {
      event.preventDefault();
      console.log( $('.frontend-field').offset().top );
      $('html').animate( {
        scrollTop: $('.frontend-field').offset().top }, 700, 'easeInQuad');
    });

    $('.ekogi-dev-nav-right ul li:nth-child(2) a,.ekogi-dev-nav-right ul li:nth-child(3) a').on('click', function(event) {
      event.preventDefault();
      console.log( $('.UIUX-field').offset().top );
      $('html').animate( {
        scrollTop: $('.UIUX-field').offset().top },1000, 'easeInQuad');
    });

    $('.ekogi-dev-nav-right ul li:nth-child(4) a').on('click', function(event) {
      event.preventDefault();
      console.log( $('.skills-field').offset().top );
      $('html').animate( {
        scrollTop: $('.skills-field').offset().top },1000, 'easeInQuad');
    });

    $('.ekogi-dev-nav-right ul li:nth-child(5) a').on('click', function(event) {
      event.preventDefault();
      console.log( $('.other-fields').offset().top );
      $('html').animate( {
        scrollTop: $('.other-fields').offset().top },1500, 'easeInQuad');
    });
});
