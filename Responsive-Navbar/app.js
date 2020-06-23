let hamburger = document.querySelector('.my-bar');
let navLinks = document.querySelector('.links');
let logo = document.querySelector('.logo');

hamburger.addEventListener('click', function(){
    navLinks.classList.toggle('active');
    logo.classList.toggle('top');
});