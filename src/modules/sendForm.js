const sendForm = ({formId, someElem = []}) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется.';

    //console.log(form);
    const valid = ((list) => {
        //console.log(list);
        let success = true;
        let inputPhone = input[name="user_phone"];
        let inputName = input[name="user_name"];
        let inputMessage = input[name="user_message"];
        /*list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false;
            }
        });*/
        list.forEach(inputPhone => {
            if (/^[0-9]+\/+()\-/g.test(inputPhone)) {
                success = false;
                alert('Номер телефона не валиден!');
            }
        });
        list.forEach(inputName => {
            if (/^[а-яА-ЯёЁ]+\/s/g.test(inputName)) {
                success = false;
                alert('Имя не валидно!');
            }
        });
        list.forEach(inputMessage => {
            if (/^[а-яА-ЯёЁ0-9]+\/s\.\,\!\?/g.test(inputMessage)) {
                success = false;
                alert('Сообщение не валидно!');
            }
        });
        return success;
    });
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
                //console.log(data);
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
    
            submitForm();
            
        });
    }
    catch(error) {
        console.log(error.message);
    }

    

}

export default sendForm; 