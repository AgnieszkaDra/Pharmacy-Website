
import InputFile from "../UI/InputFile";
import Canvas from "../classes/Canvas";

const mql = window.matchMedia("(max-width: 768px)")
const tablet = window.matchMedia("(min-width: 769px")

export class paperPrescriptionChangeFile {

    constructor(pictureCanvas) {

        // this.container = selector
      
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
  
          
       

          
          
          let context = canvases.getContext('2d');
      

          function handleFile(file, canvasshow, context){
            console.log('handlefile')
            var ImageType = /image.*/;
            
  
            if(file.type.match(ImageType)){
                alert('match')
          
                var reader = new FileReader();      
          
                reader.onloadend = function(event){
                    var tempImageStore = new Image();
                    tempImageStore.onload = function(ev){
          
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
       
            var file = ev.target.files[0];
          handleFile(file, canvasshow, context);
          ev.target.value = null
    
          }
          
                    change(ev, canvasshow, context)
                  } )
          
          })
            
  }
        
    }



export default paperPrescriptionChangeFile





