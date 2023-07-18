import InputFileContainer from "./InputFileContainer";
import InputFile from "./InputFile";
import Canvas from "./Canvas";

const mql = window.matchMedia("(max-width: 768px)")
const tablet = window.matchMedia("(min-width: 769px")

class paperPrescriptionAdd {

    constructor(selector, pictureCanvas) {

        this.container = selector
        // this.containerinp = this.container.querySelector('.inputCont')
        this.paperPrescriptionForm = document.querySelector('.paperPrescriptionForm')
        this.buttonPaper = document.querySelector('.paperPrescriptionFormbutton')
        this.uploadedFile = document.getElementById('uploaded-file');
        this.textareaCanvas = document.querySelector(pictureCanvas)
      
    }


    go() {
        
        return this.returnPromise()
        .then(this.addNew())
        .then(this.getClass())
        // .then(this.clear())

    }

    // getClass() {
    //     console.log('getClass')

    //     const last = document.querySelector('.paperInputsContainer')
    //     const lastChild = last.lastChild
    //     console.log(lastChild)
    //     const name = lastChild.getAttribute("name")
    //     console.log(name)

    //     const cont = lastChild.querySelector(`.${name}`)
    //     console.log(cont)

    //     // this.showFile(name)


    // }

    // go() {
        
    //     return this.returnPromise()
    //     .then(this.addNew())
    //     .then(this.addInpCont())
    //     .then(this.getClass())
        

    // }

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

    // addInpCont() {
    //     console.log('addInputCont')
       

    // }

    
    addNew() {

        this.paperPrescriptionForm.addEventListener('submit', e => {
            console.log('addNew')
           
             e.preventDefault();  
 let object = new InputFileContainer('.paperInputsContainer');
        object.init()

        const last = document.querySelector('.paperInputsContainer')
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

    //     if(mql.matches){
    //           let canvas = new Canvas('.paperInputsContainer')
    //     canvas.init()
    //     }

    //     if(tablet.matches){
    //         let canvas = new Canvas('.paperPrescriptionOrder')
    //   canvas.init()
    //   }
      

            //   let object = new InputFileContainer('.paperInputsContainer');
            //     object.init()

            //     const na = this.getClass()
                
            //     this.showFile(na)
         
//                  const cont = document.querySelectorAll('.inputCont')
// console.log(cont)

// var array = [...cont];

// const a = array.forEach(function(el) {

//   const name = el.getAttribute("name")
//  return console.log(name)
  
 
// })

// console.log(a)


//                  const nameobject = document.querySelectorAll("[name]")
//                  console.log(nameobject)
             
               

//                 let can = new Canvas('.paperPrescriptionOrder')
//                 can.init()

//                 // this.paperPrescriptionForm.appendChild(object)
                // this.paperPrescriptionForm.appendChild(ind)

        })
        
    }

}

export default paperPrescriptionAdd





