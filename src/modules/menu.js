const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu1 = document.querySelector('menu');
    const closeBtn = menu1.querySelector('.close-btn');
    const menuItems = menu1.querySelectorAll('ul>li>a');

    const handleMenu = () => {
        menu1.classList.toggle('active-menu');
    }

    menuBtn.addEventListener('click', handleMenu);

    closeBtn.addEventListener('click', handleMenu);

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', handleMenu);
    });
}

module.exports = menu;