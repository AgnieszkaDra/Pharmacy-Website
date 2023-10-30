//  import myHTML from '../../src/index.html';

// document.querySelector('.app').innerHTML = myHTML;
import './styles/reset/reset.css'
import './styles/style.css'

const logo2 = '../images/banner/drofarmaptekanamyslow.webp'

import webscope from '../images/banner/drofarmaptekanamyslow.webp'


export const footer = {
    webscope:webscope
}

export default footer

const logo = document.querySelector('.logo')
logo.src= footer.webscope


const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('nav')
const buttonClose = document.querySelector('.nav__button.close')

hamburger.addEventListener('click', function(){
    nav.classList.add('nav__block')
})

buttonClose.addEventListener('click', function(){
    nav.classList.remove('nav__block')
})


// if(button === true){

// }
// const open =  function () {
//     document.querySelector(".form").classList.add('open');
// document.querySelector(".form").classList.remove('open');

// document.querySelector(".form").classList.add('close');
// document.querySelector(".form").classList.remove('close');

// if ( document.querySelector(".form").classList.contains('open') )
// {
// document.querySelector(".form").classList.toggle('close');
// }
// }










