const validate = () => {

    let calcSquare = document.querySelector('.calc-square');
    let calcCount = document.querySelector('.calc-count');
    let calcDay = document.querySelector('.calc-day');
    let form1 = document.querySelector('#form1');
    let form1Name = document.querySelector('#form1-name');
    let form1Email = document.querySelector('#form1-email');
    let form1Phone = document.querySelector('#form1-phone');

    //console.log(form1Name);
    //console.log(form1Email);
    //console.log(form1Phone);

    calcSquare.addEventListener('input', (e) => {
        console.log(e.target.value);
        e.target.value = e.target.value.replace(/[^\d+]/g, "");

    });
    calcCount.addEventListener('input', (e) => {
        console.log(e.target.value);
        e.target.value = e.target.value.replace(/[^\d+]/g, "");

    });

    calcDay.addEventListener('input', (e) => {
        console.log(e.target.value);
        e.target.value = e.target.value.replace(/[^\d+]/g, "");

    });

    /*form1Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace((/\d+/), "");
    });

    form1Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace((/\d+/), "");
    });

    form1Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace((/\d+/), "");
    });*/

    form1.addEventListener('submit', (e) => {
        e.preventDefault();
        let isError = false;

        /*if (!/[^а-яА-Я]/g.test(form1Name.value)) {
            alert('В инпуте только кириллица');
        }*/
   
        if (/[^a-zA-Z0-9+\_\@\-\!\*\~\'\.]+/g.test(form1Email.value)) {
            alert('В инпуте только латиница, цифры и спецсимволы');
        }

        if (/[\d\-()]/g.test(form1Phone.value)) {
            alert('В инпуте только цифры, дефис и скобки');
        }

        if (!isError) {
            //alert("Данные отправлены!");
        }
        
    });
};

module.exports = validate;
