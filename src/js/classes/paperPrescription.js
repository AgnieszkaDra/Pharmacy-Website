console.log('działa')

import InputFile from "./InputFile"
import Button from "./Button"

export class paperPrescription {
    constructor( selector ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
       
        this.idn=0
        this.idm = 0
      
        this.paperPrescriptionOrder = document.querySelector('.paperPrescriptionOrder')
        this.paperPrescriptionButton = document.querySelector('.paperPrescription.button')
        this.inputsFilesContainer = document.querySelector('.inputs-files-container')
        this.labelInput = document.querySelector('.label__input.file')
        // this.canvas = findId(this.paperPrescriptionOrder)
        this.canvas = this.paperPrescriptionOrder.querySelector('.image-container')
        this.context = this.canvas.getContext('2d');
        this.uploadedFile = document.querySelectorAll('#uploaded-file');
        // this.uploadedFile = this.findId(this.inputsFilesContainer)
        this.paperPrescriptionContainer = document.querySelector('.paperPrescriptionContainer')
        this.uploadInput = this.paperPrescriptionContainer.querySelector('.inputs-files-container')
       

       
   }

   init() {
    this.render()
}

render() {
    this.container.innerText = ''

    const inputFile = new InputFile()
    const button = new Button()

    this.container.appendChild(inputFile)
    this.container.appendChild(button)
    
}

}
    

export default paperPrescription

// var canvas = document.querySelector('.image-container'),
//     context = canvas.getContext('2d');
//     let uploadedFile = document.querySelector('#uploaded-file');
    
// //     let uploadedFile = document.querySelector('#uploaded-file');
// // uploadedFile.addEventListener('change', function(el){
// //     alert('njknfjsk')

// //     const lek = el
// //     lek.handleManualUploadedFiles()
   
// // })

// // let uploadedFile = document.getElementById('uploaded-file');
// // window.addEventListener('DOMContentLoaded',initImageLoader) ;


//     uploadedFile.addEventListener('change',function(el){
//         var file = el.target.files[0];
//         console.log(file)
//         handleFile(file);
//     });
    

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
//                 canvas.classList.add('canvas-show')
//                 const inputValueContainer = document.createElement('div')
//                 const paper = document.querySelector('.paperPrescriptionOrder')
//     const inputValueContainerNode = paper.appendChild(inputValueContainer)
//     inputValueContainer.classList.add('inputValueContainer')
//     const inputContainer = document.createElement('div')
 
//     const button = document.createElement('button')
//     button.innerText = 'X'
//     button.classList.add('button-paper')
//     inputValueContainerNode.appendChild(button)

//     button.addEventListener('click', function (el) {
//         el.target.closest('.paperPrescriptionOrder').remove()
//     })
               
//             }   
//             tempImageStore.src = event.target.result;
//         }
//         reader.readAsDataURL(file);
//     }  
 
// } 