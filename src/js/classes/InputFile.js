import { numberInput} from "../functions/functions"
import { classInputCreate } from "../functions/functions"

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
        console.log('init')
        this.render()
    }

    change(ev,canvasshow) {
        console.log('change')
        var file = ev.target.files[0];
  this.handleFile(file, canvasshow);
  ev.target.value = null
  console.log(canvasshow)
    }

    changeId() {
        return this.id = this.id + 1
    }

    handleFile(file, canvasshow){
        console.log('handlefile')
        var ImageType = /image.*/;
        
    console.log(file)
        if(file.type.match(ImageType)){
   
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

    render() {
        console.log('render')
      
        const id = this.changeId()
        const inputCont = document.createElement('div') 
        inputCont.classList.add('inputCont')
        inputCont.setAttribute('style', 'padding:10px')
        const inputFile = document.createElement('input')
        inputFile.setAttribute('type', 'file')
        inputFile.setAttribute('id', 'uploaded-file')
        inputFile.classList.add('file')
        inputFile.classList.add('in' + this.classs)
     
        inputCont.appendChild(inputFile) 

        

      
        const button = document.createElement('button')
        button.innerText = 'X'
        button.addEventListener('click', function (el) {
            el.target.closest('.inputCont').remove()
        })   
        this.container.appendChild(inputCont)
        inputCont.appendChild(button)

          let canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'our-canvas')
        canvas.classList.add( 'cl' + this.classs)
        canvas.classList.add('canvassize')
        
        inputCont.appendChild(canvas)

      
  inputFile.addEventListener('change', (ev) => {
const parent = inputFile.parentElement
console.log(parent)
let canvasshow = parent.querySelector('canvas')
console.log(canvasshow)
            this.change(ev, canvasshow)
          } )

    }

}

export default InputFile