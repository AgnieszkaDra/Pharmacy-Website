export class InputFile{

    constructor( selector, id ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.id = id
     
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
        inputCont.setAttribute('style', 'padding:10px')
        const inputFile = document.createElement('input')
        inputFile.setAttribute('type', 'file')
        inputFile.setAttribute('id', id)
        inputFile.classList.add('file')
     
        inputCont.appendChild(inputFile)    
       this.container.appendChild(inputCont)

    }

}

export default InputFile