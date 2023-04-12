

class paperPrescription {
    constructor( {value = ''} ) {
        this.value = value;
        this.canvas = document.querySelector('.canvas-show')
        this.inputsFilesContainer = document.querySelector('.inputs-files-container')
        this.labelInput = document.querySelector('.label__input.file')
        this.canvas = document.getElementById('our-canvas'),
    context = this.canvas.getContext('2d');
   
    this.uploadedFile = document.querySelectorAll('#uploaded-file');
    this.paperPrescriptionOrder = document.querySelector('.paperPrescriptionOrder')
   
        
    }

    initImageLoader(el){
        alert('init')
        const el2 = el
        // this.uploadedFile.forEach(el2 => el2.addEventListener('change',handleManualUploadedFiles));
        // function handleManualUploadedFiles(ev){
        //     alert('change')
        var file = el.target.files[0];
        //     this.handleFile(file);
    
        // }   
        this.handleFile(file)
    }

    handleManualUploadedFiles(ev){
                alert('changehandle')
                console.log(ev.target.files)
                var file = ev.target.files[0];
                this.handleFile(file);
        } 

    handleFile(file){
        alert('handle')
        var ImageType = /image.*/;
    
        if(file.type.match(ImageType)){
    alert('match')
            var reader = new FileReader();      
            const id1 = document.querySelector('.one')
            const contextid1 = id1.getContext('2d')
            reader.onloadend = function(event){
                var tempImageStore = new Image();
                tempImageStore.onload = function(ev){
                    
                    canvas.height = ev.target.height;
                    canvas.width = ev.target.width; 
                    id1.height = ev.target.height;
                    id1.width = ev.target.width;         
                    context.drawImage(ev.target,0,0);
                    contextid1.drawImage(ev.target,0,0);
                    canvas.classList.add('canvas-show')
                    const inputValueContainer = document.createElement('div')
                    const paper = document.querySelector('.paperPrescriptionOrder')
        const inputValueContainerNode = paper.appendChild(inputValueContainer)
        inputValueContainer.classList.add('inputValueContainer')
        const inputContainer = document.createElement('div')
     
        const button = document.createElement('button')
        button.innerText = 'X'
        button.classList.add('button-paper')
        inputValueContainerNode.appendChild(button)
    
        button.addEventListener('click', function (el) {
            el.target.closest('.paperPrescriptionOrder').remove()
        })
                   
                }   
                tempImageStore.src = event.target.result;
            }
            reader.readAsDataURL(file);
        }   
    } 

    add(){
       
        const inputValueContainer = document.createElement('div')

    const inputValueContainerNode = this.labelInput.cloneNode(true)
    console.log(inputValueContainerNode)
    
    this.inputsFilesContainer.appendChild(inputValueContainerNode)
    inputValueContainer.classList.add('inputValueContainer')
    const inputContainer = document.createElement('div')
    inputValueContainerNode.appendChild(inputContainer)
 const canvasNode = this.canvas.cloneNode(true)
 canvasNode.removeAttribute('id')
 this.paperPrescriptionOrder.appendChild(canvasNode)
 canvasNode.setAttribute('class', 'one')
            
        
    }
}

export default paperPrescription


var canvas = document.getElementById('our-canvas'),
    context = canvas.getContext('2d');
//     let uploadedFiles = document.querySelectorAll('#uploaded-file');
// uploadedFiles.forEach(el => el.addEventListener('change', function(el){
//     alert('njknfjsk')
//     const lek = new paperPrescription(el)
//     lek.handleManualUploadedFiles()
   
// }))
//     console.log(uploadedFiles) 
// // let uploadedFile = document.getElementById('uploaded-file');
// window.addEventListener('DOMContentLoaded',initImageLoader) ;

// function initImageLoader(){
//     uploadedFile.forEach(el => el.addEventListener('change',handleManualUploadedFiles));
//     function handleManualUploadedFiles(ev){
//         alert('change')
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