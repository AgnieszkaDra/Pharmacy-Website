import { classInputCreate } from "../functions/functions"

const mql = window.matchMedia("(max-width: 768px)")
const tablet = window.matchMedia("(min-width: 769px")

export class InputFile{

    constructor( selector) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.classs = classInputCreate()
        this.canvas = this.classs.parentElemet
        
    }

    init() {
     
        this.render()

    }

    render() {
       
        const inputFile = document.createElement('input')
        inputFile.setAttribute('type', 'file')
        inputFile.setAttribute('id', 'uploaded-file')
        inputFile.setAttribute("name", 'both' + this.classs) 
        inputFile.classList.add('file')
        inputFile.classList.add('in' + this.classs)
     
        this.container.appendChild(inputFile) 
    
        const button = document.createElement('button')
        button.innerText = 'X'
        button.addEventListener('click', function (el) {
            el.target.closest('.inputCont').remove()
            const close = el.target.closest('.inputCont')
            const closeName = close.getAttribute("name")
            const canvasClose = document.querySelector(`canvas[name='${closeName}']`)
            canvasClose.remove()
            
        })   
      
        this.container.appendChild(button)

            const canvas = document.createElement('canvas')
            canvas.setAttribute('id', 'our-canvas')
            canvas.classList.add('in' + this.classs)
            canvas.classList.add('canvassize')
            canvas.setAttribute("name", 'both' + this.classs) 

        if(mql.matches) {
            
            this.container.appendChild(canvas)

        }

        if(tablet.matches) {
       
            const container = document.querySelector('.paperPrescriptionOrder')
            container.appendChild(canvas)

        }

        function handleFile(file, canvases, context) {

            console.log('handlefile')
            var ImageType = /image.*/;
            
            if(file.type.match(ImageType)){
               
                var reader = new FileReader();      
          
                reader.onloadend = function(event){
                var tempImageStore = new Image();
                tempImageStore.onload = function(ev){
               
                canvases.height = ev.target.height;
                canvases.width = ev.target.width;         
                context.drawImage(ev.target,0,0);
                       
                }  

                    tempImageStore.src = event.target.result;

                }

                reader.readAsDataURL(file);
              
            }

          }
          
          function change(ev,canvases,context) {
            
            var file = ev.target.files[0];
            handleFile(file, canvases, context);
            ev.target.value = null
           
          }

        inputFile.addEventListener('change', (ev) => {
           
            const inputfile = inputFile
            const parent = inputfile.parentElement
            const parentclass = parent.getAttribute("name")

           if(mql.matches) {

            const canvasesmql = parent.querySelector('canvas')
            let context = canvasesmql.getContext('2d');

            change(ev, canvasesmql, context)
            
            }

           if(tablet.matches) {

            const canvasestablet = document.querySelector(`canvas[name='${parentclass}']`)
            let context = canvasestablet.getContext('2d');

            change(ev, canvasestablet, context)

           }
        })

    }

}

export default InputFile