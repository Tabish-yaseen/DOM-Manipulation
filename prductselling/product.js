let form=document.getElementById('form')
let ul=document.querySelector('#list')

let sellingPrice=document.querySelector('.price')
let productName=document.querySelector('.name')
let total=0

window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/a052183660004b058958465a73222f7c/updatingProduct')
    .then((res)=>{
        for(let i=0;i<res.data.length;i++){
            showonscreen(res.data[i])
        }
    })

    

})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let details={
        S_price:parseFloat(sellingPrice.value),
        P_name: productName.value
    }
    axios.post('https://crudcrud.com/api/a052183660004b058958465a73222f7c/updatingProduct',details)
    .then((res)=>{
        showonscreen(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })

})

    function showonscreen(data){
       
       

     let li=document.createElement('li')
     li.innerHTML=`
     ${data.S_price}-${data.P_name}
     <button class="delete" price="${data.S_price}" id="${data._id}">Delete Product</button>
     `
      ul.appendChild(li)
      total=total+data.S_price
      totalprice(total)

      
}
function totalprice(total){
      let span=document.querySelector('#span')
      span.innerHTML=` ${total}`
}


ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete")){
        let li=e.target.parentElement

        let id=e.target.getAttribute('id')

        axios.delete(`https://crudcrud.com/api/a052183660004b058958465a73222f7c/updatingProduct/${id}`)
        .then((res)=>{
            ul.removeChild(li)
            total=total-e.target.getAttribute('price')
            totalprice(total)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
})