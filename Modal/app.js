var modalBtn = document.querySelector('.btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', function(){
    modalBg.classList.add('modal-active');
});

modalClose.addEventListener('click', function(){
    modalBg.classList.remove('modal-active');
});