

export class Form{

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
        // this.container.innerText = ''
      
        const form = document.createElement('form')
       form.classList.add(this.classs)
   

       
     
  
       this.container.appendChild(form)

    }

}

export default Form