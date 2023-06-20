

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

const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
import Form from "./classes/Form.js";
import SpanOk from "./classes/SpanOk.js";
import SpanWrong from "./classes/SpanWrong.js";

const sendOrderButton = document.querySelector('.send')

import prescriptionValue from "./classes/nonPrescriptionSend.js";
import { toUnicode } from "./functions/functions.js";

const paperContainer = document.querySelector('.paperPrescriptionForm')
const paperPrescriptionContainer = document.querySelector('.paperPrescription')









const fieldset1 = new FieldsetImitate('.orderDrugsForm-container', 'Leki na receptę elektroniczną', 'electronicPrescriptionFieldset', '#fe2e16')
fieldset1.init()
const form1 = new Form('.electronicPrescriptionFieldset', 'electronicPrescriptionForm')
form1.init()

const fieldset2 = new FieldsetImitate('.orderDrugsForm-container', 'Leki na receptę papierową', 'paperPrescriptionFieldset', '#fe2e16')
fieldset2.init()


const fieldset3 = new FieldsetImitate('.orderDrugsForm-container', 'Pozostałe leki/suplementy diety/wyroby medyczne', 'nonPrescriptionFieldset', '#fe2e16')
fieldset3.init()

const fieldset4 = new FieldsetImitate('.orderDrugsForm-container', 'Twoje Zamówienie', 'sendPrescriptionFieldset', '#fe2e16')
fieldset4.init()

const form2 = new Form('.sendPrescriptionFieldset', 'form-send')
form2.init()
const fieldset8 = new FieldsetImitate('.form-send', 'Dane zamawiającego', 'nameAndSurnameOrder', '')
fieldset8.init()
const orderButtonSend = new Order()
orderButtonSend.send()

const fieldset5 = new FieldsetImitate('.form-send', 'Recepty elektroniczne', 'electronicPrescriptionOrder', 'rgb(249, 217, 213)')
fieldset5.init()

const fieldset6 = new FieldsetImitate('.form-send', 'Recepty papierowe', 'paperPrescriptionOrder', 'rgb(249, 217, 213)')
fieldset6.init()

const fieldset7 = new FieldsetImitate('.form-send', 'Pozostałe leki', 'nonPrescriptionOrder', 'rgb(249, 217, 213)')
fieldset7.init()

const input0a= new Input('.nameAndSurnameOrder', 'name', 'Imię i nazwisko/Nick')
input0a.init()

const span0aOK = new SpanOk('.name', toUnicode(0x2713))
span0aOK.init()

const span0aWrong = new SpanWrong('.name', toUnicode(10060))
span0aWrong.init()


const labelError0a = new LabelError('.name' )
labelError0a.init()

const input0b= new Input('.nameAndSurnameOrder','email',  'email')
input0b.init()


const span0b = new SpanOk('.email', toUnicode(0x2713))
span0b.init()

const span0bWrong = new SpanWrong('.email', toUnicode(10060))
span0bWrong.init()

const labelError0b = new LabelError('.email')
labelError0b.init()

const input1 = new Input('.electronicPrescriptionForm', 'PIN', 'PIN recepty')
input1.init()

const labelError1 = new LabelError('.PIN' )
labelError1.init()


const input2= new Input('.electronicPrescriptionForm', 'PESEL', 'PESEL recepty')
input2.init()

const labelError2 = new LabelError('.PESEL' )
labelError2.init()

const input3= new InputFile('.paperPrescriptionFieldset', 'uploaded-file')
input3.init()



const input4= new Input('.nonPrescriptionFieldset', 'drugName','nazwa leku')
input4.init()



const input5= new Input('.nonPrescriptionFieldset', 'drugDose',  'dawka')
input5.init()

const input6= new Input('.nonPrescriptionFieldset', 'drugAmount' , 'ilość')
input6.init()


const button1 = new Button('.electronicPrescriptionForm', 'Dodaj kolejną receptę elektroniczną', 'submit')
button1.init()
const electronicPrescriptionButtonAdd = new electronicPrescriptionSend()
electronicPrescriptionButtonAdd.send()

const button2 = new Button('.paperPrescriptionFieldset', 'Dodaj kolejną receptę papierową', '')
button2.init()
const canvas1 = new Canvas('.paperPrescriptionOrder')
canvas1.init()

const paper = document.querySelector('.paperPrescriptionFieldset')

const inputsFileContainer = document.createElement('div')
inputsFileContainer.classList.add('paperInputsContainer')
paper.appendChild(inputsFileContainer)

const paperPrescriptionButtonAdd = new paperPrescriptionSend()
paperPrescriptionButtonAdd.send()
const paperPrescriptionButton = document.querySelector('.paperPrescriptionFieldsetbutton')
console.log(paperPrescriptionButton)
paperPrescriptionButton.addEventListener('click', (el) =>{

const elem = el.target
  const input4 = new InputFile('.paperInputsContainer')
input4.init()
const classInput4 = input4.classs
console.log(typeof classInput4)

const canvas1 = new Canvas('.paperPrescriptionOrder')
canvas1.init()
const classCanvas1 = canvas1.classs
const paperPrescriptionButtonAdd = new paperPrescriptionSend()
paperPrescriptionButtonAdd.sendNew(classInput4,classCanvas1)
})

const button3 = new Button('.nonPrescriptionFieldset', 'Dodaj kolejny lek', '')
button3.init()

const nonPrescriptionButton = document.querySelector('.nonPrescriptionFieldsetbutton')
nonPrescriptionButton.addEventListener('click', (el) => {

  const non = new prescriptionValue()
  non.init()
})

const button4 = new Button('.form-send', 'Zamawiam', 'send')
button4.init()


















  
  
   

   
 
