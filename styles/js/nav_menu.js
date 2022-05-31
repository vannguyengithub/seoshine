// var navMenu = $('#header__menu');
// console.log(navMenu);

// $(document).on('click', '.nav__menu',
//     function(e) {
//         navMenu.addClass('open');
//         $('body').addClass('no-scroll');
//     });
// $(document).on('click', 'body',
//     function(e) {
//         navMenu.removeClass('open');
//         $('body').removeClass('no-scroll');
//     });
// -----------

var elementAsideLeftBar = document.getElementById('header__menu');
var triggerAside = document.getElementById('nav__menu');
if (triggerAside) {
    triggerAside.addEventListener('click', () => {
        elementAsideLeftBar.classList.toggle('open');
    });
}


/* Demo purposes only */
$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);