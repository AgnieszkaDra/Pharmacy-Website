import './sass/style.css'

import Order from "./classes/order.js"
import electronicPrescription from "./classes/electronicPrescription.js";
import paperPrescription from "./classes/paperPrescription.js";

import Button from "./classes/Button.js";
import FieldsetImitate from "./classes/FieldsetImitate.js";
import Input from "./classes/Input.js";
import InputFile from "./classes/InputFile.js";
import electronicPrescriptionSend from "./classes/electronicPrescriptionSend.js";
import LabelError from "./classes/LabelError.js";
import Canvas from "./classes/Canvas.js";
import paperPrescriptionSend from "./classes/paperPrescriptionSend.js";
import Container from "./classes/Container.js"

const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
import Form from "./classes/Form.js";
import SpanOk from "./classes/SpanOk.js";
import SpanWrong from "./classes/SpanWrong.js";
import { setInputSuccess } from './functions/functions.js';

const sendOrderButton = document.querySelector('.send')

import prescriptionValue from "./classes/nonPrescriptionSend.js";
import { setSuccess, toUnicode } from "./functions/functions.js";



const mql = window.matchMedia("(max-width: 768px)")
const tablet = window.matchMedia("(min-width: 769px")

const paperContainer = document.querySelector('.paperPrescriptionForm')
const paperPrescriptionContainer = document.querySelector('.paperPrescription')

const sendForm = new Form('.container.main', 'form-send')
sendForm.init()

if(mql.matches) {

  const nameandsurnameFieldset = new FieldsetImitate('.form-send', 'Dane pacjenta', 'nameAndSurnameOrder', '#fe2e16')
  nameandsurnameFieldset.init()
  
  const nameInput= new Input('.nameAndSurnameOrder', 'name', 'Imię i nazwisko')
  nameInput.init()

  const nameSpanOkName = new SpanOk('.name', toUnicode(0x2713))
  nameSpanOkName.init()

  const nameSpanWrong = new SpanWrong('.name', toUnicode(10060))
  nameSpanWrong.init()

  const nameLabelError = new LabelError('.name')
  nameLabelError.init()

  const emailInput= new Input('.nameAndSurnameOrder','email',  'email')
  emailInput.init()

  const emailSpanOk = new SpanOk('.email', toUnicode(0x2713))
  emailSpanOk.init()

  const emailSpanWrong = new SpanWrong('.email', toUnicode(10060))
  emailSpanWrong.init()

  const emailLabelError = new LabelError('.email')
  emailLabelError.init()

}









const electronicprescriptionFieldset = new FieldsetImitate('.form-send', 'Leki na receptę elektroniczną', 'electronicPrescriptionFieldset', '#fe2e16')
electronicprescriptionFieldset.init()

const electronicprescriptionForm = new Form('.electronicPrescriptionFieldset', 'electronicPrescriptionForm')
electronicprescriptionForm.init()

const pinInput = new Input('.electronicPrescriptionForm', 'PIN', 'PIN recepty')
pinInput.init()

const pinSpanOkName = new SpanOk('.PIN', toUnicode(0x2713))
pinSpanOkName.init()

const pinSpanWrong = new SpanWrong('.PIN', toUnicode(10060))
pinSpanWrong.init()

const pinLabelError = new LabelError('.PIN' )
pinLabelError.init()

const peselInput = new Input('.electronicPrescriptionForm', 'PESEL', 'PESEL recepty')
peselInput.init()

const peselSpanOkName = new SpanOk('.PESEL', toUnicode(0x2713))
peselSpanOkName.init()

const peselSpanWrong = new SpanWrong('.PESEL', toUnicode(10060))
peselSpanWrong.init()

const peselLabelError = new LabelError('.PESEL' )
peselLabelError.init()

if(mql.matches) {

  const electronicprescriptionOrder = new FieldsetImitate('.electronicPrescriptionForm', '', 'electronicPrescriptionOrder', '')
  electronicprescriptionOrder.init()

  const electronicprescriptionButton = new Button('.electronicPrescriptionForm', 'Dodaj kolejną receptę elektroniczną', 'submit')
  electronicprescriptionButton.init()

  const electronicPrescriptionButtonAdd = new electronicPrescriptionSend()
  electronicPrescriptionButtonAdd.go()

}

