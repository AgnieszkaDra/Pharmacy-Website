import { setError } from "../functions/functions";
import { setSuccess } from "../functions/functions";
import { setInputSuccess } from "../functions/functions";


class Order {

    constructor() {
     
        this.username = document.getElementById('name')
        this.email = document.getElementById('email')
        this.orderForm = document.querySelector('.form-send'); 
        this.sendButton = document.querySelector('.form-sendbutton')
        
        this.orderForm.fields = [
            {
                name: 'name',
                label: 'Imie i nazwisko',
                required: true,
                pattern: '^[a-zA-Z –-]+$',
            },
            {
                name: 'email',
                label: 'email',
                required: true,
                pattern: '^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$',
            }
        ]
       
    }

    clear() {
        console.log('clear')
        const label__errors = document.querySelectorAll('.label__error')
        return new Promise(function(resolve, reject) {
            resolve(label__errors.forEach(function(el){
            el.innerText = ''
            return el}))
        })
        
        
    }
    
    send(){ 

        console.log('both')
        
        this.orderForm.addEventListener('submit', e => {
                alert('submit')
            e.preventDefault();
            
            console.log(this.orderForm.fields)
            const errors = [];
            const orderForm = document.querySelector('.form-send'); 
            
           
            this.orderForm.fields.forEach(function(field){
                const {name, label, required = false, pattern = null} = field;
                console.log(orderForm.elements[name])
                //const elements = orderForm.elements[name].value
                const value = orderForm.elements[name].value;
                
                const valParent = orderForm.elements[name]
                // elements.forEach(function(el){
                //     const values = el.value
                //     if(el.length === 0 ){
                //         alert('00')
                //     }
                // })
                // if(required) {
                    
                //         if(value.length === 0){
                //         alert(`Pole ${label} jest wymagane`);
                //         errors.push('error');
                //         setError(valParent, `Pole ${label} jest wymagane`)
                //     }  
                // }
                        if(pattern){
                    const reg = new RegExp(pattern);
                    if(!reg.test(value)){
                        alert(`Field ${label} is invalid`);
                        
                        setError(valParent, `Pole ${label} jest niepoprawne`)
                       
                        errors.push('error');
                    }
                }
                
                    
                //}
            
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
                const labels = orderForm.querySelectorAll('.label__error')
                span.forEach(function(el){
                    el.innerText = ''
                    el.classList.remove('success')

                    })
                   inputs.forEach(function(el){
                    el.classList.remove('success')
                   })
                   labels.forEach(function(el){
                    el.innerText =''
                   })
            
                // orderForm.addEventListener('click', e => {
                //     span.forEach(function(el){
                //     el.innerText = ''
                //     el.classList.remove('success')

                //     })
                //    inputs.forEach(function(el){
                //     el.classList.remove('success')
                //    })
                // }
                // )
             } 

              
        }
        )
        //S);
        // return new Promise (function(resolve, reject) {
        //     resolve(all)
        // })
      
    }

    both() {
        return this.clear().then(this.send()).then(this.clear())
    }

}
 export default Order



    



