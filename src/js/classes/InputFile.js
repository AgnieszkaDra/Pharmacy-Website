export class InputFile{

    constructor( selector ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
     
    }

    init() {
        this.render()
    }

    render() {
        this.container.innerText = ''

        const inputCont = document.createElement('div') 
        const inputFile = document.createElement('input')
        inputFile.setAttribute('type', 'file')
        // inputFile.setAttribute('id', )
     
        inputCont.appendChild(inputFile)    
       this.container.appendChild(inputCont)

    }

}

export default InputFile