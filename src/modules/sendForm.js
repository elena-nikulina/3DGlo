const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    let loadText = 'Загрузка...';
    let errorText = 'Ошибка...';
    let successText = 'Спасибо! Наш менеджер с вами свяжется.';

    /*if (input.id == 'form2-message') {
        successText.style.color = '#fff';
        errorText.style.color = '#fff';
        loadText.style.color = '#fff';
    }*/

    const valid = (list) => {

        let success = true;
        

        list.forEach(input => {
            if (input.classList.contains('form-name')) {
                if (/^[0-9]+\/+()\-/g.test(input)) {
                    success = false;
                    alert('Имя не валидно!');
                } 
            } else if (input.classList.contains('form-phone')) {
                if (/^[0-9]+\/+()\-/g.test(input)) {
                    success = false;
                    alert('Номер телефона не валиден!');
                }
            } else if (input.id == 'form2-message') {
                if (/^[а-яА-ЯёЁ0-9]+\/s\.\,\!\?/g.test(input)) {
                    success = false;
                    alert('Сообщение не валидно!');
                }
            }
            
        });
        return success;
    }
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json',
              }
        }).then(res => res.json());
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if(elem.type === 'block') {
                formBody[elem.id] = element.textContent;

            } else if(elem.type === 'input') {
                formBody[elem.id] = element.value;
            }

        });

        if (valid(formElements)) {
            sendData(formBody)
                .then(data => {
               
                statusBlock.textContent = successText;
                formElements.forEach(input => {
                    input.value = '';
                });
            })
                .catch(error => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert('Данные не валидны!');
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста)');
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            statusBlock.style.color = '#fff';
    
            submitForm();
            
            
        });
    }
    catch(error) {
        console.log(error.message);
    }

    

}

export default sendForm; 