import Section from "../UI/Section"
import Form from "../UI/Form"
import Input from "../UI/Input"
import LabelError from "./LabelError"
import Button from "../UI/Button"
import FieldsetImitate from "../UI/FieldsetImitate"

export class ElectronicPrescription{

    constructor( selector) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
       
      
    }

    init() {
        
        this.render()
    }


   
    render() {
     
//         const electronicPrescription = new Section('.form', 'Leki na receptę elektroniczną', 'section-electronicPrescription')
// electronicPrescription.init()
const electronicPrescriptionForm = new Form('.section-electronicPrescription', 'form-electronicPrescription')
electronicPrescriptionForm.init()
const pinInput = new Input('.form-electronicPrescription', 'PIN', 'PIN recepty')
pinInput.init()
// const pinSpanOkName = new SpanOk('.PIN', toUnicode(0x2713))
// pinSpanOkName.init()
// const pinSpanWrong = new SpanWrong('.PIN', toUnicode(10060))
// pinSpanWrong.init()
const pinLabelError = new LabelError('.PIN' )
pinLabelError.init()
const peselInput = new Input('.form-electronicPrescription', 'PESEL', 'PESEL recepty')
peselInput.init()
// const peselSpanOkName = new SpanOk('.PESEL', toUnicode(0x2713))
// pinSpanOkName.init()
// const peselSpanWrong = new SpanWrong('.PESEL', toUnicode(10060))
// pinSpanWrong.init()
const peselLabelError = new LabelError('.PESEL' )
peselLabelError.init()
const electronicprescriptionButton = new Button('.form-electronicPrescription', 'Dodaj kolejną receptę elektroniczną', 'submit')
electronicprescriptionButton.init()

// const electronicprescriptionOrder = new FieldsetImitate('.order', 'Recepta elektroniczna', 'order__electronicPrescription', 'order', '')
// electronicprescriptionOrder.init()
// const electronicPrescriptionButtonAdd = new electronicPrescriptionSend()
// electronicPrescriptionButtonAdd.send()
    
    }

}

export default ElectronicPrescription