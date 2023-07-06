
import { setError } from "../functions/functions";
import { showElectronicPrescriptionValue } from "../showInputValue/showInputValue";


class electronicPrescriptionSend {

    constructor() {
     
        this.pin = document.getElementById('PIN');
        this.pesel = document.getElementById('PESEL')
        this.electronicPrescriptionButton = document.querySelector('.electronicPrescriptionFormButton')
        this.electronicPrescriptionForm = document.querySelector('.electronicPrescriptionForm')
        this.showElectronicPrescriptionValue = showElectronicPrescriptionValue
        this.textareaPinPesel = document.querySelector('.electronicPrescriptionOrder')
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
        console.log('clear')
        const label__errors = document.querySelectorAll('.label__error')
       label__errors.forEach(function(el){
            el.innerText = ''
            return el})
        }
        
        
        go() {
        
         
            return this.getListOfFiles()
            .then(this.clear())
            .then(this.send())
            .then(this.clear())
        }
    
        getListOfFiles() {
            // use this.path to get list of files and return in a Promise way (resolve, reject)
            return new Promise((resolve, reject) => {
            });
          }
    
    send(){
 
        this.electronicPrescriptionForm.addEventListener('submit', e => {
            e.preventDefault();
            const errors = [];
        
            const electronicPrescriptionForm = document.querySelector('.electronicPrescriptionForm'); 
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
                this.pin.value=' '
                this.pesel.value = ' ' 
                const errorDisplayPin = document.querySelector('.PIN')
                errorDisplayPin.classList.remove('error')
                const errorDisplayPinClosest = errorDisplayPin.querySelector('.label__error')
    
                errorDisplayPinClosest.innerText = ''
                const errorDisplayPesel = document.querySelector('.PESEL')
                errorDisplayPesel.classList.remove('error')
                const errorDisplayPeselClosest = errorDisplayPesel.querySelector('.label__error')
                errorDisplayPeselClosest.innerText = ''

                errorDisplayPesel.parentElement.closest('.label__error').innerHTML = ''

               
              
                    // setSuccess(valParent, `${label} dane prawidłowe`)
                    // e.target.reset();
               


            } 
            
        });
    }

    both() {
        return this.clear().then(this.send()).then(this.clear())
    }

    click() {
       this.paperPrescriptionValue(this.paperPrescriptionButton, this.ourCanvas)
    }
   
}

 export default electronicPrescriptionSend