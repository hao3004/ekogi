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


/*********************************/




$(window).load(function() {
    $('body').removeClass('preloading');
    $('#preload').delay(1000).fadeOut('slow');
});


