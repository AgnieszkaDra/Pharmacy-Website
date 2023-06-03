import { setError } from "../functions/functions";
import { setSuccess } from "../functions/functions";


class Order {

    constructor() {
     
        this.username = document.getElementById('username')
        this.email = document.getElementById('email')
        this.orderForm = document.querySelector('.form-send'); 
        this.sendButton = document.querySelector('.input-submit-container')
        this.orderForm.fields = [
            {
                name: 'name',
                label: 'Imie i nazwisko',
                required: true,
                pattern: '^[a-zA-Z –-]+$',
            },
            {
                name: 'email',
                label: 'Email',
                required: true,
                pattern: '^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$',
            }
        ]
       
    }
    
    send(){
       this.orderForm.addEventListener('submit', e => {
            alert('submit')
            e.preventDefault();
            console.log(this.orderForm.fields)
            const errors = [];
            const orderForm = document.querySelector('.form-send'); 
            console.log(orderForm.elements)
           
            this.orderForm.fields.forEach(function(field){
                const {name, label, required = false, pattern = null} = field;
                const value = orderForm.elements[name].value;
                const valParent = orderForm.elements[name]
                if(required){
                    if(value.length === 0){
                        alert(`${label} field is required`);
                        errors.push('error');
                    }
                }
                if(pattern){
                    const reg = new RegExp(pattern);
                    if(!reg.test(value)){
                        alert(`Field ${label} is invalid`);
                        setError(valParent, `${label} jest niepoprawny`)
                        errors.push('error');
                    }
                }
            })
           
            this.orderForm.fields.forEach(function(field){
                const {name, label, required = false, pattern = null} = field;
                const value = orderForm.elements[name].value;
                const valParent = orderForm.elements[name]
               if(errors.length === 0){
              
               setSuccess(valParent, `${label} dane prawidłowe`)
               e.target.reset();
            } 
            })
            if(errors.length === 0){
                alert(`Dziękujemy! Twoje zamówienie zostało poprawnie wysłane!`);
               
                const orderForm = document.querySelector('.form-send'); 
                const span = orderForm.querySelectorAll('span')
                const inputs = orderForm.querySelectorAll('input')
            
                orderForm.addEventListener('click', e => {
                    span.forEach(function(el){
                    el.innerText = ''
                    el.classList.remove('success')

                    })
                   inputs.forEach(function(el){
                    el.classList.remove('success')
                   })
                }
                )
             } 

              
        });
    }
}

 export default Order



    



