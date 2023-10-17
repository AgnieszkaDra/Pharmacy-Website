


const button = document.querySelector('.nav__button')

const buttonpp = document.querySelector('.hamburger')
const backBlack = document.querySelector('.back_black')
const nav = document.querySelector('nav')
const buttonClose = document.querySelector('.nav__button.close')
const menu = document.querySelector('.menu_slide_left')
const close6 = document.querySelector('.close')
const header = document.querySelector('header')
const body = document.querySelector('body')




if(button === true){

}
const open =  function () {
    document.querySelector(".form").classList.add('open');
document.querySelector(".form").classList.remove('open');

document.querySelector(".form").classList.add('close');
document.querySelector(".form").classList.remove('close');

if ( document.querySelector(".form").classList.contains('open') )
{
document.querySelector(".form").classList.toggle('close');
}
}


buttonpp.addEventListener('click', function(){
    alert('click')
    nav.classList.add('nav__block')
   
})

buttonClose.addEventListener('click', function(){
    alert('buttonClose')
    nav.classList.remove('nav__block')
})

close6.addEventListener('click', function(){
    menu.style.transform = "translateX(-100%)"
})