if (tablet.matches) {

  const orderFieldset = new FieldsetImitate('.form-send', 'Twoje Zamówienie', 'sendPrescriptionFieldset', '#fe2e16')
  orderFieldset.init()

  const nameandsurnameFieldset = new FieldsetImitate('.sendPrescriptionFieldset', 'Dane pacjenta', 'nameAndSurnameOrder', '#fe2e16')
  nameandsurnameFieldset.init()
  
  const nameInput= new Input('.nameAndSurnameOrder', 'name', 'Imię i nazwisko')
  nameInput.init()

  const nameSpanOkName = new SpanOk('.name', toUnicode(0x2713))
  nameSpanOkName.init()

  const nameSpanWrong = new SpanWrong('.name', toUnicode(10060))
  nameSpanWrong.init()

  const nameLabelError = new LabelError('.name')
  nameLabelError.init()

  const emailInput= new Input('.nameAndSurnameOrder','email',  'email')
  emailInput.init()

  const emailSpanOk = new SpanOk('.email', toUnicode(0x2713))
  emailSpanOk.init()

  const emailSpanWrong = new SpanWrong('.email', toUnicode(10060))
  emailSpanWrong.init()

  const emailLabelError = new LabelError('.email')
  emailLabelError.init()

  const electronicprescriptionOrder = new FieldsetImitate('.sendPrescriptionFieldset', 'Leki na receptę', 'electronicPrescriptionOrder', '')
  electronicprescriptionOrder.init()

  const electronicprescriptionButton = new Button('.electronicPrescriptionForm', 'Dodaj kolejną receptę elektroniczną', 'submit')
electronicprescriptionButton.init()

const electronicPrescriptionButtonAdd = new electronicPrescriptionSend()
electronicPrescriptionButtonAdd.go()



}


// if(tablet.matches) {
//   const fieldset5 = new FieldsetImitate('.electronicPrescriptionForm', 'Recepty elektroniczne', 'electronicPrescriptionOrder', 'rgb(249, 217, 213)')
//   fieldset5.init()
// }

const paperprescriptionFieldset = new FieldsetImitate('.form-send', 'Leki na receptę papierową', 'paperPrescriptionFieldset', '#fe2e16')
paperprescriptionFieldset.init()

const paperprescriptionForm = new Form('.paperPrescriptionFieldset', 'paperPrescriptionForm')
paperprescriptionForm.init()

function handleManualUploadedFiles(){
  alert('change')
  var file = ev.target.files[0];
  handleFile(file);
  ev.target.value = null

}



// const classCanvas1 = canvas1.classs
// const paperPrescriptionButtonAdd = new paperPrescriptionSend()
// paperPrescriptionButtonAdd.sendNew(classInput4,classCanvas1)
const paper = document.querySelector('.paperPrescriptionForm')
const inputsFileContainer = document.createElement('div')
inputsFileContainer.classList.add('paperInputsContainer')
paper.appendChild(inputsFileContainer)
const paperprescriptionInput= new InputFile('.paperInputsContainer')
paperprescriptionInput.init()
const classInput4 = paperprescriptionInput.classs

// const canvas1 = new Canvas(`.inputCont`)
// canvas1.init()
// const classCanvas1 = canvas1.classs
// console.log(classCanvas1)


const paperprescriptionButton = new Button('.paperPrescriptionForm', 'Dodaj kolejną receptę papierową', '')
paperprescriptionButton.init()

// paperprescriptionButton.addEventListener('click', function(el) {
//   const inn = new InputFile('.paperInputsContainer')
  
//   inn.init()
// })

// const files = document.querySelectorAll('.file')
// console.log(files)
// document.querySelectorAll('.file').forEach(item => {
//   item.addEventListener('change', event => {
//     alert('event')
//   } )
// }) 




// const paperPrescriptionButtonAdd = new paperPrescriptionSend()
// paperPrescriptionButtonAdd.send(classInput4, classCanvas1)

///WAŻNE PAPER
// const paperPrescriptionButton = document.querySelector('.paperPrescriptionFieldsetbutton')
// console.log(paperPrescriptionButton)
// paperPrescriptionButton.addEventListener('click', (el) =>{
// alert('canvas click')
// const elem = el.target


//   const input4 = new InputFile('.paperInputsContainer')
// input4.init()
// const classInput4 = input4.classs
// console.log(typeof classInput4)
// console.log(classInput4)


// const canvas1 = new Canvas(`.inputCont`)
// canvas1.init()
// const classCanvas1 = canvas1.classs
// console.log(classCanvas1)
// const paperPrescriptionButtonAdd = new paperPrescriptionSend()
// paperPrescriptionButtonAdd.send(classInput4,classCanvas1)
// })

