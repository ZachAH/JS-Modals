'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);


//function for opening modals
const openModal = function () {
        console.log('Button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}

//for loop looping over nodelist of the show-modals array and calling the openModal function
for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);


//function for closing modals adding class hidden back to them
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
} 

//calling the onClick event for closeModal funciton
btnCloseModal.addEventListener('click', closeModal); 
overlay.addEventListener('click', closeModal);


