

export class Form{

    constructor( selector, className='') {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.className = className
      
    }

    init() {
        this.render()
    }

    render() {
       
        const form = document.createElement('form')
        form.classList.add(this.className)
        this.container.appendChild(form)

    }

}

export default Form