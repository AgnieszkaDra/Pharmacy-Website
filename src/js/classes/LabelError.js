export class LabelError{

    constructor( selector, label='') {

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
        const labelCont = document.createElement('div')
        labelCont.classList.add('label__error')
        labelCont.innerText = this.label
      
    
        this.container.appendChild(labelCont)
     

    }

}

export default LabelError