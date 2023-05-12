export class Button{

    constructor( selector, label ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.label = label
     
    }

    init() {
        this.render()
    }

    render() {
        // this.container.innerText = ''
        const buttonCont = document.createElement('div')
        buttonCont.classList.add('flex', 'column')
        const button = document.createElement('button') 
        button.classList.add('button')
        // button.setAttribute('style', 'background:yellow')
        button.innerText = this.label
      
        // inputFile.setAttribute('id', )
    
        this.container.appendChild(buttonCont)
        buttonCont.appendChild(button)

    }

}

export default Button