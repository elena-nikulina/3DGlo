const modal = () => {
    const modal1 = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal1.querySelector('.popup-close');
    const width = document.documentElement.clientWidth;

    let count = 0;
    console.log(closeBtn);

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal1.style.opacity = 0;
            modal1.style.display = 'block';
            
            const transperentModal = () => {
                count = count + 0.01;
                console.log(count);

                if (width < 768 + 'px') {
                    clearInterval(idAnimate);
                }
        
                if (count < 1) {
                    modal1.style.opacity = count;
                } else {
                    clearInterval(idAnimate);
                }
                
        
            }
        
            idAnimate = setInterval(transperentModal, 10);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal1.style.display = 'none';
    });

    
}

module.exports = modal;