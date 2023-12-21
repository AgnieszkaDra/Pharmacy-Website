





export const setError = (element, message) => {
  
        const inputControl = element.parentElement
       
        const inputInInputControl = inputControl.querySelector('input')
        
        const errorDisplay = inputControl.querySelector('.label__error')
    
        // inputInInputControl.classList.remove('success')
        // inputInInputControl.classList.add('error')
        errorDisplay.innerText = message
    
        // const span = inputControl.querySelector('spanwrong')
        // span.removeAttribute('class')
        // span.classList.remove('.span')
        // span.classList.add('error')
        // element.classList.add('error')
        // span.classList.remove('success')
        // element.classList.remove('success')
        
    }
    
    
    
    export const setSuccess = element => {
    
        element.style.border = 'none'
        const inputControl = element.parentElement.parentElement
      
        const span = element.nextElementSibling
        span.removeAttribute('class')
        span.classList.remove('.span')
        const errorDisplay = inputControl.querySelector('.label__error')
       
        span.classList.add('success')
        element.classList.add('success')
        span.classList.remove('error')
        element.classList.remove('error')
    
    }
    
    export const setInputSuccess = element => {
        
        element.classList.remove('error')
         element.classList.add('success')
        const inputControl = element.parentElement
        
        const spanOk = element.parentElement.querySelector('.spanok')
        spanOk.classList.add('success')

        const labelErrors = inputControl.querySelectorAll('.label__error')
       
        labelErrors.forEach(function(el){
             el.innerText = ''
        })
       
    }
    
    export let numberCont = 0
    export const classContCreate = () => numberCont = numberCont + 1
       
    export let numberCanvas = 0
    export const classCanvasCreate = () => numberCanvas = numberCanvas + 1
    
    export let numberInput = 0
    export const classInputCreate = () => numberInput = numberInput + 1
    
    
    export const toUnicode = code => {
        return String.fromCodePoint(code)
    }
        