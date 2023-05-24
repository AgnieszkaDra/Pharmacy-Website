export class SpanWrong{

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
        const spanCont = document.createElement('span')
        spanCont.classList.add('spanwrong')
    spanCont.innerText = this.label
      
    
        this.container.appendChild(spanCont)
     

    }

}

export default SpanWrong