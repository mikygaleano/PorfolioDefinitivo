
const d = document,
btnHamburg = d.querySelector('.btn-hamburg'),
panelMenuMobile = d.querySelector('.menu-mobile');


function menuHamburg () {
    btnHamburg.addEventListener('click', () => {
        if (panelMenuMobile.classList.contains('add-colapse')) {
            panelMenuMobile.classList.remove('add-colapse');
        } else {
            panelMenuMobile.classList.add('add-colapse');
        }
    });
}


d.addEventListener('DOMContentLoaded', () => {
    menuHamburg();
})