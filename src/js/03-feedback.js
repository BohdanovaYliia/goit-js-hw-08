import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const dataForm = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateFormFields();

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);

    console.log(dataForm);
 }

function onFormInput(evt) {
    dataForm[evt.target.name] = evt.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}
 
function populateFormFields() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedData.email) {
        input.value = savedData.email;
    }

    if (savedData.message) {
        textarea.value = savedData.message;
    }
}