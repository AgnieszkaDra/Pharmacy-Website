import InputFile from "./InputFile";

class paperPrescriptionAdd {

    constructor(elem) {

        this.elem = elem
        this.paperPrescriptionForm = document.querySelector('.paperPrescriptionForm')
        this.buttonPaper = document.querySelector('.paperPrescriptionFormbutton')
        this.uploadedFile = document.getElementById('uploaded-file');
      
    }
    
    addNew() {

        this.paperPrescriptionForm.addEventListener('submit', e => {
           
             e.preventDefault();
                let object = new InputFile('.paperInputsContainer');
                object.init()

        })
        
    }

}

export default paperPrescriptionAdd





