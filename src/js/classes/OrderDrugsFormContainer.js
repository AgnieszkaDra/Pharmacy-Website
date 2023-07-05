export class orderDrugsFormContainer{

    constructor(selector) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        
      
    }

    init() {
        this.render()
    }

    render() {
     
        const orderDrugsFormCont = document.createElement('div')
        orderDrugsFormCont.classList.add('.orderDrugsForm-container')
        this.container.appendChild(orderDrugsFormCont)
       
       

    }

}

export default orderDrugsFormContainer