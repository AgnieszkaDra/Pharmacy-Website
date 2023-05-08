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

   

    // initImageLoader(el){
    //     alert('init')
    //     const el2 = el
    //     // this.uploadedFile.forEach(el2 => el2.addEventListener('change',handleManualUploadedFiles));
    //     // function handleManualUploadedFiles(ev){
    //     //     alert('change')
    //     var file = el.target.files[0];
    //     //     this.handleFile(file);
 
    //     // }   
    //     this.handleFile(file)
    // }

    // handleManualUploadedFiles(ev){
    //             alert('changehandle')
    //             console.log(ev.target.files)
    //             var file = ev.target.files[0];
    //             this.handleFile(file);
    //     } 

    // handleFile(file){
    //     alert('handle')
    //     var ImageType = /image.*/;
    
    //     if(file.type.match(ImageType)){
    // alert('match')
    //         var reader = new FileReader();      
    //         // const id1 = document.querySelector('.one')
    //         // const contextid1 = id1.getContext('2d')
    //         reader.onloadend = function(event){
    //             var tempImageStore = new Image();
    //             tempImageStore.onload = function(ev){
    //                  this.canvasId = document.querySelector(`.${parentId}`);
    //                 this.canvasId.height = ev.target.height;
    //                 this.canvasId.width = ev.target.width; 
    //                 // id1.height = ev.target.height;
    //                 // id1.width = ev.target.width;         
    //                 context.drawImage(ev.target,0,0);
    //                 // contextid1.drawImage(ev.target,0,0);
    //                 this.canvasId.classList.add('canvas-show')
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
    // findId(el) {
    //     const id = el.getAttribute('id')
    //     return id
    // }


    // increment = () => {
 
      
    // }

    // increment2(m){
    
    //     const p = m++;
    //     return p;
    //   }

    //    handleFile(file){
    //     var ImageType = /image.*/;

    //     if(file.type.match(ImageType)){
    
    //         var reader = new FileReader();      
    
    //         reader.onloadend = function(event){
    //             alert('event')
    //             var tempImageStore = new Image();
    //             tempImageStore.onload = function(ev){
    //                 console.log(this.canvas)
    //                 this.canvas.height = ev.target.height;
    //                 this.canvas.width = ev.target.width;         
    //                 this.context.drawImage(ev.target,0,0);
    //                 //this.canvasId = this.canvas
    //                 // this.canvasId.height = ev.target.height;
    //                 // this.canvasId.width = ev.target.width;         
    //                 // context.drawImage(ev.target,0,0);
    //             }   
    //             tempImageStore.src = event.target.result;
    //         }
    //         reader.readAsDataURL(file);
    //     }   
    // }

//     add(){


//                 const inputCont = document.createElement('div') 
//              const inputFile = document.createElement('input')
//         inputFile.setAttribute('type', 'file')
//     inputFile.setAttribute('id', this.increment(this.idn))
//         inputCont.appendChild(inputFile) 
        
       
       
       
//         const inputValueContainer = document.createElement('div')
       
//         const inputValueContainerNode = this.labelInput.cloneNode(true)
//          const labelInpuTInput = this.labelInput.querySelector('input')
//          console.log('wink')
       
//         inputValueContainerNode.setAttribute('id', this.increment())
//         // const parent2Id = inputValueContainerNode.getAttribute('id')
//         // console.log(parent2Id)
//         const input = inputValueContainerNode.querySelector('input')
//         const IdInput = inputValueContainerNode.getAttribute('id')
       
//         inputValueContainerNode.setAttribute('class', 'new')
        
    
   
//     this.inputsFilesContainer.appendChild(inputCont)
//     inputValueContainer.classList.add('inputValueContainer')
//     const inputContainer = document.createElement('div')
//     inputValueContainerNode.appendChild(inputContainer)



  
  
 
//     const button = document.createElement('button')
//     button.innerText = 'X'
//     inputValueContainerNode.appendChild(button)

//     button.addEventListener('click', function (el) {
//         el.target.closest('.label__input.file').remove()

       
//     })

//   const canvasNode = this.canvas.cloneNode(true)
//   const contextNode = canvasNode.getContext('2d');
  
//   const getIdCanvas = canvasNode.getAttribute("id")
 
//   const newNode = canvasNode.setAttribute('id', this.increment2(this.idm))

//   var canvas = document.getElementById('our-canvas')
// //  canvasNode.setAttribute('id', 'one')
// //  this.id++
//  this.paperPrescriptionOrder.appendChild(newNode)
 
          
               
               
//                 if(getIdCanvas === IdInput) {
//                      canvasNode.setAttribute('class', 'nowa')
//                     alert('match')
                   
                    
//                     inputClick.addEventListener('change',function(el){
//                         var file = el.target.files[0];
//                          handleFile2(file)
//                     });
              
//                 }   
            
//                 function handleFile2(file){
//                     var ImageType = /image.*/;
            
//                     if(file.type.match(ImageType)){
                
//                         var reader = new FileReader();      
                
//                         reader.onloadend = function(event){
//                             alert('event')
//                             var tempImageStore = new Image();
//                             tempImageStore.onload = function(ev){
//                                 const canvasShow = canvasNode
//                               const contextShow = contextNode
//                               canvasShow.height = ev.target.height;
//                               canvasShow.width = ev.target.width;         
//                                 contextNode.drawImage(ev.target,0,0);
//                                 //this.canvasId = this.canvas
//                                 // this.canvasId.height = ev.target.height;
//                                 // this.canvasId.width = ev.target.width;         
//                                 // context.drawImage(ev.target,0,0);
//                             }   
//                             tempImageStore.src = event.target.result;
//                         }
//                         reader.readAsDataURL(file);
//                     }   
//                 }
            
          
//             }
        
                //}
                
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