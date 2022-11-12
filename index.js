

function hamburgue () {
    const $btnMenu = document.querySelector('.button-menu'),
    $conteinerMenu = document.querySelector('.nav_conteinerMenu');

    $btnMenu.addEventListener("click", () => {
        $conteinerMenu.classList.toggle("visible");
    });
}


hamburgue();