const validate = () => {

    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    
    

    const forms = document.querySelectorAll('form');

    forms.forEach((form) => {
        
        const inputText = form.querySelector('input[type="text"]');
        const inputEmail = form.querySelector('input[type="email"]');
        const inputPhone = form.querySelector('input[type="tel"]');

        if (form.classList.contains('footer-form')) {
            const inputMessage = form.querySelector('#form2-message');
            inputMessage.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я+\-\s]+/g, "");
            });
        }

            inputText.addEventListener('input', (e) => {

                e.target.value = e.target.value.replace(/[^а-яА-Я+\-\s]+/g, "");
                
            });

            inputEmail.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z0-9+\_\@\-\!\*\~\'\.]+/g, "");
            });        

            inputPhone.addEventListener('input', (e) => {

                e.target.value = e.target.value.replace(/[^\d\-()]/g, "");
                
            });
        //}
        
    });

    calcSquare.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/[^\d+]/g, "");

    });
    calcCount.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/[^\d+]/g, "");

    });

    calcDay.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/[^\d+]/g, "");

    });

};

//module.exports = validate;
export default validate;
