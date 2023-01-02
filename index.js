
/* variables */
const $navMenu = document.querySelector('.nav-menu'),
$btnHamburguer = document.querySelector('.btn-hamburguer'),
$linkMenu = document.getElementsByClassName('link-item');


/* funciones */

/* Menu hamburguesa */


function hamburguer (colapse) {
    $btnHamburguer.addEventListener('click', () => {
        $navMenu.classList.toggle(colapse)
    });
    $btnHamburguer.style.display = 'block';

    for (let i = 0; i < $linkMenu.length; i++) {
        $linkMenu[i].addEventListener('click', () => {
            $navMenu.classList.toggle(colapse)
        });
    };
};




/* llamados */


window.addEventListener('DOMContentLoaded', () => {
    hamburguer('colapse')
})


