
import { numberCanvas } from "../functions/functions"
import { classCanvasCreate } from "../functions/functions"

export class Canvas{

    constructor( selector ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.classs = classCanvasCreate()
        this.counter = 1;
    }

    init() {
        this.render()
    }

    render() {
        // const canvas = document.createElement('canvas')
        // canvas.setAttribute('id', 'our-canvas')
        // canvas.classList.add('in' + this.classs)
        // canvas.classList.add('canvassize')
        // canvas.setAttribute("name", 'both' + this.classs) 
        
        // this.container.appendChild(canvas)
        this.counter++
        const canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'number' + this.counter)
        this.container.appendChild(canvas)

    }

}

export default Canvas