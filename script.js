'use strict';

//declaring varibles 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');



//function for opening modals
const openModal = function () {
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

//by using document listening for events on the whole page
document.addEventListener('keydown', function(e) {
    console.log(e.key);

 // if  escape key is pressed and modal does not contain class hidden it will run closeModal function
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        
        closeModal();
    }
});


