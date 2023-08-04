        let ul=document.querySelector('#list')
        ul.addEventListener('click',onclick)
       

       let form=document.querySelector('#form')
         form.addEventListener('submit',onsubmit)
        
        function onsubmit(e){
            e.preventDefault()
            let name=document.querySelector('.name')
            let phonenumber=document.querySelector('.phoneno')
            let email=document.querySelector('.email')
           
            const details={
                Name:name.value,
                phoneNumber:phonenumber.value,
                Email:email.value,
            };
            localStorage.setItem(details.Email,JSON.stringify(details))
  
            //creating li element
            let li=document.createElement('li')
           
            li.appendChild(document.createTextNode(details.Name))
            li.appendChild(document.createTextNode(details.Email))
            li.appendChild(document.createTextNode(details.phoneNumber))
            
            

            //creating delete button
            let btn=document.createElement("button")
           
           
            //adding class to the button
            btn.className='button'
            //adding textnode containing dete to the button
            btn.appendChild(document.createTextNode('delete'))
            //now adding it to the li
            li.appendChild(btn)
            //finally appending li with the ul parent 
            ul.appendChild(li)
        }
        function onclick(e){
            // let email=document.querySelector('.email')
            if(e.target.classList.contains('button')){
               let item =e.target.parentNode
               ul.removeChild(item)
               const email = item.childNodes[1].textContent

               localStorage.removeItem(email)

            }
           


        }
       



        
            