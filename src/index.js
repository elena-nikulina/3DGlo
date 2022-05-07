import timer from './modules/timer';
import validate from './modules/validate';
import tabs from './modules/tabs';
import menu from './modules/menu';
import modal from './modules/modal';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('15 may 2022');//one
menu();
modal();
validate();
tabs();
slider();
calc();
sendForm({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]});
    sendForm({
        formId: 'form2', 
        someElem: [
            {
                type: 'block',
                id: 'total'
            }
        ]});
        sendForm({
            formId: 'form3', 
            someElem: [
                {
                    type: 'block',
                    id: 'total'
                }
            ]});