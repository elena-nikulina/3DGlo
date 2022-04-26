const modal = () => {
    const modal1 = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal1.querySelector('.popup-close');
    const width = document.documentElement.clientWidth;

    let  idAnimate;
    let count = 0;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal1.style.opacity = 0;
            modal1.style.display = 'block';
            
            const transperentModal = () => {
                


                if (width > 768) {

                    myAnimate();
                
                } else {
                    modal1.style.display = 'block';
                    modal1.style.opacity = 1;
                }
                
        
            }
        
            idAnimate = setInterval(transperentModal, 10);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal1.style.display = 'none';
    });

    function myAnimate() {
        count = count + 0.01;
        if (count < 1) {
            modal1.style.opacity = count;
        } else {
            clearInterval(idAnimate);
        }
    }
}

module.exports = modal;