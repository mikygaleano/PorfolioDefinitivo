
/* variables */
const $navMenu = document.querySelector('.nav-menu'),
$btnHamburguer = document.querySelector('.btn-hamburguer'),
$linkMenu = document.getElementsByClassName('link-item');

/*const $spanMaquina = document.querySelector('.span-inicio');*/

/* funciones */
/* Menu hamburguesa */
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

/* efecto maquina de escribir */
function maquinaEscribir () {
    let frase = ['Michael','Developer'];
    frase.map(element => {
        $spanMaquina.outerHTML = element;
    })

}




/* llamados */
hamburguer();

maquinaEscribir();

