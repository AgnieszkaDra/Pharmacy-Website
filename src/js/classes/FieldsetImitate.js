

export class FieldsetImitate{

    constructor( selector, textH2= '', classs = '', color = '') {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.textH2 = textH2
        this.classs = classs
        this.color = color
        
     
    }

    init() {
        this.render()
    }

  

    render() {
        // this.container.innerText = ''
      
        const fieldsetImitate = document.createElement('section')
        fieldsetImitate.classList.add('fieldset')
        fieldsetImitate.classList.add('flex')
        fieldsetImitate.classList.add('column')
        fieldsetImitate.classList.add(this.classs)

        const h2 = document.createElement('h2')
        h2.innerText = this.textH2
      
        
        fieldsetImitate.classList.add('fieldset')
        
       
        fieldsetImitate.style.background = this.color
        

        fieldsetImitate.appendChild(h2)
     
        // inputFile.setAttribute('id', )
     
  
       this.container.appendChild(fieldsetImitate)

    }

}

export default FieldsetImitate