export class SpanOk{

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
        const spanCont = document.createElement('span')
        spanCont.classList.add('spanok')
        spanCont.innerText = this.label
        this.container.appendChild(spanCont)
    }

}

export default SpanOk