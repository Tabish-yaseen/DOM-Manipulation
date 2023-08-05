let ul=document.querySelector('#list')
document.addEventListener('click',deletebtn)

ul.addEventListener('click',editbtn)


let form=document.querySelector('#form')
 form.addEventListener('submit',onsubmit)

 const name1=document.querySelector('.name')
 const phonenumber=document.querySelector('.phoneno')
 const email1=document.querySelector('.email')

function onsubmit(e){
    e.preventDefault()
   
   
    const details={
        Name:name1.value,
        phoneNumber:phonenumber.value,
        Email:email1.value,
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

    //creating a edit button
    let editbtn=document.createElement('button')
    editbtn.className='edit'
    editbtn.appendChild(document.createTextNode('edit'))
    li.appendChild(editbtn)
    //finally appending li with the ul parent 
    ul.appendChild(li)
}
function deletebtn(e){
    // let email=document.querySelector('.email')
    if(e.target.classList.contains('button')){
       let item =e.target.parentNode
       ul.removeChild(item)
       const email = item.childNodes[1].textContent

       localStorage.removeItem(email)

    }
   }
   function editbtn(e){
    
    if(e.target.classList.contains('edit')){
     const li = e.target.parentNode
     ul.removeChild(li)
     
     const email=li.childNodes[1].textContent
     localStorage.removeItem(email)
     name1.value=li.childNodes[0].textContent
     phonenumber.value=li.childNodes[2].textContent
     email1.value=li.childNodes[1].textContent
 }
    }





    