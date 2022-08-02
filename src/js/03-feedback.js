import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
let dataForm = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateFormFields();

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(dataForm);

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
 }

function onFormInput(evt) {
    dataForm[evt.target.name] = evt.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}
 
function populateFormFields() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedData) {
        dataForm = savedData;
    }

    if (dataForm.email) {
        input.value = dataForm.email;
    }

    if (dataForm.message) {
        textarea.value = dataForm.message;
    }
}