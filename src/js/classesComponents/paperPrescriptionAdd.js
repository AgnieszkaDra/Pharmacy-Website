import InputFileContainer from "./InputFileContainer";
import InputFile from "../UI/InputFile";
import Canvas from "../classes/Canvas";


const mql = window.matchMedia("(max-width: 768px)")
const tablet = window.matchMedia("(min-width: 769px")

class paperPrescriptionAdd {

    constructor(selector, pictureCanvas) {

        this.container = selector
        this.paperPrescriptionForm = document.querySelector('.form-paperPrescription')
        this.buttonPaper = document.querySelector('.paperPrescriptionFormbutton')
        this.uploadedFile = document.getElementById('uploaded-file');
        this.textareaCanvas = document.querySelector(pictureCanvas)
      
    }


    go() {
        
        return this.returnPromise()
        .then(this.addNew())
        .then(this.getClass())
     

    }



    returnPromise() {

       return new Promise((resolve, reject) => {

        })

    }

    returnPromise() {

       return new Promise((resolve, reject) => {

        })

    }

    showFile(e) {
        console.log(e)
        let ind = new InputFile(`.${e}`)
        ind.init()
         
    }

   

    
    addNew() {

        this.paperPrescriptionForm.addEventListener('submit', e => {
            console.log('addNew')
           
             e.preventDefault();  
        let object = new InputFileContainer('.form-paperPrescription');
        object.init()

        const last = document.querySelector('.inputCont')
        const lastChild = last.lastChild
        console.log(lastChild)
        const name = lastChild.getAttribute("name")
        console.log(name)

        const cont = lastChild.querySelector(`.${name}`)
        console.log(cont)

        const both = document.querySelectorAll(`div[name='${name}']`)
        console.log(both)

        let ind = new InputFile(`div[name='${name}']`)
        ind.init()

        let can = new Canvas('.order__paperPrescription')
        can.render()
    })
        
    }

}

export default paperPrescriptionAdd





