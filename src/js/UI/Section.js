

export class Section {

    constructor( selector, title='', className='') {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.title = title
        this.className = className
      
    }

    init() {
        this.render()
    }

    render() {
       
        const section = document.createElement('section')
        section.classList.add(this.className)
        section.classList.add('section')
        const title = document.createElement('div')
        title.classList.add('section__title')
        title.innerText = this.title
        section.appendChild(title)
        this.container.appendChild(section)
       
    }

}

export default Section