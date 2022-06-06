var modalInfo = $('#modal__primary');

$(document).on('click', '.btn--header',
    function(e) {
        modalInfo.addClass(' active');
        $('body').addClass('no-scroll');
    });
$(document).on('click', '.modal__close',
    function(e) {
        modalInfo.removeClass('active');
        $('body').removeClass('no-scroll');
    });




// var elementAsideLeftBar = document.getElementById('header__menu');
// var triggerAside = document.getElementById('nav__menu');
// if (triggerAside) {
//     triggerAside.addEventListener('click', () => {
//         elementAsideLeftBar.classList.toggle('open');
//     });
// }
var openMenu = $('#header__menu');

$(document).on('click', '.nav__menu',
    function(e) {
        openMenu.addClass(' active');
        $('body').addClass('no-scroll');
    });
$(document).on('click', '.gg-close',
    function(e) {
        openMenu.removeClass('active');
        $('body').removeClass('no-scroll');
    });




/* Demo purposes only */
$(".hover").mouseleave(
    function() {
        $(this).removeClass("hover");
    }
);