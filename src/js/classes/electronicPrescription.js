import { setError } from "../functions/functions";

import { showElectronicPrescriptionValue } from "../showInputValue/showInputValue";

import { paperPrescriptionValue } from "../showInputValue/showInputValue";

class electronicPrescription {

    constructor( {value = ''} ) {
        this.value = value;
        this.pin = document.getElementById('PIN');
        this.pesel = document.getElementById('pesel')
        this.electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
        this.electronicPrescriptionForm = document.querySelector('.electronicPrescription')
        this.showElectronicPrescriptionValue = showElectronicPrescriptionValue
        this.textareaPinPesel = document.querySelector('.electronicPrescriptionOrder')
        this.setError = {setError}
        this.paperPrescriptionButton = document.querySelector('paperPrescription.button')
        this.ourCanvas = document.querySelector('.our-canvas')
        // this.paperPrescriptionValue = paperPrescriptionValue
    

        this.electronicPrescriptionForm.fields = [
            {
                name: 'PIN',
                label: 'Podaj 4-cyfrowy PIN recepty',
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
      console.log(this.electronicPrescriptionForm)
        this.electronicPrescriptionForm.addEventListener('submit', e => {
            alert('submit')
            e.preventDefault();
            const errors = [];
            const electronicPrescriptionForm = document.querySelector('.electronicPrescription'); 
            this.electronicPrescriptionForm.fields.forEach(function(field){
                const {name, label, required = false, pattern = null} = field;
                const value = electronicPrescriptionForm.elements[name].value;
                console.log(value)
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

    click() {
        alert('click')
        this.paperPrescriptionValue(this.paperPrescriptionButton, this.ourCanvas)
    }
   

        
        
      
 
}

 export default electronicPrescription


