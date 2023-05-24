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
// document.addEventListener('DOMContentLoaded', init);
const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
import Form from "./classes/Form.js";

const sendOrderButton = document.querySelector('.send')

import prescriptionValue from "./classes/nonPrescriptionSend.js";
// const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')

// console.dir(paperPrescriptionButton)
const paperContainer = document.querySelector('.paperPrescriptionForm')
const paperPrescriptionContainer = document.querySelector('.paperPrescription')



// function init() {


  //   const electronicPrescriptionButtonAdd = new electronicPrescription(electronicPrescriptionButton)

  //   electronicPrescriptionButtonAdd.send()

  // const orderButtonSend = new Order(sendOrderButton)
  // const electronicPrescriptionButtonAdd = new electronicPrescription(electronicPrescriptionButton)
  
  // const paperPrescriptionButton = document.querySelector('.paperPrescription.button')
  // orderButtonSend.send()
  // electronicPrescriptionButtonAdd.send()

//     const fieldset0 = new FieldsetImitate('.orderDrugsForm-container', 'Dane zamawiającego', 'dataOfPrescription', '#0000')
// fieldset0.init()

const fieldset1 = new FieldsetImitate('.orderDrugsForm-container', 'Leki na receptę elektroniczną', 'electronicPrescriptionFieldset', '#fe2e16')
fieldset1.init()
const form1 = new Form('.electronicPrescriptionFieldset', 'electronicPrescriptionForm')
form1.init()

const fieldset2 = new FieldsetImitate('.orderDrugsForm-container', 'Leki na receptę papierową', 'paperPrescriptionFieldset', '#fe2e16')
fieldset2.init()
// const form2 = new Form('.paperPrescriptionFieldset', 'paperPrescriptionForm')
// form2.init()

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

const labelError0a = new LabelError('.name' )
labelError0a.init()

const input0b= new Input('.nameAndSurnameOrder','email',  'email')
input0b.init()

const labelError0b = new LabelError('.email' )
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

// const labelError3 = new LabelError('.paperPrescriptionFieldset' )
// labelError3.init()

const input4= new Input('.nonPrescriptionFieldset', 'drugName','nazwa leku')
input4.init()



const input5= new Input('.nonPrescriptionFieldset', 'drugDose',  'dawka')
input5.init()

const input6= new Input('.nonPrescriptionFieldset', 'drugAmount' , 'ilość')
input6.init()

// const inputFile1 = new InputFile('.paperPrescription', 0)
// inputFile1.init()

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
 alert('clickButton')
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
  alert('clicknon')
  const non = new prescriptionValue()
  non.init()
})

const button4 = new Button('.form-send', 'Zamawiam', 'send')
button4.init()








// const button3 = new Button('nonPrescription', 'Dodaj kolejny lek')
// button3.init()











// } 




// const newInput = new InputFile('.paperPrescriptionContainer')
// newInput.init()

// const newButton = new Button('.paperPrescriptionContainer')
// newButton.init()
// const paperPrescription1 = new paperPrescription('.paperPrescriptionContainer')
// paperPrescription1.init()
  // paperPrescriptionButton.addEventListener('click', e => {
  //   const paperPrescriptionButtonAdd = new paperPrescription(paperPrescriptionButton)
  //   paperPrescriptionButtonAdd.add()
   
  // })
  
  
 
//  let uploadedFiles = document.querySelector('#uploaded-file');
//         uploadedFiles.addEventListener('change', function(el){
//            const load = new paperPrescription(el)
//            var file = el.target.files[0];
//             load.handleFile(file);
//           load.initImageLoader(el)
           
//         })
   
    
//      function initImageLoader(el){
      
//         this.uploadedFile.forEach(el => el.addEventListener('change',handleManualUploadedFiles));
//         function handleManualUploadedFiles(ev){
//             alert('change')
           
           
    
//         }   
//

  
   

    // const userName = new Input(usernameData)
    // userName.checkLength()

    // const userEmail = new Input(emailData)
    // userEmail.checkLength()
   

//     var canvas = document.getElementById('our-canvas'),
//     context = canvas.getContext('2d');
//     const buttonPaper = document.querySelector('.paperPrescriptionForm.button')
//     console.log(buttonPaper)
// let uploadedFile = document.getElementById('uploaded-file');
// buttonPaper.addEventListener('submit',initImageLoader) ;

// function initImageLoader(e){
//   e.preventDefault()
// alert('init')
//     uploadedFile.addEventListener('change',handleManualUploadedFiles);
//     function handleManualUploadedFiles(ev){
//         var file = ev.target.files[0];
//         handleFile(file);

//     }   
// }
// function handleFile(file){
//     var ImageType = /image.*/;

//     if(file.type.match(ImageType)){

//         var reader = new FileReader();      

//         reader.onloadend = function(event){
//             var tempImageStore = new Image();
//             tempImageStore.onload = function(ev){
//                 canvas.height = ev.target.height;
//                 canvas.width = ev.target.width;         
//                 context.drawImage(ev.target,0,0);
//             }   
//             tempImageStore.src = event.target.result;
//         }
//         reader.readAsDataURL(file);
//     }   
// }
