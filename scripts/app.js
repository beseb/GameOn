import { checkInputValue, checkIfLocationSelected, checkIfTermsAccepted, checkIfUserIsOver18, errorMessage, regexName, regexEmail, regexQuantity} from './function.js';
import { closeModal, showSuccessModal } from './modal.js';

// Get the form
const form = document.getElementById('form');
const successModal = document.querySelector('.successModal');
const firstNameField = document.getElementById('first');
const lastNameField = document.getElementById('last');
const emailField = document.getElementById('email');
const birthdateField = document.getElementById('birthdate');
const quantityField = document.getElementById('quantity');
const locations = document.querySelectorAll('input[name="location"]');
const termsCheckbox = document.getElementById('checkbox1');

// Check inputs with event listeners & functions
firstNameField.addEventListener('input', function(){
    checkInputValue(regexName, firstNameField, errorMessage.name);
});
lastNameField.addEventListener('input', function(){
    checkInputValue(regexName, lastNameField, errorMessage.name);
});
emailField.addEventListener('input', function(){
    checkInputValue(regexEmail, emailField, errorMessage.email);
});
quantityField.addEventListener('input', function(){
    checkInputValue(regexQuantity, quantityField, errorMessage.quantity);
});
birthdateField.addEventListener('input', function(){
    checkIfUserIsOver18(birthdateField, errorMessage.birthdate);
});
termsCheckbox.addEventListener('input', function(){
    checkIfTermsAccepted(termsCheckbox, errorMessage.terms);
});
locations.forEach(location => location.addEventListener('input', function(){
    checkIfLocationSelected(locations, errorMessage.locations);
}));
// Check if the form is valid & validate form
function validate(e){
    e.preventDefault();
    
    // Check if the form is valid
    const isFirstNameValid = checkInputValue(regexName, firstNameField, errorMessage.name);
    const isLastNameValid = checkInputValue(regexName, lastNameField, errorMessage.name);
    const isEmailValid = checkInputValue(regexEmail, emailField, errorMessage.email);
    const isQuantityValid = checkInputValue(regexQuantity, quantityField, errorMessage.quantity);
    const isBirthdateValid = checkIfUserIsOver18(birthdateField, errorMessage.birthdate);
    const isLocationValid = checkIfLocationSelected(locations, errorMessage.locations);
    const isTermsValid = checkIfTermsAccepted(termsCheckbox, errorMessage.terms);
    
    // Validate form
    if(isFirstNameValid && isLastNameValid && isEmailValid && isQuantityValid && isBirthdateValid && isLocationValid && isTermsValid){
    form.reset();
    showSuccessModal();  
    }
    
}
// Form submit
form.addEventListener('submit',(e)=> validate(e)  ); 