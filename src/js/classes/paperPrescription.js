

class paperPrescription {
    constructor( {value = ''} ) {
        this.value = value;
        this.canvas = document.querySelector('.canvas-show')
        this.inputsFilesContainer = document.querySelector('.inputs-files-container')
    }

    add(){
       
        const inputValueContainer = document.createElement('div')
    const inputValueContainerNode = this.inputsFilesContainer.appendChild(inputValueContainer)
    inputValueContainer.classList.add('inputValueContainer')
    const inputContainer = document.createElement('div')
    inputValueContainerNode.appendChild(inputContainer)
    inputContainer.innerText = value1 + value2
            
        
    }
    
}

export default paperPrescription


var canvas = document.getElementById('our-canvas'),
    context = canvas.getContext('2d');
let uploadedFile = document.getElementById('uploaded-file');
window.addEventListener('DOMContentLoaded',initImageLoader) ;

function initImageLoader(){
    uploadedFile.addEventListener('change',handleManualUploadedFiles);
    function handleManualUploadedFiles(ev){
        var file = ev.target.files[0];
        handleFile(file);

    }   
}
function handleFile(file){
    var ImageType = /image.*/;

    if(file.type.match(ImageType)){

        var reader = new FileReader();      

        reader.onloadend = function(event){
            var tempImageStore = new Image();
            tempImageStore.onload = function(ev){
                canvas.height = ev.target.height;
                canvas.width = ev.target.width;         
                context.drawImage(ev.target,0,0);
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