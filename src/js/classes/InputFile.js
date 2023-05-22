import { numberInput} from "../functions/functions"
import { classInputCreate } from "../functions/functions"

export class InputFile{

    constructor( selector) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.classs = classInputCreate()
        // this.id = id
     
    }

    init() {
        this.render()
    }

    changeId() {
        return this.id = this.id + 1
    }

    render() {
        // this.container.innerText = ''
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
    }

}

export default InputFile