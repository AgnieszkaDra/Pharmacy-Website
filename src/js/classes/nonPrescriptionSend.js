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
               

                
            
                // if(name === 'drugName'){
                //   alert('value')
                //   const value1 = this.inputDrugName.value
                //   const inputValueContainer = document.createElement('div')
                //         const inputValueContainerNode = container.appendChild(inputValueContainer)
                //         inputValueContainer.classList.add('inputValueContainer')
                //         const inputContainer = document.createElement('div')
                //         inputValueContainerNode.appendChild(inputContainer)
                //         inputContainer.innerText = n + "  " + value1
                //         const button = document.createElement('button')
                //         button.innerText = 'X'
                //         inputValueContainerNode.appendChild(button)
            
                //         button.addEventListener('click', function (el) {
                //             el.target.closest('.inputValueContainer').remove()
                //         })
                        
                // }
                }
              
            )

            if(mql.matches) {
                this.showNonPrescriptionValue(this.inputDrugName, this.inputDrugDose,  this.inputDrugAmount, this.nonPrescriptionInputs) 
            }
            if(tablet.matches) {
               this.showNonPrescriptionValue(this.inputDrugName, this.inputDrugDose,  this.inputDrugAmount, this.nonPrescriptionOrder) 
            }
            
//          if (!(this.inputDrugName.value === '') && !(this.inputDrugDose)) {
//             alert('init drugname ')
//                 const value1 = this.inputDrugName.value
//                 const inputValueContainer = document.createElement('div')
//                         const inputValueContainerNode = container.appendChild(inputValueContainer)
//                         inputValueContainer.classList.add('inputValueContainer')
//                         const inputContainer = document.createElement('div')
//                         inputValueContainerNode.appendChild(inputContainer)
//                         inputContainer.innerText = n + "  " + value1
//                         const button = document.createElement('button')
//                         button.innerText = 'X'
//                         inputValueContainerNode.appendChild(button)
            
//                         button.addEventListener('click', function (el) {
//                             el.target.closest('.inputValueContainer').remove()
//                         })
                        
                      
//                     }  
//    if (!(this.inputDrugName.value === '') && !(this.inputDrugDose.value === '')) {
                        
//                     const value1 = this.inputDrugName.value
//                     const value2 = this.inputDrugDose.value
//                     console.log(value1,value2)
//                     const inputValueContainer = document.createElement('div')
//                     const inputValueContainerNode = container.appendChild(inputValueContainer)
//                     inputValueContainer.classList.add('inputValueContainer')
//                     const inputContainer = document.createElement('div')
//                     inputValueContainerNode.appendChild(inputContainer)
//                     inputContainer.innerText = value1 + "  " +  value2
//                     const button = document.createElement('button')
//                     button.innerText = 'X'
//                     inputValueContainerNode.appendChild(button)
            
//                     button.addEventListener('click', function (el) {
//                         el.target.closest('.inputValueContainer').remove()
//                     })
//                 }

//         if (!(this.inputDrugName.value === '') && !(this.inputDrugDosevalue === '') && (this.inputDrugAmount === '')) {
//                         const inputValueContainer = document.createElement('div')
//                         const inputValueContainerNode = container.appendChild(inputValueContainer)
//                         inputValueContainer.classList.add('inputValueContainer')
//                         const inputContainer = document.createElement('div')
//                         inputValueContainerNode.appendChild(inputContainer)
            
//                         inputContainer.innerText = n + "" + value1 + " " +  value2
            
//                         const button = document.createElement('button')
//                         button.innerText = 'X'
//                         inputValueContainerNode.appendChild(button)
            
//                         button.addEventListener('click', function (el) {
//                             el.target.closest('.inputValueContainer').remove()
            
//                         })
//                     }
                }
        )
       
            
    }

}
export default nonPrescriptionSend



// export const prescriptionValue = function (elementClicked, input1, input2, container) {
//     let n = 0
//     elementClicked.addEventListener('click', function () {
//         n++
//         if (!(input1.value.trim() === '') && !(input2)) {
            
//             const value1 = input1.value.trim()
            
//             const inputValueContainer = document.createElement('div')
//             const inputValueContainerNode = container.appendChild(inputValueContainer)
//             inputValueContainer.classList.add('inputValueContainer')
//             const inputContainer = document.createElement('div')
//             inputValueContainerNode.appendChild(inputContainer)
//             inputContainer.innerText = n + " " + value1
//             const button = document.createElement('button')
//             button.innerText = 'X'
//             inputValueContainerNode.appendChild(button)

//             button.addEventListener('click', function (el) {
//                 el.target.closest('.inputValueContainer').remove()
//             })
            
          
//         }  
//         if (!(input1.value.trim() === '') && !(input2.value.trim() === '')) {
            
//         const value1 = input1.value.trim()
//         const value2 = input2.value.trim()
//         const inputValueContainer = document.createElement('div')
//         const inputValueContainerNode = container.appendChild(inputValueContainer)
//         inputValueContainer.classList.add('inputValueContainer')
//         const inputContainer = document.createElement('div')
//         inputValueContainerNode.appendChild(inputContainer)
//         inputContainer.innerText = value1 + value2
//         const button = document.createElement('button')
//         button.innerText = 'X'
//         inputValueContainerNode.appendChild(button)

//         button.addEventListener('click', function (el) {
//             el.target.closest('.inputValueContainer').remove()
//         })
//     }
//     })



    
// }
