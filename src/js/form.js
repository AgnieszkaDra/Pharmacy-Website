console.log('form')

import Order from "./classes/order.js"

import { resizeLayout } from "../js/layoutChange/layoutChange.js";
document.addEventListener('DOMContentLoaded', init);
// const username = document.getElementById('username')
// const email = document.getElementById('email')
// const usernameData = { value: username}
// const emailData = {value: email}
const send = document.querySelector('.send')
console.log(send)
function init() {
   resizeLayout()
    const sendButton = new Order(send)
    
    sendButton.send()
    
   

    // const userName = new Input(usernameData)
    // userName.checkLength()

    // const userEmail = new Input(emailData)
    // userEmail.checkLength()
   
} 