// KONIEC WAZNE PAPER


// const paperPrescriptionButtonAdd = new paperPrescriptionSend()
// paperPrescriptionButtonAdd.send()



const otherprescriptionFieldset = new FieldsetImitate('.form-send', 'Pozostałe leki/suplementy diety/wyroby medyczne', 'nonPrescriptionFieldset', '#fe2e16')
otherprescriptionFieldset.init()

const nonprescriptionForm = new Form('.nonPrescriptionFieldset', 'nonPrescriptionForm')
nonprescriptionForm.init()

const drugNameInput= new Input('.nonPrescriptionForm', 'drugName','nazwa leku')
drugNameInput.init()

const drugDoseInput= new Input('.nonPrescriptionForm', 'drugDose',  'dawka')
drugDoseInput.init()

const drugAmountInput= new Input('.nonPrescriptionForm', 'drugAmount' , 'ilość')
drugAmountInput.init()

const button3 = new Button('.nonPrescriptionForm', 'Dodaj kolejny lek', 'submit')
button3.init()




const buttonSend = new Button('.form-send', 'Zamawiam', 'submit')
buttonSend.init()
// // const form2 = new Form('.sendPrescriptionFieldset', 'form-send')
// // form2.init()
// const fieldset8 = new FieldsetImitate('.form-send', 'Dane zamawiającego', 'nameAndSurnameOrder', '')
// fieldset8.init()



// const fieldset6 = new FieldsetImitate('.form-send', 'Recepty papierowe', 'paperPrescriptionOrder', 'rgb(249, 217, 213)')
// fieldset6.init()

// const fieldset7 = new FieldsetImitate('.form-send', 'Pozostałe leki', 'nonPrescriptionOrder', 'rgb(249, 217, 213)')
// fieldset7.init()










// // const electronicPrescriptionButtonAdd = new electronicPrescriptionSend()
// // electronicPrescriptionButtonAdd.send()




// const paper = document.querySelector('.paperPrescriptionFieldset')

// const inputsFileContainer = document.createElement('div')
// inputsFileContainer.classList.add('paperInputsContainer')
// paper.appendChild(inputsFileContainer)


// const paperPrescriptionButton = document.querySelector('.paperPrescriptionFieldsetbutton')
// console.log(paperPrescriptionButton)
// paperPrescriptionButton.addEventListener('click', (el) =>{

// const elem = el.target
//   const input4 = new InputFile('.paperInputsContainer')
// input4.init()
// const classInput4 = input4.classs
// console.log(typeof classInput4)

// const canvas1 = new Canvas('.paperPrescriptionOrder')
// canvas1.init()
// const classCanvas1 = canvas1.classs
// const paperPrescriptionButtonAdd = new paperPrescriptionSend()
// paperPrescriptionButtonAdd.sendNew(classInput4,classCanvas1)
// })



const nonPrescriptionButton = document.querySelector('.nonPrescriptionFormbutton')
nonPrescriptionButton.addEventListener('click', (el) => {

  const non = new prescriptionValue()
  non.init()
})

const form = document.querySelector('.form-send')
form.addEventListener('keydown', function(keyEvent) {
  if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
    keyEvent.preventDefault();
  }
})
const inputName = document.querySelector('input[name="name"]')
inputName.addEventListener('input', function(e) {
  
  if(e.target.value !==0){
    alert('set')
    setInputSuccess(e.target, '')
    
  }
})

const inputEmail = document.querySelector('input[name="email"]')
inputEmail.addEventListener('input', function(e) {
  
  if(e.target.value !==0){
    
    setInputSuccess(e.target, '')
    
  }
})

const inputPIN = document.querySelector('input[name="PIN"]')
inputPIN.addEventListener('input', function(e) {
  
  if(e.target.value !==0){
    
    setInputSuccess(e.target, '')
    
  }
})

const inputPESEL = document.querySelector('input[name="PESEL"]')
inputPESEL.addEventListener('input', function(e) {
  
  if(e.target.value !==0){
    
    setInputSuccess(e.target, '')
    
  }
})


const orderSend = new Order()
orderSend.go()

InputFile.prototype.click_handler = function(el) {
  el.preventDefault()
  el.init()
}
var object = new InputFile('.paperInputsContainer');

document.querySelector('.paperPrescriptionFormbutton').addEventListener('click', object.init());

























  
  
   

   
 
