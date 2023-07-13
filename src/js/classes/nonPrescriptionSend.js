
class nonPrescriptionSend {
    
    constructor() {
        this.containerForm = document.querySelector('.nonPrescriptionForm')
        this.inputDrugName = document.querySelector('#drugName')
        this.inputDrugDose = document.querySelector('#drugDose')
        this.inputDrugAmount = document.querySelector('#drugAmount')
        this.nonPrescriptionFieldset = document.querySelector('.nonPrescriptionFieldset')
        this.nonPrescriptionButton = document.querySelector('.nonPrescriptionFormButton')
   }

    init() {
        this.containerForm.addEventListener('submit', function(el){
            alert('init non')
            el.preventDefault() 
            const container = document.querySelector('.nonPrescriptionOrder')
         if (!(this.inputDrugName.value === '') && !(this.inputDrugDose)) {
            alert('init value')
                const value1 = this.inputDrugName.value
                const inputValueContainer = document.createElement('div')
                        const inputValueContainerNode = container.appendChild(inputValueContainer)
                        inputValueContainer.classList.add('inputValueContainer')
                        const inputContainer = document.createElement('div')
                        inputValueContainerNode.appendChild(inputContainer)
                        inputContainer.innerText = n + "  " + value1
                        const button = document.createElement('button')
                        button.innerText = 'X'
                        inputValueContainerNode.appendChild(button)
            
                        button.addEventListener('click', function (el) {
                            el.target.closest('.inputValueContainer').remove()
                        })
                        
                      
                    }  
   if (!(this.inputDrugName.value === '') && !(this.inputDrugDose.value === '')) {
                        
                    const value1 = this.inputDrugName.value
                    const value2 = this.inputDrugDose.value
                    console.log(value1,value2)
                    const inputValueContainer = document.createElement('div')
                    const inputValueContainerNode = container.appendChild(inputValueContainer)
                    inputValueContainer.classList.add('inputValueContainer')
                    const inputContainer = document.createElement('div')
                    inputValueContainerNode.appendChild(inputContainer)
                    inputContainer.innerText = value1 + "  " +  value2
                    const button = document.createElement('button')
                    button.innerText = 'X'
                    inputValueContainerNode.appendChild(button)
            
                    button.addEventListener('click', function (el) {
                        el.target.closest('.inputValueContainer').remove()
                    })
                }

        if (!(this.inputDrugName.value === '') && !(this.inputDrugDosevalue === '') && (this.inputDrugAmount === '')) {
                        const inputValueContainer = document.createElement('div')
                        const inputValueContainerNode = container.appendChild(inputValueContainer)
                        inputValueContainer.classList.add('inputValueContainer')
                        const inputContainer = document.createElement('div')
                        inputValueContainerNode.appendChild(inputContainer)
            
                        inputContainer.innerText = n + "" + value1 + " " +  value2
            
                        const button = document.createElement('button')
                        button.innerText = 'X'
                        inputValueContainerNode.appendChild(button)
            
                        button.addEventListener('click', function (el) {
                            el.target.closest('.inputValueContainer').remove()
            
                        })
                    }
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
