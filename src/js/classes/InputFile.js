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

    change(ev,canvasshow, context) {
        console.log('change')
        var file = ev.target.files[0];
  this.handleFile(file, canvasshow, context);
  ev.target.value = null
  console.log(canvasshow)
    }

    changeId() {
        return this.id = this.id + 1
    }

    handleFile(file, canvasshow, context){
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

    render() {
        // alert('inputFilerender')
        // console.log('render')
      
        // const id = this.changeId()
        // const inputCont = document.createElement('div') 
        // inputCont.classList.add('inputCont')
        // inputCont.setAttribute('style', 'padding:10px')
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
            console.log(closeName)
        })   
      
        this.container.appendChild(button)

       

      
  inputFile.addEventListener('change', (ev) => {
const parent = inputFile.parentElement
console.log(parent)

const parentclass = parent.getAttribute("name")
console.log(parentclass)
const canvases = document.querySelector('canvas')
console.log(canvases)
let canvasshow = document.querySelector(`[name='${parentclass}']`)
//let canvasshow = canvases.querySelector(`[name='${parentclass}']`)
    console.log(canvasshow)

// let canvasshow = canvases.forEach(function(el, parentclass){
//     const ex = el.querySelector(`[name='${parentclass}']`)
//     console.log(ex)
// })



let context = canvasshow.getContext('2d');

            this.change(ev, canvasshow, context)
          } )

    }

}

export default InputFile