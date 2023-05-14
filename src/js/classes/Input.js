

export class Input{

    constructor( selector, id='', label='' ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.id =id
        this.name = id
        this.label = label

        
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
 
        label.innerText = this.label
      
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', this.id)
        input.setAttribute('name', this.id)
        // label.setAttribute('for', this.name)
        
        
        this.container.appendChild(inputContainer)
       inputContainer.appendChild(label)
        inputContainer.appendChild(input)

    }

}

export default Input