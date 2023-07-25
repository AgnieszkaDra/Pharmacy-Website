

export class Input{

    constructor( selector, id='', label='' ) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.id =id
        this.name = id
        this.label = label
        this.classs = id

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
        const inputContainer = document.createElement('div')
        
        inputContainer.classList.add('flex')
        inputContainer.classList.add('column')
        inputContainer.classList.add(this.classs)
        inputContainer.setAttribute('style', 'margin-bottom:10px')
        const label = document.createElement('label')
        // label.setAttribute('style', 'width:80%')

 
        label.innerText = this.label
      
        const input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', this.id)
       
        input.setAttribute('name', this.id)
        // input.setAttribute('style', 'width:80%')
      
        this.container.appendChild(inputContainer)
        inputContainer.appendChild(label)
        inputContainer.appendChild(input)

    }

}

export default Input