
/* variables */
const $navMenu = document.querySelector('.nav-menu'),
$btnHamburguer = document.querySelector('.btn-hamburguer'),
$linkMenu = document.getElementsByClassName('link-item');

/* funciones */
function hamburguer () {
    $btnHamburguer.addEventListener('click', () => {
        $navMenu.classList.toggle('colapse')
    });

    for (let i = 0; i < $linkMenu.length; i++) {
        $linkMenu[i].addEventListener('click', () => {
            $navMenu.classList.toggle('colapse')
        });
    };
};

/* llamados */
hamburguer();
