
const d = document,
btnHamburg = d.querySelector('.btn-hamburg'),
panelMenuMobile = d.querySelector('.menu-mobile'),
itemMenu = d.getElementsByClassName('item-menu');


function menuHamburg () {
    btnHamburg.addEventListener('click', () => {
        if (panelMenuMobile.classList.contains('add-colapse')) {
            panelMenuMobile.classList.remove('add-colapse');
        } else {
            panelMenuMobile.classList.add('add-colapse');
        }
    });
}

function linkMenu () {
    for (element of itemMenu) {
        element.addEventListener('click', () => panelMenuMobile.classList.add('add-colapse'))
    }
}


d.addEventListener('DOMContentLoaded', () => {
    menuHamburg();
})

linkMenu();
