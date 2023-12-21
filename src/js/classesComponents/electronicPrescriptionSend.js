
import { setError } from "../functions/functions";
import {showElectronicPrescriptionValue} from '../showInputValue/showInputValue';



class electronicPrescriptionSend {

    constructor() {
     
        this.pin = document.getElementById('PIN');
        this.pesel = document.getElementById('PESEL')
        this.electronicPrescriptionButton = document.querySelector('.form-electronicPrescription button')
        this.electronicPrescriptionForm = document.querySelector('.form-electronicPrescription')
        this.showElectronicPrescriptionValue = showElectronicPrescriptionValue
        this.textareaPinPesel = document.querySelector('.order__electronicPrescription')
        this.setError = {setError}
     
        this.electronicPrescriptionForm.fields = [
            {
                name: 'PIN',
                label: 'PIN recepty',
                required: false,
                pattern: "[0-9]{4}",
            },
            {
                name: 'PESEL',
                label: 'PESEL',
                required: false,
                pattern: "[0-9]{4}[0-3]{1}[0-9}{1}[0-9]{5}",
            }
        ]
       
    }

    clear() {
        
        const label__errors = document.querySelectorAll('.label__error')
        label__errors.forEach(function(el) {

            el.innerText = ''

        return el

            })
        

    }
        
        
        go() {
        
            return this.returnPromise()
            .then(this.clear())
            .then(this.send())
            .then(this.clear())

        }
    
        returnPromise() {

           return new Promise((resolve, reject) => {

            })

        }
    
        send()  {
 
            this.electronicPrescriptionForm.addEventListener('submit', e => {

            e.preventDefault();

            const errors = [];
            const electronicPrescriptionForm = document.querySelector('.form-electronicPrescription'); 
            this.electronicPrescriptionForm.fields.forEach(function(field){
                const {name, label, required = false, pattern = null} = field;
                const value = electronicPrescriptionForm.elements[name].value;
                const valParent = electronicPrescriptionForm.elements[name]
            
                if(pattern, valParent){
                    const reg = new RegExp(pattern);
                    if(!reg.test(value)){
                        alert(`Field ${label} is invalid`);
                        setError(valParent, `${label} jest niepoprawny`)
                        errors.push('error');
                    }
                }
                }
            )
         
            if(errors.length === 0){
               
                this.showElectronicPrescriptionValue(this.pin, this.pesel, this.textareaPinPesel)
            } 
            
        });
    }
}

 export default electronicPrescriptionSend