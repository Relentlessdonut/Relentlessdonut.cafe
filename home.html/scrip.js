const header = document.querySelector('header');
const hambuergerbtn = document.querySelector
('#hamburger-btn');
const closeMenuBtn =document.querySelector
('#close-menu-btn');

// Toggle moblie menut on hamburger button click

hambuergerbtn.addEventListener('click' , ()=> header.
    classList.toggle('show-moblie-menu'));

// Close moblie menu on close button click

closeMenuBtn.addEventListener('click', ()=>
hambuergerbtn.click());