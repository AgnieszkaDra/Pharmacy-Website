const button = document.querySelector('.nav__button')

const buttonpp = document.querySelector('.hamburger')
const backBlack = document.querySelector('.back_black')
const menu = document.querySelector('.menu_slide_left')
const close6 = document.querySelector('.close')
const header = document.querySelector('header')
const body = document.querySelector('body')

alert('index')

console.log(buttonpp, backBlack)

if(button === true){
    console.log('yes')
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
    
    menu.style.transform = "translateX(0%)"
   
})

close6.addEventListener('click', function(){
    menu.style.transform = "translateX(-100%)"
})


$("#myHref").on('click', function() {
    alert("inside onclick");
    // window.location = "http://www.google.com";
  });
