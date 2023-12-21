export class Textarea{

    constructor(selector, label, class2) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.label = label
   
        this.class = class2
      
    }

    init() {
        alert('init text')
        this.render()
    }

    render() {
     
        // const buttonCont = document.createElement('div')
        // buttonCont.classList.add('flex', 'column')
       
        const textarea3 = document.createElement('div') 
        console.log(textarea3)
        textarea3.classList.add('textarea')
        textarea3.classList.add(this.class2)
        // button.classList.add(this.selector.slice(1)+'-button')
     
        textarea3.innerText = this.label
      
        // this.container.appendChild(buttonCont)
        this.container.appendChild(textarea3)
        // buttonCont.appendChild(button)

    }

}

export default Textarea