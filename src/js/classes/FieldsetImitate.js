

export class FieldsetImitate{

    constructor( selector, title = '', classs = '', color = '') {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.title = title
        this.classs = classs
        this.color = color
        
    }

    init() {
        this.render()
    }

    render() {
 
        const fieldsetImitate = document.createElement('section')
        fieldsetImitate.classList.add('fieldset')
        fieldsetImitate.classList.add('flex')
        fieldsetImitate.classList.add('column')
        fieldsetImitate.classList.add(this.classs)

        const fieldsetImitateTitle = document.createElement('div')
        fieldsetImitateTitle.innerText = this.title
        fieldsetImitateTitle.classList.add('fieldset__title')
      
        fieldsetImitate.classList.add('fieldset')
        fieldsetImitate.style.background = this.color
        fieldsetImitate.appendChild(fieldsetImitateTitle)
        this.container.appendChild(fieldsetImitate)

    }

}

export default FieldsetImitate