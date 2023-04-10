


export const setError = (element, message) => {
alert('set error')
console.log(element)
    const inputControl = element.parentElement.parentElement
    const errorDisplay = inputControl.querySelector('.label__error')
    
    element.classList.add('error')
    inputControl.classList.remove('success')
    errorDisplay.innerText = message
    
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


  