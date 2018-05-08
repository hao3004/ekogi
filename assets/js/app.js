
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
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: true/*,
      responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]*/
    });
});
/*______________________________________________________________________________________
_____________________________________________________________________CONTENT-FIELD______
________________________________________________________________________________________*/
/* ĐOẠN NÀY CẦN OPTIMIZING Ở CHỖ LÀ CÙNG 1 KIỂU NHƯNG PHẢI GHI QUÁ NHIỀU DÒNG,
  THIẾT NGHĨ NÊN DÙNG JSON, this CHẲNG HẠN, I THINK SO.*/

$(document).ready(function(){

    // Display or Hide on moving the mouse to #curent-field and .site-name
    /*
    $("#curent-field").mouseover(function(){
        document.getElementById("curent-field").innerHTML = "Hi,<br/> we make it awesome!";
    });
    $("#curent-field").mouseout(function(){
        document.getElementById("curent-field").innerHTML = "";
    });
    */
    $("#site-name__dialoge").mouseover(function(){
        document.getElementById("curent-field").innerHTML = "Hi,<br/> Make it awesome";
    });
    $("#site-name__dialoge").mouseout(function(){
        document.getElementById("curent-field").innerHTML = "";
    });

    // Display or Hide on moving the mouse to .ekogi-info ( cv) 1
    $(".ekogi-info").mouseover(function(){
        document.getElementById("curent-field").innerHTML = "To get<br /> my personal infor. !";
    });
    $(".ekogi-info").mouseout(function(){
        document.getElementById("curent-field").innerHTML = "";
    });

    // Display or Hide on moving the mouse to .ekogi-dev 2
    $(".ekogi-dev").mouseover(function(){
        document.getElementById("curent-field").innerHTML = "Sharing Exp. <br /> on coding!";
    });
    $(".ekogi-dev").mouseout(function(){
        document.getElementById("curent-field").innerHTML = "";
    });

    // Display or Hide on moving the mouse to .ekogi-books 3
    $(".ekogi-books").mouseover(function(){
        document.getElementById("curent-field").innerHTML = "Read and <br />Review Together !";
    });
    $(".ekogi-books").mouseout(function(){
        document.getElementById("curent-field").innerHTML = "";
    });

    // Display or Hide on moving the mouse to .ekogi-photography 4
    $(".ekogi-photography").mouseover(function(){
        document.getElementById("curent-field").innerHTML = "Blend <br />and Retouch!";
    });
    $(".ekogi-photography").mouseout(function(){
        document.getElementById("curent-field").innerHTML = "";
    });

    // Display or Hide on moving the mouse to .ekogi-life 5
    $(".ekogi-life").mouseover(function(){
        document.getElementById("curent-field").innerHTML = "Tell me <br />more about you :))";
    });
    $(".ekogi-life").mouseout(function(){
        document.getElementById("curent-field").innerHTML = "";
    });

});

