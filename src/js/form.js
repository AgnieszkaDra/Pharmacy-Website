import Order from "./classes/order.js"
import electronicPrescription from "./classes/electronicPrescription.js";
import paperPrescription from "./classes/paperPrescription.js";
import InputFile from "./classes/InputFile.js";
import Button from "./classes/Button.js";

document.addEventListener('DOMContentLoaded', init);

const sendOrderButton = document.querySelector('.send')
const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
const paperPrescriptionButton = document.querySelector('.paperPrescription.button')
console.dir(paperPrescriptionButton)
const paperPrescriptionContainer = document.querySelector('.paperPrescription')



function init() {

    const orderButtonSend = new Order(sendOrderButton)
    const electronicPrescriptionButtonAdd = new electronicPrescription(electronicPrescriptionButton)
  orderButtonSend.send()
    electronicPrescriptionButtonAdd.send()

} 

const newInput = new InputFile('.paperPrescriptionContainer')
newInput.init()

const newButton = new Button('.paperPrescriptionContainer')
newButton.init()
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
   


