"use strict";

//Here we grab our event handles.
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const body = document.querySelector("body");

//Here we create our functions
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

//here we passed the closedModal function expression
//instead of an anonymous callback function
// into the second addEventListener() argument,
// just like in the above example with the openModal
btnCloseModal.addEventListener("click", closeModal);

//Adding an event listener to close the modal window on
// pressing the "ESC" key.
//By using the event listener on the "document" object
// we make sure that the event is listened for globally
// that is, anywhere on the website
document.addEventListener("keydown", function (e) {
  //If the "ESC" key was hit, and the modal does not(!) contain the "hidden class"
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    {
      closeModal(); //then close the modal window
    }
  }
});
