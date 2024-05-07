import { checkInputValue, checkIfLocationSelected, checkIfTermsAccepted, checkIfUserIsOver18, errorMessage, regexName, regexEmail, regexQuantity} from './function.js';
import {  showSuccessModal } from './modal.js';

// Responsive Navbar
const btnMobileMenu = document.querySelector(".btn-mobile-menu");
const navBar = document.querySelector("nav")
btnMobileMenu.addEventListener("click", openNavBar);


// Function to open the NavBar in mobile screen, all in CSS with the classList.toggle
export function openNavBar(){
    navBar.classList.toggle("navBar--open");
    btnMobileMenu.classList.toggle("btn-mobile-menu--open");
}

// Get the form
const form = document.getElementById('form');
const firstNameField = document.getElementById('first');
const lastNameField = document.getElementById('last');
const emailField = document.getElementById('email');
const birthdateField = document.getElementById('birthdate');
const quantityField = document.getElementById('quantity');
const locations = document.querySelectorAll('input[name="location"]');
const termsCheckbox = document.getElementById('checkbox1');

// Check inputs with event listeners & functions
firstNameField.addEventListener('change', function(){
    checkInputValue(regexName, firstNameField, errorMessage.firstname);
});
lastNameField.addEventListener('change', function(){
    checkInputValue(regexName, lastNameField, errorMessage.lastname);
});
emailField.addEventListener('change', function(){
    checkInputValue(regexEmail, emailField, errorMessage.email);
});
quantityField.addEventListener('change', function(){
    checkInputValue(regexQuantity, quantityField, errorMessage.quantity);
});
birthdateField.addEventListener('input', function(){
    checkIfUserIsOver18(birthdateField, errorMessage.birthdate);
});
termsCheckbox.addEventListener('change', function(){
    checkIfTermsAccepted(termsCheckbox, errorMessage.terms);
});
locations.forEach(location => location.addEventListener('change', function(){
    checkIfLocationSelected(locations, errorMessage.locations);
}));
// Check if the form is valid & validate form
function validate(e){
    e.preventDefault();
    
    // Check if the form is valid
    const isFirstNameValid = checkInputValue(regexName, firstNameField, errorMessage.firstname);
    const isLastNameValid = checkInputValue(regexName, lastNameField, errorMessage.lastname);
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