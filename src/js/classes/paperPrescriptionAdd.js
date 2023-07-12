import InputFileContainer from "./InputFileContainer";
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
            alert('addNew')
           
             e.preventDefault();
             InputFileContainer.prototype.click_handler = function(el) {
                el.preventDefault()
                el.init()
              }
                let object = new InputFileContainer('.inputCont');
                
             
                let ind = new InputFile('.inputCont')
                ind.init()

                // this.paperPrescriptionForm.appendChild(object)
                // this.paperPrescriptionForm.appendChild(ind)

        })
        
    }

}

export default paperPrescriptionAdd





