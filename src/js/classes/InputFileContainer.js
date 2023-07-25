import { classContCreate } from "../functions/functions"
import Canvas from "./Canvas"

export class InputFileContainer{

    constructor( selector) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.classs = classContCreate()
        this.canvas = this.classs.parentElemet
      
    }

    init() {
        
        this.render()
    }


   
    render() {
     
        const inputCont = document.createElement('div') 
        inputCont.classList.add('inputCont')
        inputCont.setAttribute("name", 'both' + this.classs) 
        inputCont.classList.add('in' + this.classs)
        inputCont.setAttribute('style', 'padding:10px')

        this.container.appendChild(inputCont)
    
    }

}

export default InputFileContainer