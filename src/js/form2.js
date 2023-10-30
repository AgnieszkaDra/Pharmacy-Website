import './style/style.css'

import Form from "./classesComponents/Form";
import Section from "./classesComponents/Section";
import Input from './classesComponents/Input';
import SpanOk from './classesComponents/SpanOk';
import SpanWrong from './classesComponents/SpanWrong';
import LabelError from './classesComponents/LabelError';
import Button from './classesComponents/Button';
import electronicPrescriptionSend from './classesComponents/electronicPrescriptionSend'

import { setSuccess, toUnicode } from "./functions/functions.js";



const form = new Form('.main', 'form')
form.init()
const userNameInfo = new Section('.form', 'Name and Surname', 'section-username')
userNameInfo.init()
const nameInput= new Input('.section-username', 'name', 'Imię i nazwisko')
nameInput.init()
const emailInput= new Input('.section-username','email',  'email')
emailInput.init()

const electronicPrescription = new Section('.form', 'Leki na receptę elektroniczną', 'section-electronicPrescription')
electronicPrescription.init()
const electronicprescriptionForm = new Form('.section-electronicPrescription', 'electronicPrescriptionForm')
electronicprescriptionForm.init()
const pinInput = new Input('.electronicPrescriptionForm', 'PIN', 'PIN recepty')
pinInput.init()
const pinSpanOkName = new SpanOk('.PIN', toUnicode(0x2713))
pinSpanOkName.init()
const pinSpanWrong = new SpanWrong('.PIN', toUnicode(10060))
pinSpanWrong.init()
const pinLabelError = new LabelError('.PIN' )
pinLabelError.init()
const peselInput = new Input('.electronicPrescriptionForm', 'PESEL', 'PESEL recepty')
peselInput.init()
const electronicprescriptionButton = new Button('.electronicPrescriptionForm', 'Dodaj kolejną receptę elektroniczną', 'submit')
electronicprescriptionButton.init()
const electronicPrescriptionButtonAdd = new electronicPrescriptionSend()
electronicPrescriptionButtonAdd.send()



const buttonSend = new Button('.form', 'Zamawiam', 'submit')
buttonSend.init()


