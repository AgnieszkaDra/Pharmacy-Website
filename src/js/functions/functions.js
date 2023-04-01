


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
    errorDisplay.innerText = ''
    span.classList.add('success')
    element.classList.add('success')
    span.classList.remove('error')
    element.classList.remove('error')

}

export function validatePIN (e) {
   const pin = document.querySelector('.pin').value 
   alert(e.length)
    if(e.length === 4) {
        alert('ok PIN')
      if( /[0-9]/.test(pin))  {
        return true;
      }else {}
    }else {
      alert('not PIN ok')
        }
  }