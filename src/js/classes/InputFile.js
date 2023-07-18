import { numberInput} from "../functions/functions"
import { classInputCreate } from "../functions/functions"

const mql = window.matchMedia("(max-width: 768px)")
const tablet = window.matchMedia("(min-width: 769px")

export class InputFile{

    constructor( selector) {

        const container = document.querySelector(selector)

        if (!container) throw new Error('Container element not found')

        this.selector = selector
        this.container = document.querySelector(selector)
        this.classs = classInputCreate()
        this.canvas = this.classs.parentElemet
        
        
    }

    init() {
        console.log('init')
        this.render()
    }

    change(ev,canvasshow, context) {
        console.log('change')
        var file = ev.target.files[0];
        this.handleFile(file, canvasshow, context);
        ev.target.value = null
        console.log(canvasshow)
    }

    changeId() {
        return this.id = this.id + 1
    }

    handleFile(file, canvasshow, context){
        console.log('handlefile')
        var ImageType = /image.*/;
        
    console.log(file)
        if(file.type.match(ImageType)){
            alert('match')
   
            var reader = new FileReader();      
    
            reader.onloadend = function(event){
                var tempImageStore = new Image();
                tempImageStore.onload = function(ev){
             console.log(ev)
                    canvasshow.height = ev.target.height;
                    canvasshow.width = ev.target.width;         
                    context.drawImage(ev.target,0,0);
                   
                }   
                tempImageStore.src = event.target.result;
            }
            reader.readAsDataURL(file);
          
        }   
    }

