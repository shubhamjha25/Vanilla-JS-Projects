let ball = document.getElementById('ball')
let bat = document.querySelector('.bat');
let equip = document.querySelector('equip');

let imgBat = document.querySelectorAll('.TheBAT');
let imgBall = document.querySelectorAll('.TheBALL');
let imgEquip = document.querySelectorAll('.TheEQUIP');

function filterBall() {
    for(var i=0; i<imgBall.length; i++){
        imgBat[i].classList.add('No');
        imgBat[i].classList.remove('Yes');
        imgBall[i].classList.add('Yes');
        imgBall[i].classList.remove('No');
        imgEquip[i].classList.add('No');
        imgEquip[i].classList.remove('Yes');
    }
}

function filterBat() {
    for(var i=0; i<imgBat.length; i++){
        imgBall[i].classList.add('No');
        imgBall[i].classList.remove('Yes');
        imgBat[i].classList.add('Yes');
        imgBat[i].classList.remove('No');
        imgEquip[i].classList.add('No');
        imgEquip[i].classList.remove('Yes');
    }
}

function filterEquip() {
    for(var i=0; i<imgEquip.length; i++){
        imgEquip[i].classList.add('Yes');
        imgEquip[i].classList.remove('No');
        imgBat[i].classList.add('No');
        imgBat[i].classList.remove('Yes');
        imgBall[i].classList.add('No');
        imgBall[i].classList.remove('Yes');
    }
}

function filterAll() {
    for(var i=0; i<imgEquip.length; i++){
        imgEquip[i].classList.add('Yes');
        imgEquip[i].classList.remove('No')
        imgBat[i].classList.add('Yes');
        imgBat[i].classList.remove('No');
        imgBall[i].classList.add('Yes');
        imgBall[i].classList.remove('No');
    }
}