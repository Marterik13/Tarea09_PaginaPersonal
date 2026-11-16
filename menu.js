document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuNav = document.getElementById('menu-nav');

    if (!btnMenu || !menuNav) return;

    const icono = btnMenu.querySelector('i');
    const enlaces = menuNav.querySelectorAll('a');

    // Abre y cierra el menú al tocar el botón sándwich
    btnMenu.addEventListener('click', () => {
        menuNav.classList.toggle('activo');

        if (icono) {
            if (menuNav.classList.contains('activo')) {
                icono.classList.remove('fa-bars');
                icono.classList.add('fa-times');
            } else {
                icono.classList.remove('fa-times');
                icono.classList.add('fa-bars');
            }
        }
    });

    // Cierra el menú automáticamente al seleccionar una opción
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', () => {
            menuNav.classList.remove('activo');
            if (icono) {
                icono.classList.remove('fa-times');
                icono.classList.add('fa-bars');
            }
        });
    });
});