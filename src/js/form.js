import Order from "./classes/order.js"
import electronicPrescription from "./classes/electronicPrescription.js";
import paperPrescription from "./classes/paperPrescription.js";

document.addEventListener('DOMContentLoaded', init);

const sendOrderButton = document.querySelector('.send')
const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
const paperPrescriptionButton = document.querySelector('.paperPrescription.button')
console.dir(paperPrescriptionButton)

function init() {

    const orderButtonSend = new Order(sendOrderButton)
    const electronicPrescriptionButtonAdd = new electronicPrescription(electronicPrescriptionButton)
    
    const paperPrescriptionButton = document.querySelector('.paperPrescription.button')
    orderButtonSend.send()
    electronicPrescriptionButtonAdd.send()
  
 
 let uploadedFiles = document.querySelector('#uploaded-file');
        uploadedFiles.addEventListener('change', function(el){
           const load = new paperPrescription(el)
           var file = el.target.files[0];
            load.handleFile(file);
          load.initImageLoader(el)
           
        })
   
    
     function initImageLoader(el){
      
        this.uploadedFile.forEach(el => el.addEventListener('change',handleManualUploadedFiles));
        function handleManualUploadedFiles(ev){
            alert('change')
           
           
    
        }   
    }
  paperPrescriptionButton.addEventListener('click', function(){
        const paperPrescriptionButtonAdd = new paperPrescription(paperPrescriptionButton)
        paperPrescriptionButtonAdd.add()
       
    })

  
   

    // const userName = new Input(usernameData)
    // userName.checkLength()

    // const userEmail = new Input(emailData)
    // userEmail.checkLength()
   
} 
