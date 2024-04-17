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
const content = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// close modal event
closeBtn.addEventListener("click", closeModal);

// Launch modal form
export function launchModal() {
  modalbg.style.display = "block";
}
// Close modal form
export function closeModal() {
  content.classList.toggle("--hidden");
  setTimeout(function() {
    modalbg.style.display = "none";
  }, 500); 
}


