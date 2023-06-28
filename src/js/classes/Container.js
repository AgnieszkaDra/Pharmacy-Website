export class Container{

    constructor( selector, classs='', classs2 = '') {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.classs = classs
        this.classs2 = classs2
        
        
    }

    init() {
        this.render()
    }

    render() {
       
        const divContainer = document.createElement('div')
        divContainer.classList.add(this.classs)
        this.container.appendChild(divContainer)

    }

}

export default Container