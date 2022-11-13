
/* menu hamburguer */
function hamburgue () {
    const $btnMenu = document.querySelector('.button-menu'),
    $conteinerMenu = document.querySelector('.nav_conteinerMenu'),
    $linkMenu = document.getElementsByClassName('link_item');
    console.log($linkMenu)

    $btnMenu.addEventListener("click", () => {
        $conteinerMenu.classList.toggle("visible");
    });


    for (let i = 0; i < $linkMenu.length; i++) {
        $linkMenu[i].addEventListener("click", () => {
            $conteinerMenu.classList.toggle("visible");
        });
    }
}


window.addEventListener('load', () => {
    hamburgue()
})