// Show and hide error message
export const setErrorMessage=(element, message)=>{
    element.parentElement.setAttribute('data-error', message);
    element.parentElement.setAttribute('data-error-visible', true);
}
export const hideErrorMessage=(element)=>{
    element.parentElement.removeAttribute('data-error');
    element.parentElement.setAttribute('data-error-visible', false);
}

// Check if the input value is valid
export function checkInputValue(regex, element, message){
    if(!regex.test(element.value)){
        setErrorMessage(element, message);
        return false;
    }
    hideErrorMessage(element);
    return true;
}

// Check if terms are accepted
export function checkIfTermsAccepted(element, message){
    if(!element.checked){
        setErrorMessage(element, message);
        return false;
    }
    hideErrorMessage(element);
    return true;
}

// Check if a location is selected
export function checkIfLocationSelected(locations, message){
    const isChecked = Array.from(locations).some(location => location.checked);
    if(!isChecked){
        setErrorMessage(locations[0], message);
        return false;
    }
    hideErrorMessage(locations[0]);
    return true;
}

// Check if user is over 18

export function checkIfUserIsOver18(element, message){
  const birthdate = new Date(element.value);
  let diff = Date.now() - birthdate.getTime();
    diff = new Date(diff);

    const userAge = Math.abs(diff.getUTCFullYear() - 1970);
    console.log(userAge);
    console.log(birthdate);
    // Check if birthYear is realistic...
    const currentYear = new Date().getFullYear();
    const birthYear = birthdate.getFullYear();
    
    if (birthYear < currentYear - 100 || birthYear.toString().length !== 4 || userAge < 18) {
        setErrorMessage(element, message);
        return false;
    } 
    hideErrorMessage(element);
    return true;
}

// Message error
export const errorMessage = {
    name: 'Minimum 2 caractères, maximum 15 caractères. Les chiffres et caractères spéciaux différents de - ne sont pas autorisés',
    email: 'Veuillez renseigner une adresse mail valide.',
    birthdate: 'Vous devez avoir plus de 18 ans pour participer',
    quantity: 'Veuillez renseigner un nombre entre 0 et 99',
    locations: 'Veuillez sélectionner une ville',
    terms: `Vous devez accepter les conditions d'utilisations !`,
};

// Regex variables
export const regexName = /^([A-Za-z\s]{2,15})?([-]{0,1})?([A-Za-z\s]{2,15})$/;
export const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const regexQuantity = /^[0-9]{1,2}$/;
