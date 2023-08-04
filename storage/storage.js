let form=document.querySelector('#my-form')
form.addEventListener('submit',onsubmit)
function onsubmit(e){
    e.preventDefault()
    let name=document.querySelector('#name')
    let email=document.querySelector("#email")
    
    localStorage.setItem('name',name.value)
    //get the value of the key
    console.log(localStorage.getItem('name'))

    localStorage.setItem('email',email.value)
    console.log(localStorage.getItem('email'))
}