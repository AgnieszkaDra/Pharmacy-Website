import { showNonPrescriptionValue } from "../showInputValue/showInputValue"
const mql = window.matchMedia("(max-width: 768px)")
const tablet = window.matchMedia("(min-width: 769px")


class nonPrescriptionSend {
    
    constructor() {
        this.containerForm = document.querySelector('.nonPrescriptionForm')
        this.inputDrugName = document.querySelector('#drugName')
        this.inputDrugDose = document.querySelector('#drugDose')
        this.inputDrugAmount = document.querySelector('#drugAmount')
        this.nonPrescriptionForm = document.querySelector('.nonPrescriptionForm')
        this.nonPrescriptionFieldset = document.querySelector('.nonPrescriptionFieldset')
        this.nonPrescriptionButton = document.querySelector('.nonPrescriptionFormButton')
        this.nonPrescriptionOrder = document.querySelector('.nonPrescriptionOrder')
        this.nonPrescriptionInputs = document.querySelector('.nonInputsContainer')
        this.showNonPrescriptionValue = showNonPrescriptionValue
        this.nonPrescriptionForm.fields = [
            {
                name: 'drugName',
                label: 'nazwa',
                
            },
            {
                name: 'drugDose',
                label: 'dawka',
            },
            {
                name: 'drugAmount',
                label: 'ilość',
            }
        ]
   }

    init() {

     
         
        this.nonPrescriptionForm.addEventListener('submit', e => {
          
            e.preventDefault() 
            const container = document.querySelector('.nonPrescriptionOrder')

            const nonPrescriptionForm = document.querySelector('.nonPrescriptionForm'); 


            this.nonPrescriptionForm.fields.forEach(function(field){
          
                const {name, label} = field;
                const value = nonPrescriptionForm.elements[name].value;
               
                const valParent = nonPrescriptionForm.elements[name]
               }
              
            )

            if(mql.matches) {
                this.showNonPrescriptionValue(this.inputDrugName, this.inputDrugDose,  this.inputDrugAmount, this.nonPrescriptionInputs) 
            }
            if(tablet.matches) {
               this.showNonPrescriptionValue(this.inputDrugName, this.inputDrugDose,  this.inputDrugAmount, this.nonPrescriptionOrder) 
            }
    }
        )
       
            
    }

}
export default nonPrescriptionSend







