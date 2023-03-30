import { prescriptionValue } from "../showInputValue/showInputValue.js";
import { drugsNameValue } from "../showInputValue/showInputValue.js";
import { drugsNameDoseValue } from "../showInputValue/showInputValue.js";
import { drugsNameDoseAmountValue } from "../showInputValue/showInputValue.js";

export const mql = window.matchMedia("(max-width: 700px)");

export const resizeLayout = function () {
    if (mql.matches) {
        alert('match')

        const formOrder = document.querySelector('.send')
        formOrder.classList.add('resize')
        formOrder.classList.add('w')
        // const prescriptionFieldset = document.querySelector('.prescription')
        // prescriptionFieldset.classList.add('element--hidden-mobile')
        // const nonprescriptionFieldset = document.querySelector('.nonprescription')
        // nonprescriptionFieldset.classList.add('element--hidden-mobile')

    //     const electronicPrescriptionContainer = document.querySelector('.electronicPrescriptionContainer')
    //     const paperPrescriptionContainer = document.querySelector('.paperPrescriptionContainer')
    //     const theOtherContainer = document.querySelector('.theOtherContainer')


    //     const electronicPrescriptionContainerClone = electronicPrescriptionContainer.cloneNode(true)
    //     const paperPrescriptionContainerClone = paperPrescriptionContainer.cloneNode(true)
    //     const theOtherContainerClone = theOtherContainer.cloneNode(true)


    //     const textareaPinPesel = document.querySelector('.orderDrugsForm.fieldset.electronicPrescription')
    //     const textareaPaperPrescription = document.querySelector('.orderDrugsForm.fieldset.paperPrescription')
    //     const textareaTheOtherDrugs = document.querySelector('.orderDrugsForm.fieldset.otherDrugs')


    //     textareaPinPesel.appendChild(electronicPrescriptionContainerClone)
    //     textareaPaperPrescription.appendChild(paperPrescriptionContainerClone)
    //     textareaTheOtherDrugs.appendChild(theOtherContainerClone)

    //     const electronicButtonMobile = electronicPrescriptionContainerClone.querySelector('.electronicPrescription.button')
    //     electronicButtonMobile.classList.add('mobile')
    //     const paperButtonMobile = paperPrescriptionContainerClone.querySelector('.paperPrescription.button')
    //     paperButtonMobile.classList.add('mobile')
    //     const theOtherDrugsButtonMobile = theOtherContainerClone.querySelector('.nonPrescription.button')

    //     theOtherDrugsButtonMobile.classList.add('mobile')

    //     const electronicPinMobile = electronicPrescriptionContainerClone.querySelector('.pin')
    //     electronicPinMobile.classList.add('mobile')
    //     const paperInputMobile = paperPrescriptionContainerClone.querySelector('.paperPrescription')
    //     paperInputMobile.classList.add('mobile')
    //     const theOtherDrugsDrugName = theOtherContainerClone.querySelector('.drugName')

    //     theOtherDrugsDrugName.classList.add('mobile')

    //     const electronicPeselMobile = electronicPrescriptionContainerClone.querySelector('.pesel')
    //     electronicPeselMobile.classList.add('mobile')
    //     const theOtherDrugsAmountName = theOtherContainerClone.querySelector('.drugAmount')

    //     theOtherDrugsAmountName.classList.add('mobile')
    //     const theOtherDrugDoseName = theOtherContainerClone.querySelector('.drugDose')
    //     theOtherDrugDoseName.classList.add('mobile')

    //     prescriptionValue(electronicButtonMobile, electronicPinMobile, electronicPeselMobile, textareaPinPesel)
    //     prescriptionValue(paperButtonMobile, paperInputMobile, null, textareaPaperPrescription)
    //     drugsNameValue(theOtherDrugsButtonMobile, theOtherDrugsDrugName, theOtherDrugDoseName, theOtherDrugsAmountName, textareaTheOtherDrugs)
    //     drugsNameDoseValue(theOtherDrugsButtonMobile, theOtherDrugsDrugName, theOtherDrugDoseName, theOtherDrugsAmountName, textareaTheOtherDrugs)
    //     drugsNameDoseAmountValue(theOtherDrugsButtonMobile, theOtherDrugsDrugName, theOtherDrugDoseName, theOtherDrugsAmountName, textareaTheOtherDrugs)
    
}
}



