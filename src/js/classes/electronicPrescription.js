import { setError } from "../functions/functions";
import { validatePIN } from "../functions/functions";
import { showElectronicPrescriptionValue } from "../showInputValue/showInputValue";

class electronicPrescription {

    constructor( {value = ''} ) {
        this.value = value;
        this.pin = document.getElementById('PIN');
        this.pesel = document.getElementById('pesel')
        this.electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
        this.electronicPrescriptionForm = document.querySelector('.form-prescription')
        this.showElectronicPrescriptionValue = showElectronicPrescriptionValue
        this.textareaPinPesel = document.querySelector('.electronicPrescriptionOrder')
        this.setError = {setError}
    

        this.electronicPrescriptionForm.fields = [
            {
                name: 'PIN',
                label: '4-cyfrowy PIN recepty',
                required: false,
                pattern: "[0-9]{4}",
            },
            {
                name: 'pesel',
                label: 'PESEL',
                required: false,
                pattern: "[0-9]{4}[0-3]{1}[0-9}{1}[0-9]{5}",
            }
        ]
       
    }
    
    send(){
        this.electronicPrescriptionForm.addEventListener('submit', e => {
            e.preventDefault();
            const errors = [];
            const electronicPrescriptionForm = document.querySelector('.form-prescription'); 
            this.electronicPrescriptionForm.fields.forEach(function(field){
                const {name, label, required = false, pattern = null} = field;
                const value = electronicPrescriptionForm.elements[name].value;
                
                const valParent = electronicPrescriptionForm.elements[name]
                const errorDisplayPin = document.querySelector('.label__error.pin')
                errorDisplayPin.innerText = ''
                const errorDisplayPesel = document.querySelector('.label__error.pesel')
                errorDisplayPesel.innerText = ''
               
                if(pattern, valParent){
                    const reg = new RegExp(pattern);
                    if(!reg.test(value)){
                        alert(`Field ${label} is invalid`);
                        setError(valParent, `${label} jest niepoprawny`)
                        errors.push('error');
                    }
                }
           
            })
         
            if(errors.length === 0){
                this.showElectronicPrescriptionValue(this.pin, this.pesel, this.textareaPinPesel)
                this.pin.value=' '
                this.pesel.value = ' '
            } 
            
        });
    }
   

        
        
      
 
}

 export default electronicPrescription


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
            }   
            tempImageStore.src = event.target.result;
        }
        reader.readAsDataURL(file);
    }   
}