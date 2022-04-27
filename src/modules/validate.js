const validate = () => {

    let calcSquare = document.querySelector('.calc-square');
    let calcCount = document.querySelector('.calc-count');
    let calcDay = document.querySelector('.calc-day');
    
    

    let forms = document.querySelectorAll('form');

    let form2Message = document.querySelector('#form2-message');

    form2Message.addEventListener('input', (e) => {

    e.target.value = e.target.value.replace(/[^а-яА-Я+\-\s]+/g, "");

});
    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        let inputs = form.querySelectorAll('input');
        let inputsText = form.querySelectorAll('input[type="text"]');
        let inputsEmail = form.querySelectorAll('input[type="email"]');
        let inputsPhone = form.querySelectorAll('input[type="tel"]');

        for(let inputText of inputsText) {

            inputText.addEventListener('input', (e) => {

                e.target.value = e.target.value.replace(/[^а-яА-Я+\-\s]+/g, "");
                
            });
        }
        for(let inputEmail of inputsEmail) {

            inputEmail.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z0-9+\_\@\-\!\*\~\'\.]+/g, "");
            });        
        }

        for(let inputPhone of inputsPhone) {
            inputPhone.addEventListener('input', (e) => {

                e.target.value = e.target.value.replace(/[^\d\-()]/g, "");
                
            });
        }
        
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

module.exports = validate;