    render() {
        // alert('inputFilerender')
        // console.log('render')
      
        // const id = this.changeId()
        // const inputCont = document.createElement('div') 
        // inputCont.classList.add('inputCont')
        // inputCont.setAttribute('style', 'padding:10px')
        const inputFile = document.createElement('input')
        inputFile.setAttribute('type', 'file')
        inputFile.setAttribute('id', 'uploaded-file')
        inputFile.setAttribute("name", 'both' + this.classs) 
        inputFile.classList.add('file')
        inputFile.classList.add('in' + this.classs)
     
        this.container.appendChild(inputFile) 

        

      
        const button = document.createElement('button')
        button.innerText = 'X'
        button.addEventListener('click', function (el) {
            el.target.closest('.inputCont').remove()
            const close = el.target.closest('.inputCont')
            const closeName = close.getAttribute("name")
            const canvasClose = document.querySelector(`canvas[name='${closeName}']`)
            canvasClose.remove()
            console.log(closeName)
        })   
      
        this.container.appendChild(button)

        if(mql.matches) {
            const canvas = document.createElement('canvas')
            canvas.setAttribute('id', 'our-canvas')
            canvas.classList.add('in' + this.classs)
            canvas.classList.add('canvassize')
            canvas.setAttribute("name", 'both' + this.classs) 
            this.container.appendChild(canvas)
        }

        if(tablet.matches) {
            const canvas = document.createElement('canvas')
        canvas.setAttribute('id', 'our-canvas')
        canvas.classList.add('in' + this.classs)
        canvas.classList.add('canvassize')
        canvas.setAttribute("name", 'both' + this.classs) 
        const cont=document.querySelector('.paperPrescriptionOrder')
        cont.appendChild(canvas)
        }

        inputFile.addEventListener('change', (ev) => {
           
          const inputfile = inputFile
           
        //   const parent = inputFile.parentElement
        //   console.log('parent',parent)
          
          
        //   const parentclass = parent.getAttribute("name")
        //   console.log('parentclass', parentclass)
          
          if(mql.matches){
            const parent = inputfile.parentElement
            console.log('parent',parent)
            
            
            const parentclass = parent.getAttribute("name")
            console.log('parentclass', parentclass)
             const canvases = parent.querySelector('canvas')
            console.log('canvases', canvases)
            let context = canvases.getContext('2d');
            console.log(context)

            function handleFile(file, canvases, context){
                console.log('handlefile')
                var ImageType = /image.*/;
                
              console.log(file)
                if(file.type.match(ImageType)){
                    alert('match')
              
                    var reader = new FileReader();      
              
                    reader.onloadend = function(event){
                        var tempImageStore = new Image();
                        tempImageStore.onload = function(ev){
                     console.log(ev)
                            canvases.height = ev.target.height;
                            canvases.width = ev.target.width;         
                            context.drawImage(ev.target,0,0);
                           
                        }   
                        tempImageStore.src = event.target.result;
                    }
                    reader.readAsDataURL(file);
                  
                }   
              }
              
              function change(ev,canvases, context) {
                console.log('change')
                var file = ev.target.files[0];
              handleFile(file, canvases, context);
              ev.target.value = null
              console.log(canvases)
              }
              
                        change(ev, canvases, context)
          }
         
          if(tablet.matches) {
            alert('tablet')
            const parent = inputfile.parentElement
          console.log('parent',parent)
          
          
          const parentclass = parent.getAttribute("name")
          console.log('parentclass', parentclass)
            const canvases = document.querySelector(`canvas[name='${parentclass}']`)
          console.log('canvases', canvases)
          let context = canvases.getContext('2d');
          console.log(context)

          function handleFile(file, canvases, context){
            console.log('handlefile')
            var ImageType = /image.*/;
            
          console.log(file)
            if(file.type.match(ImageType)){
                alert('match')
          
                var reader = new FileReader();      
          
                reader.onloadend = function(event){
                    var tempImageStore = new Image();
                    tempImageStore.onload = function(ev){
                 console.log(ev)
                        canvases.height = ev.target.height;
                        canvases.width = ev.target.width;         
                        context.drawImage(ev.target,0,0);
                       
                    }   
                    tempImageStore.src = event.target.result;
                }
                reader.readAsDataURL(file);
              
            }   
          }
          
          function change(ev,canvases, context) {
            console.log('change')
            var file = ev.target.files[0];
          handleFile(file, canvases, context);
          ev.target.value = null
          console.log(canvases)
          }
          
                    change(ev, canvases, context)


          }

        })
    }
}
        //   let canvasshow = document.querySelector(`[name='${parentclass}']`)
        //   //let canvasshow = canvases.querySelector(`[name='${parentclass}']`)
        //     console.log('canvasshow', canvasshow)
          
          // let canvasshow = canvases.forEach(function(el, parentclass){
          //     const ex = el.querySelector(`[name='${parentclass}']`)
          //     console.log(ex)
          // })
          
          
          
          // let context = canvasshow.getContext('2d');
          // console.log(context)
          
        
          
          // if(mql.matches, canvases) {
          //   let context = canvases.getContext('2d');
          // return context
          // }
          
        //   function handleFile(file, canvasshow, context){
        //     console.log('handlefile')
        //     var ImageType = /image.*/;
            
        //   console.log(file)
        //     if(file.type.match(ImageType)){
        //         alert('match')
          
        //         var reader = new FileReader();      
          
        //         reader.onloadend = function(event){
        //             var tempImageStore = new Image();
        //             tempImageStore.onload = function(ev){
        //          console.log(ev)
        //                 canvasshow.height = ev.target.height;
        //                 canvasshow.width = ev.target.width;         
        //                 context.drawImage(ev.target,0,0);
                       
        //             }   
        //             tempImageStore.src = event.target.result;
        //         }
        //         reader.readAsDataURL(file);
              
        //     }   
        //   }
          
        //   function change(ev,canvasshow, context) {
        //     console.log('change')
        //     var file = ev.target.files[0];
        //   handleFile(file, canvasshow, context);
        //   ev.target.value = null
        //   console.log(canvasshow)
        //   }
          
        //             change(ev, canvasshow, context)
        //           } )
          
        //   }
            
          
            //   let object = new InputFileContainer('.paperInputsContainer');
            //     object.init()

            //     const na = this.getClass()
                
            //     this.showFile(na)
         
//                  const cont = document.querySelectorAll('.inputCont')
// console.log(cont)

// var array = [...cont];

// const a = array.forEach(function(el) {

//   const name = el.getAttribute("name")
//  return console.log(name)
  
 
// })

// console.log(a)


//                  const nameobject = document.querySelectorAll("[name]")
//                  console.log(nameobject)
             
               

//                 let can = new Canvas('.paperPrescriptionOrder')
//                 can.init()

//                 // this.paperPrescriptionForm.appendChild(object)
                // this.paperPrescriptionForm.appendChild(ind)

        
        
        

       

      
//   inputFile.addEventListener('change', (ev) => {
//     console.log(ev)
// const parent = inputFile.parentElement
// console.log('parent',parent)


// const parentclass = parent.getAttribute("name")
// console.log('parentclass', parentclass)

// const canvases = document.querySelector('canvas')
// console.log('canvases', canvases)
// let canvasshow = document.querySelector(`[name='${parentclass}']`)
// //let canvasshow = canvases.querySelector(`[name='${parentclass}']`)
//     console.log('canvasshow', canvasshow)

// // let canvasshow = canvases.forEach(function(el, parentclass){
// //     const ex = el.querySelector(`[name='${parentclass}']`)
// //     console.log(ex)
// // })



// // let context = canvasshow.getContext('2d');
// // console.log(context)


// let context = canvasshow.getContext('2d');
// console.log(context)

//             this.change(ev, canvasshow, context)
//           } )

//}
    


export default InputFile