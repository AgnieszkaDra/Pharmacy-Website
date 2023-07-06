export class Button{

    constructor(selector, label, type) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.label = label
        this.type = type
      
    }

    init() {
        this.render()
    }

    render() {
     
        const buttonCont = document.createElement('div')
        buttonCont.classList.add('flex', 'column', 'buttonsend-container')
       
        const button = document.createElement('button') 
        button.classList.add(this.selector.slice(1)+'button')
        button.setAttribute('type', this.type)
        button.setAttribute('style', 'width:80%')
        button.innerText = this.label
      
        this.container.appendChild(buttonCont)
        buttonCont.appendChild(button)

    }

}

export default Button