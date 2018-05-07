
/*            *  *   *    ****                    */
/*            ****  ***   *  *                    */
/*            *  * *   *  ****     Hao_dev_ekogi  */


/*______________________________________________________________________________________
__________________________________________________________________EKOGI LOADING_________
________________________________________________________________________________________*/

$(window).load(function() {
    $('body').removeClass('preloading');
    $('#preload').delay(1000).fadeOut('slow');
});

/*______________________________________________________________________________________
________________________________________________EKOGI MENU TOGGLE AUTOMATICALLY_________
________________________________________________________________________________________*/

let ekogimenu = document.querySelector(".ekogi-menu");
let ekogibutton = document.querySelector(".ekogi-menu__button");

toggleMenu = () => {
  ekogimenu.classList.toggle("open");
}

ekogibutton.addEventListener("click", function() {
  clearInterval(interactionPreview);
  toggleMenu();
});

let interactionPreview = setInterval(() => {
  toggleMenu();
}, 2000)

/*______________________________________________________________________________________
_______________________________________EKOGI SLICK SLIDER - lib-type: automatic_________
________________________________________________________________________________________*/
$(document).ready(function(){
    $('.esogi-slider-autoplay').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false
    });
});
