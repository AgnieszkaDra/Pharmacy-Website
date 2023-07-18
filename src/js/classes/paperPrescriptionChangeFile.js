import InputFileContainer from "./InputFileContainer";
import InputFile from "./InputFile";
import Canvas from "./Canvas";

const mql = window.matchMedia("(max-width: 768px)")
const tablet = window.matchMedia("(min-width: 769px")

class paperPrescriptionChangeFile {

    constructor(selector, pictureCanvas) {

        this.container = selector
        // this.containerinp = this.container.querySelector('.inputCont')
        this.files = document.querySelectorAll('#uploaded-file')
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

    
    changeNew() {

        this.files.forEach((el) => {
            el.addEventListener('change', (ev) => {
            console.log(el)
            alert('change')
           
          const parent = el.parentElement
          console.log('parent',parent)
          
          
          const parentclass = parent.getAttribute("name")
          console.log('parentclass', parentclass)
          
          const canvases = document.querySelector('canvas')
          console.log('canvases', canvases)
          let canvasshow = document.querySelector(`[name='${parentclass}']`)
          //let canvasshow = canvases.querySelector(`[name='${parentclass}']`)
            console.log('canvasshow', canvasshow)
          
          // let canvasshow = canvases.forEach(function(el, parentclass){
          //     const ex = el.querySelector(`[name='${parentclass}']`)
          //     console.log(ex)
          // })
          
          
          
          // let context = canvasshow.getContext('2d');
          // console.log(context)
          
          
          let context = canvases.getContext('2d');
          console.log(context)
          
          // if(mql.matches, canvases) {
          //   let context = canvases.getContext('2d');
          // return context
          // }
          
          function handleFile(file, canvasshow, context){
            console.log('handlefile')
            var ImageType = /image.*/;
            
          console.log(file)
            if(file.type.match(ImageType)){
                alert('match')
          
                var reader = new FileReader();      
          
                reader.onloadend = function(event){
                    var tempImageStore = new Image();
                    tempImageStore.onload = function(ev){
                 console.log(ev)
                        canvasshow.height = ev.target.height;
                        canvasshow.width = ev.target.width;         
                        context.drawImage(ev.target,0,0);
                       
                    }   
                    tempImageStore.src = event.target.result;
                }
                reader.readAsDataURL(file);
              
            }   
          }
          
          function change(ev,canvasshow, context) {
            console.log('change')
            var file = ev.target.files[0];
          handleFile(file, canvasshow, context);
          ev.target.value = null
          console.log(canvasshow)
          }
          
                    change(ev, canvasshow, context)
                  } )
          
          })
            
          
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

        }
        
    }



export default paperPrescriptionChangeFile





