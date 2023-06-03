


export const setError = (element, message) => {
alert('set error')
console.log(element)
    const inputControl = element.parentElement
    console.log(inputControl)
    
    const errorDisplay = inputControl.querySelector('.label__error')
    inputControl.classList.add('error')
    inputControl.classList.remove('success')
    errorDisplay.innerText = message

    const span = inputControl.querySelector('spanwrong')
    span.removeAttribute('class')
    span.classList.remove('.span')
    span.classList.add('error')
    element.classList.add('error')
    span.classList.remove('success')
    element.classList.remove('success')
    
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

   
export let numberCanvas = 0
export const classCanvasCreate = () => numberCanvas = numberCanvas + 1

export let numberInput = 0
export const classInputCreate = () => numberInput = numberInput + 1


export const toUnicode = code => {
    return String.fromCodePoint(code)
}
    