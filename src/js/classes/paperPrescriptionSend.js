var canvas = document.getElementById('our-canvas')
    // var context = canvas.getContext('2d');
    const buttonPaper = document.querySelector('.paperPrescriptionForm.button')
let uploadedFile = document.getElementById('uploaded-file');

class paperPrescriptionSend {

    constructor(elem) {
        this.elem = elem
      
        this.paperPrescriptionForm = document.querySelector('.paperPrescriptionForm')
        this.buttonPaper = document.querySelector('.paperPrescriptionForm.button')
        this.uploadedFile = document.getElementById('uploaded-file');
        // this.ourCanvas = document.querySelector('.our-canvas')
        // this.context = this.ourCanvas.getContext('2d');
        // this.paperPrescriptionValue = paperPrescriptionValue
    }
    
    send(){
   
        // this.paperPrescriptionForm.addEventListener('submit', e => {
        //     alert('submit')
        //     e.preventDefault();
            var canvas = document.getElementById('our-canvas')
    let context = canvas.getContext('2d');
    const buttonPaper = document.querySelector('.paperPrescriptionForm.button')
let uploadedFile = document.getElementById('uploaded-file');
// buttonPaper.addEventListener('click',initImageLoader) ;
initImageLoader()
function initImageLoader(){
alert('init')
console.dir(uploadedFile)

    uploadedFile.addEventListener('change',handleManualUploadedFiles);
    function handleManualUploadedFiles(ev){
        var file = ev.target.files[0];
        handleFile(file);
        ev.target.value = null

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
                   
                }   
                tempImageStore.src = event.target.result;
            }
            reader.readAsDataURL(file);
          
        }   
    }
    


        }
        // )  
    
    sendNew() {
      console.log(this.elem)
        var canvas = this.elem.querySelector('input')
        console.log(canvas)
        let context = canvas.getContext('2d');
    }
    }

  
   

        
        
      
 
// }

 export default paperPrescriptionSend

// var canvas = document.getElementById('our-canvas'),
//     context = canvas.getContext('2d');
//     const buttonPaper = document.querySelector('.paperPrescriptionForm.button')
// let uploadedFile = document.getElementById('uploaded-file');
// buttonPaper.addEventListener('click',initImageLoader) ;

// function initImageLoader(){
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
