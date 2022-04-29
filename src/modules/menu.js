const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu1 = document.querySelector('menu');

    const handleMenu = () => {
        menu1.classList.toggle('active-menu');
    }


    const toggleMenu = () => {
        menu1.addEventListener('click', (e) => {
            
            if (e.target.classList.contains('close-btn') || e.target.closest('a')) {
                
                handleMenu();
            }
        });
        menuBtn.addEventListener('click', handleMenu);
    }

    toggleMenu();
}

//module.exports = menu;
export default menu;