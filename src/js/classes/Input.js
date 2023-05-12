

export class Input{

    constructor( selector, name= '', ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.name = name
        
    }

    init() {
        this.render()
    }

    createInput() {
        const input = document.createElement('input')
        input.innerText = 'input'
        
        this.container.appendChild(input)
       this.render()
    }

  

    render() {
        // this.container.innerText = ''

        const inputContainer = document.createElement('div')
        inputContainer.setAttribute('style', 'padding:10px')
        inputContainer.classList.add('flex')
        inputContainer.classList.add('column')
        const label = document.createElement('label')
        label.setAttribute('style', 'align-self:flex-start')
 
        label.innerText = this.name
      
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', this.name)
        input.setAttribute('name', this.name)
        // label.setAttribute('for', this.name)
        
        
        this.container.appendChild(inputContainer)
       inputContainer.appendChild(label)
        inputContainer.appendChild(input)

    }

}

export default Input