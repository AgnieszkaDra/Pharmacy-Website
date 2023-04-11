
const pin = document.getElementById('PIN');
const pesel = document.getElementById('pesel')
const paperPrescription = document.getElementById('paperPrescription')
const drugName = document.getElementById('drugName')
const drugDose = document.getElementById('drugDose')
const drugAmount = document.getElementById('drugAmount')

const usernameButton = document.querySelector('.addUserName.button')

const useremailButton = document.querySelector('.addEmail.button')
const electronicPrescriptionButton = document.querySelector('.electronicPrescription.button')
const paperPrescriptionButton = document.querySelector('.paperPrescription.button')
const nonPrescriptionButton = document.querySelector('.nonPrescription.button')


const textareaUserName = document.querySelector('.textarea.username')
const textareaEmail = document.querySelector('.textarea.email')
const textareaPinPesel = document.querySelector('.orderDrugsForm.fieldset.electronicPrescription')
const textareapaperPrescription = document.querySelector('.orderDrugsForm.fieldset.paperPrescription')

const textareaNonprescription = document.querySelector('.orderDrugsForm.fieldset.otherDrugs')
const textareaDrugDose = document.querySelector('.textarea.drugDose')
const textareaDrugAmount = document.querySelector('.textarea.drugAmount')

export const showElectronicPrescriptionValue = function(input1, input2, container) {
    if (!(input1.value.trim() === '') && !(input2)) {
            
        const value1 = input1.value.trim()
        
        const inputValueContainer = document.createElement('div')
        const inputValueContainerNode = container.appendChild(inputValueContainer)
        inputValueContainer.classList.add('inputValueContainer')
        const inputContainer = document.createElement('div')
        inputValueContainerNode.appendChild(inputContainer)
        inputContainer.innerText = n + " " + value1
        const button = document.createElement('button')
        button.innerText = 'X'
        inputValueContainerNode.appendChild(button)

        button.addEventListener('click', function (el) {
            el.target.closest('.inputValueContainer').remove()
        })
        
      
    }  
    if (!(input1.value.trim() === '') && !(input2.value.trim() === '')) {
        
    const value1 = input1.value.trim()
    const value2 = input2.value.trim()
    const inputValueContainer = document.createElement('div')
    const inputValueContainerNode = container.appendChild(inputValueContainer)
    inputValueContainer.classList.add('inputValueContainer')
    const inputContainer = document.createElement('div')
    inputValueContainerNode.appendChild(inputContainer)
    inputContainer.innerText = value1 + value2
    const button = document.createElement('button')
    button.innerText = 'X'
    inputValueContainerNode.appendChild(button)

    button.addEventListener('click', function (el) {
        el.target.closest('.inputValueContainer').remove()
    })
}
}

export const paperPrescriptionValue = function(elementClicked, container) {
    const inputValueContainer = document.createElement('div')
    const inputValueContainerNode = container.appendChild(inputValueContainer)
    inputValueContainer.classList.add('inputValueContainer')
    const inputContainer = document.createElement('div')
    inputValueContainerNode.appendChild(inputContainer)
    inputContainer.innerText = value1 + value2
    const button = document.createElement('button')
    button.innerText = 'X'
    inputValueContainerNode.appendChild(button)

    button.addEventListener('click', function (el) {
        el.target.closest('.inputValueContainer').remove()
    })
}


export const prescriptionValue = function (elementClicked, input1, input2, container) {
    let n = 0
    alert('prescription value')
    elementClicked.addEventListener('click', function () {
        n++
        if (!(input1.value.trim() === '') && !(input2)) {
            
            const value1 = input1.value.trim()
            
            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = container.appendChild(inputValueContainer)
            inputValueContainer.classList.add('inputValueContainer')
            const inputContainer = document.createElement('div')
            inputValueContainerNode.appendChild(inputContainer)
            inputContainer.innerText = n + " " + value1
            const button = document.createElement('button')
            button.innerText = 'X'
            inputValueContainerNode.appendChild(button)

            button.addEventListener('click', function (el) {
                el.target.closest('.inputValueContainer').remove()
            })
            
          
        }  
        if (!(input1.value.trim() === '') && !(input2.value.trim() === '')) {
            
        const value1 = input1.value.trim()
        const value2 = input2.value.trim()
        const inputValueContainer = document.createElement('div')
        const inputValueContainerNode = container.appendChild(inputValueContainer)
        inputValueContainer.classList.add('inputValueContainer')
        const inputContainer = document.createElement('div')
        inputValueContainerNode.appendChild(inputContainer)
        inputContainer.innerText = value1 + value2
        const button = document.createElement('button')
        button.innerText = 'X'
        inputValueContainerNode.appendChild(button)

        button.addEventListener('click', function (el) {
            el.target.closest('.inputValueContainer').remove()
        })
    }
    })



    
}

// prescriptionValue(electronicPrescriptionButton, pin, pesel, textareaPinPesel)
// prescriptionValue(paperPrescriptionButton, paperPrescription, null, textareapaperPrescription)


export const drugsNameValue = function (elementClicked, input1, input2, input3, container) {

    let n = 0

    elementClicked.addEventListener('click', function () {
        n++
        const value1 = input1.value
        const value2 = input2.value
        const value3 = input3.value
       
        if (!(input1.value.trim() === '') && (value2 === '') && (value3 === '')) {

            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = container.appendChild(inputValueContainer)
            inputValueContainer.classList.add('inputValueContainer')
            const inputContainer = document.createElement('div')
            inputValueContainerNode.appendChild(inputContainer)

            inputContainer.innerText = n + "" + value1

            const button = document.createElement('button')
            button.innerText = 'X'
            inputValueContainerNode.appendChild(button)

            button.addEventListener('click', function (el) {
                el.target.closest('.inputValueContainer').remove()

            })
        }


    })



}

drugsNameValue(nonPrescriptionButton, drugName, drugDose, drugAmount, textareaNonprescription)

export const drugsNameDoseValue = function (elementClicked, input1, input2, input3, container) {

    let n = 0
    elementClicked.addEventListener('click', function () {

        n++

        const value1 = input1.value
        const value2 = input2.value
        const value3 = input3.value
        if (!(input1.value.trim() === '') && !(input2.value.trim() === '') && (value3 === '')) {

           
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


    })

}

drugsNameDoseValue(nonPrescriptionButton, drugName, drugDose, drugAmount, textareaNonprescription)

export const drugsNameDoseAmountValue = function (elementClicked, input1, input2, input3, container) {

    let n = 0
    elementClicked.addEventListener('click', function () {
        n++
            const value1 = input1.value
            const value2 = input2.value
            const value3 = input3.value
        if (!(input1.value.trim() === '') && (!(input2.value.trim() === '') || (value2 === '')) && !(input3.value.trim() === '')) {
          
            const inputValueContainer = document.createElement('div')
            const inputValueContainerNode = container.appendChild(inputValueContainer)
            inputValueContainer.classList.add('inputValueContainer')
            const inputContainer = document.createElement('div')
            inputValueContainerNode.appendChild(inputContainer)

            inputContainer.innerText = n + " " + value1 + " " + value2 + " " +  value3

            const button = document.createElement('button')
            button.innerText = 'X'
            inputValueContainerNode.appendChild(button)

            button.addEventListener('click', function (el) {
                el.target.closest('.inputValueContainer').remove()

            })
        }


    })

}

drugsNameDoseAmountValue(nonPrescriptionButton, drugName, drugDose, drugAmount, textareaNonprescription)










