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

        const button = document.createElement('button') 
      
        // inputFile.setAttribute('id', )
     
      
       this.container.appendChild(button)

    }

}

export default InputFile