

import './style/reset/reset.css'
import './style/style.css'

import Form from './UI/Form.js';
import Section from "./UI/Section";
import Input from './UI/Input';
import SpanOk from './classesComponents/SpanOk';
import SpanWrong from './classesComponents/SpanWrong';
import LabelError from './classesComponents/LabelError';
import Button from './UI/Button';
import electronicPrescriptionSend from './classesComponents/electronicPrescriptionSend'
import InputFile from './UI/InputFile.js';
import InputFileContainer from './classesComponents/InputFileContainer';
import paperPrescriptionAdd from './classesComponents/paperPrescriptionAdd';
import paperPrescriptionChangeFile from './classesComponents/paperPrescriptionChangeFile.js';
import FieldsetImitate from './UI/FieldsetImitate.js';
import Canvas from './classesComponents/Canvas.js';
import Textarea from './classesComponents/Textarea';

import { setSuccess, toUnicode } from "./functions/functions.js";
import ElectronicPrescription from './classesComponents/electronicPrescription.js';

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

const orderFieldset = new Section('.form', 'Twoje Zamówienie', 'order', '', '#fe2e16')

orderFieldset.init()

const electronicContent = new ElectronicPrescription('.section-electronicPrescription')
electronicContent.init()
// const electronicPrescriptionForm = new Form('.section-electronicPrescription', 'form-electronicPrescription')
// electronicPrescriptionForm.init()
// const pinInput = new Input('.form-electronicPrescription', 'PIN', 'PIN recepty')
// pinInput.init()
// // const pinSpanOkName = new SpanOk('.PIN', toUnicode(0x2713))
// // pinSpanOkName.init()
// // const pinSpanWrong = new SpanWrong('.PIN', toUnicode(10060))
// // pinSpanWrong.init()
// const pinLabelError = new LabelError('.PIN' )
// pinLabelError.init()
// const peselInput = new Input('.form-electronicPrescription', 'PESEL', 'PESEL recepty')
// peselInput.init()
// // const peselSpanOkName = new SpanOk('.PESEL', toUnicode(0x2713))
// // pinSpanOkName.init()
// // const peselSpanWrong = new SpanWrong('.PESEL', toUnicode(10060))
// // pinSpanWrong.init()
// const peselLabelError = new LabelError('.PESEL' )
// peselLabelError.init()
// const electronicprescriptionButton = new Button('.form-electronicPrescription', 'Dodaj kolejną receptę elektroniczną', 'submit')
// electronicprescriptionButton.init()


const paperPrescription = new Section('.form', 'Leki na receptę papierową', 'section-paperPrescription')
paperPrescription.init()
const paperPrescriptionForm = new Form('.section-paperPrescription', 'form-paperPrescription')
paperPrescriptionForm.init()
const paperprescriptionOrder = new FieldsetImitate('.order', 'Recepta papierowa', 'order__paperPrescription', 'order', '')
paperprescriptionOrder.init()
const paperPrescriptionInputContainer = new InputFileContainer('.form-paperPrescription')
paperPrescriptionInputContainer.init()
const paperPrescriptionCanvasContainer = new Canvas('.order__paperPrescription')
paperPrescriptionCanvasContainer.render()

        
const paperprescriptionInput= new InputFile('.inputCont')
paperprescriptionInput.init()

const paperprescriptionButton = new Button('.form-paperPrescription', 'Dodaj kolejną receptę papierową', '')
paperprescriptionButton.init()
const paperPrescriptionButtonAdd = new paperPrescriptionAdd('.form-paperPrescription')
paperPrescriptionButtonAdd.addNew()

const paperFiles = new paperPrescriptionChangeFile('.section-paperPrescription')
paperFiles.changeNew()

const otherprescriptionFieldset = new Section('.form', 'Pozostałe leki/suplementy diety/wyroby medyczne', 'section-nonPrescription')
otherprescriptionFieldset.init()
const nonprescriptionForm = new Form('.section-nonPrescription', 'form-nonPrescription')
nonprescriptionForm.init()
const drugNameInput= new Input('.form-nonPrescription', 'drugName','nazwa leku')
drugNameInput.init()
const drugDoseInput= new Input('.form-nonPrescription', 'drugDose',  'dawka')
drugDoseInput.init()
const drugAmountInput= new Input('.form-nonPrescription', 'drugAmount' , 'ilość')
drugAmountInput.init()
const button3 = new Button('.form-nonPrescription', 'Dodaj kolejny lek', 'submit')
button3.init()

// const orderFieldset = new Section('.form', 'Twoje Zamówienie', 'order', '', '#fe2e16')

// orderFieldset.init()

const electronicprescriptionOrder = new FieldsetImitate('.order', 'Recepta elektroniczna', 'order__electronicPrescription', 'order', '')
electronicprescriptionOrder.init()
const electronicPrescriptionButtonAdd = new electronicPrescriptionSend()
electronicPrescriptionButtonAdd.send()

// const paperprescriptionOrder = new FieldsetImitate('.order', 'Recepta papierowa', 'order__paperPrescription', 'order', '')
// paperprescriptionOrder.init()


// const paperPrescriptionButtonAdd = new electronicPrescriptionSend()
// paperPrescriptionButtonAdd.send()





const buttonSend = new Button('.form', 'Zamawiam', 'submit')
buttonSend.init()


