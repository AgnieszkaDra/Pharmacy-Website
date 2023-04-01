import { setError } from "../functions/functions";
import { validatePIN } from "../functions/functions";
class electronicPrescription {

    constructor( {value = ''} ) {
        this.value = value;
        this.pin = document.getElementById('PIN');
        this.pesel = document.getElementById('pesel')
        this.electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
        this.electronicPrescriptionForm = document.querySelector('.form-prescription')
       
        this.electronicPrescriptionForm.fields = [
            {
                name: 'PIN',
                label: '4-cyfrowy PIN recepty',
                required: false,
                pattern: "",
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
            alert('submit')
            e.preventDefault();
            const errors = [];
            const electronicPrescriptionForm = document.querySelector('.form-prescription'); 
            this.electronicPrescriptionForm.fields.forEach(function(field){
                const {name, label, required = false, pattern = null} = field;
                const value = electronicPrescriptionForm.elements[name].value;
                const valParent = electronicPrescriptionForm.elements[name]
                // if(name="PIN"){
                //     if(value.length === 0){
                //         alert(`${label} field is required`);
                //         errors.push('error');
                //     }
                // }
                if(pattern, valParent){
                    alert('pattern')
                    const reg = new RegExp(pattern);
                    if(!reg.test(value)){
                        alert(`Field ${label} is invalid`);
                        setError(valParent, `${label} jest niepoprawny`)
                        errors.push('error');
                    }else if(valParent){

                    }
                }
            })
            if(errors.length === 0){
               alert(`Dziękujemy! Twoje zamówienie zostało poprawnie wysłane!`);
               e.target.reset();
            } 
            if(this.pin){
                alert(this.pin.value)
               validatePIN(this.pin.value)
            }
        });
    }
   

        
        
      
 
}

 export default electronicPrescription