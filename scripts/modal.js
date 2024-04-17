function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const closeBtnSuccessModal = document.querySelector(".btn-successModal");
const content = document.querySelector(".content");
const successModal = document.querySelector('.successModal');
const form = document.getElementById('form');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", closeModal);
closeBtnSuccessModal.addEventListener('click', closeModal);

// Launch modal form
export function launchModal() {
  modalbg.style.display = "block";
  content.classList.remove("--hidden");
  successModal.classList.remove("--hidden");

}
// Close modal form
export function closeModal() {
  content.classList.add("--hidden");
  successModal.classList.add("--hidden");
  setTimeout(function() {
    modalbg.style.display = "none";
  }, 500); 
}
// On validation success, display success modal
export function showSuccessModal() {
  form.style.display = "none";
  successModal.style.display = "flex";
}

