const validate = () => {

    let calcSquare = document.querySelector('.calc-square');
    let calcCount = document.querySelector('.calc-count');
    let calcDay = document.querySelector('.calc-day');
    let form1 = document.querySelector('#form1');
    let form2 = document.querySelector('#form2');
    let form3 = document.querySelector('#form3');
    let form1Name = document.querySelector('#form1-name');
    let form1Email = document.querySelector('#form1-email');
    let form1Phone = document.querySelector('#form1-phone');
    let form2Email = document.querySelector('#form2-email');
    let form2Message = document.querySelector('#form2-message');
    let form3Phone = document.querySelector('#form3-phone');
    let form3Email = document.querySelector('#form3-email');

    let forms = document.querySelectorAll('form');
    //console.log(forms);

    forms.forEach((form) => {
        let inputs = form.querySelectorAll('input');
        //console.log(inputs);
        for(let input of inputs) {
            if (input[type="text"]) {
                console.log(input);
            }
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

    

    /*form1.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError = false;
   
        if (/[a-zA-Z0-9+\_\@\-\!\*\~\'\.]+/g.test(form1Email.value) && form1Email.value !== "") {
            alert('В инпуте только латиница, цифры и спецсимволы');
        } else {
            isError = true;
        }

        if (/[\d\-()]/g.test(form1Phone.value) && form1Phone.value !== "") {
            alert('В инпуте только цифры, дефис и скобки');
        } else {
            isError = true;
        }

        if (!isError) {
            alert("Данные отправлены!");
        }
        
    });

    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError2 = false;

        if (/[a-zA-Z0-9+\_\@\-\!\*\~\'\.]+/g.test(form2Email.value) && form2Email.value !== "") {
            alert('В инпуте только латиница, цифры и спецсимволы');
        } else {
            isError2 = true;
        }

        if (/[\d\-()]/g.test(form2Phone.value) && form2Phone.value !== "") {
            alert('В инпуте только цифры, дефис и скобки');
        } else {
            isError2 = true;
        }

        if (/[а-яА-Я]+\-\s/g.test(form2Message.value)) {
            alert('В инпуте только кириллица, дефис и пробел');
        } else {
            isError2 = true;
        }

        if (!isError2) {
            alert("Данные отправлены!");
        }
        
    });

    form3.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError3 = false;

        if (/[\d\-()]/g.test(form3Phone.value) && form3Phone.value !== "") {
            alert('В инпуте только цифры, дефис и скобки');
        } else {
            isError3 = true;
        }

        if (/[a-zA-Z0-9+\_\@\-\!\*\~\'\.]+/g.test(form3Email.value) && form3Email.value !== "") {
            alert('В инпуте только латиница, цифры и спецсимволы');
        } else {
            isError3 = true;
        }

        if (!isError3) {
            alert("Данные отправлены!");
        }


    });*/
};

module.exports = validate;
