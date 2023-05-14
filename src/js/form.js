import Order from "./classes/order.js"
import electronicPrescription from "./classes/electronicPrescription.js";
import paperPrescription from "./classes/paperPrescription.js";

import Button from "./classes/Button.js";
import FieldsetImitate from "./classes/FieldsetImitate.js";
import Input from "./classes/Input.js";
import InputFile from "./classes/InputFile.js";
import electronicPrescriptionSend from "./classes/electronicPrescriptionSend.js";
import LabelError from "./classes/LabelError.js";
// document.addEventListener('DOMContentLoaded', init);

import Form from "./classes/Form.js";

const sendOrderButton = document.querySelector('.send')
const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
const paperPrescriptionButton = document.querySelector('.paperPrescription.button')
// console.dir(paperPrescriptionButton)
const paperPrescriptionContainer = document.querySelector('.paperPrescription')



// function init() {

  //   const orderButtonSend = new Order(sendOrderButton)
  //   const electronicPrescriptionButtonAdd = new electronicPrescription(electronicPrescriptionButton)
  // orderButtonSend.send()
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









// const fieldset2 = new FieldsetImitate('.orderDrugsForm-container', 'Leki na receptę papierową', 'paperPrescription', '#fe2e16')
// fieldset2.init()

// const fieldset3 = new FieldsetImitate('.orderDrugsForm-container', 'Pozostałe leki/suplementy diety/wyroby medyczne', 'nonPrescription', '#fe2e16')
// fieldset3.init()

const fieldset4 = new FieldsetImitate('.orderDrugsForm-container', 'Twoje Zamówienie', 'form-send', '#fe2e16')
fieldset4.init()

const fieldset5 = new FieldsetImitate('.form-send', 'Recepty elektroniczne', 'electronicPrescriptionOrder', 'pink')
fieldset5.init()

// const fieldset6 = new FieldsetImitate('.form-send', 'Recepty papierowe', 'paperPrescriptionOrder', 'pink')
// fieldset6.init()

// const fieldset7 = new FieldsetImitate('.form-send', 'Pozostałe leki', 'paperPrescriptionOrder', 'pink')
// fieldset7.init()



// const input0a= new Input('.dataOfPrescription', 'Imię i nazwisko/Nick')
// input0a.init()

// const input0b= new Input('.dataOfPrescription', 'email')
// input0b.init()

const input1 = new Input('.electronicPrescriptionForm', 'PIN', 'PIN recepty')
input1.init()

const labelError1 = new LabelError('.electronicPrescriptionForm' )
labelError1.init()


const input2= new Input('.electronicPrescriptionForm', 'PESEL', 'PESEL recepty')
input2.init()

const labelError2 = new LabelError('.electronicPrescriptionForm' )
labelError2.init()

// const input3= new Input('.nonPrescription', 'nazwa leku')
// input3.init()

// const input4= new Input('.nonPrescription', 'dawka')
// input4.init()

// const input5= new Input('.nonPrescription', 'ilość')
// input5.init()

// const inputFile1 = new InputFile('.paperPrescription', 0)
// inputFile1.init()

const button1 = new Button('.electronicPrescriptionForm', 'Dodaj kolejną receptę elektroniczną', 'submit')
button1.init()
const electronicPrescriptionButtonAdd = new electronicPrescriptionSend(electronicPrescriptionButton)
electronicPrescriptionButtonAdd.send()

// const button2 = new Button('paperPrescription', 'Dodaj kolejną receptę papierową')
// button2.init()

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
   

