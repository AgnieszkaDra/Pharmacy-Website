import InputFileContainer from "./InputFileContainer";
import InputFile from "./InputFile";
import Canvas from "./Canvas";

class paperPrescriptionAdd {

    constructor(pictureCanvas) {

        
        this.paperPrescriptionForm = document.querySelector('.paperPrescriptionForm')
        this.buttonPaper = document.querySelector('.paperPrescriptionFormbutton')
        this.uploadedFile = document.getElementById('uploaded-file');
        this.textareaCanvas = document.querySelector(pictureCanvas)
      
    }
    
    addNew() {

        this.paperPrescriptionForm.addEventListener('submit', e => {
            alert('addNew')
           
             e.preventDefault();
           
                let object = new InputFileContainer('.paperInputsContainer');
                 object.init()
                 const cont = document.querySelectorAll('.inputCont')
console.log(cont)

var array = [...cont];

const a = array.forEach(function(el) {

  const name = el.getAttribute("name")
 return console.log(name)
  
 
})

console.log(a)


                 const nameobject = document.querySelectorAll("[name]")
                 console.log(nameobject)
             
                let ind = new InputFile('.inputCont2')
                ind.init()

                let can = new Canvas('.paperPrescriptionOrder')
                can.init()

                // this.paperPrescriptionForm.appendChild(object)
                // this.paperPrescriptionForm.appendChild(ind)

        })
        
    }

}

export default paperPrescriptionAdd





