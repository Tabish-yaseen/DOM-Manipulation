let form=document.querySelector('#addForm')

let expense=document.getElementById('amount')
let description=document.getElementById('description')
let category=document.getElementById('category')

let ul=document.querySelector('#items')

window.addEventListener('DOMContentLoaded',()=>{
    let localkeyarray=Object.keys(localStorage)
    for(let i=0;i<localStorage.length;i++){
        let key=localkeyarray[i]
        let userdetailobject=JSON.parse(localStorage.getItem(key))
        displayItems(userdetailobject)
    }
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let obj={
        Expense:expense.value,
        Description:description.value,
        Category:category.value
    }
    localStorage.setItem(obj.Expense,JSON.stringify(obj))
    displayItems(obj)
})


function displayItems(obj){
    let li=document.createElement('li')
    li.className="list-group-item"
    const textContent = `${obj.Expense} ${obj.Description} ${obj.Category}`;
    li.appendChild(document.createTextNode(textContent))

    //create delete button
    let dltbtn=document.createElement('button')
    dltbtn.className="btn btn-danger btn-sm float-right delete"
    dltbtn.appendChild(document.createTextNode('Delete Expense'))
    li.appendChild(dltbtn)

//  create edit button
    let editbtn=document.createElement('button')
    editbtn.className="btn btn-primary btn-sm float-right edit"
    editbtn.appendChild(document.createTextNode("Edit Expense"))
    li.appendChild(editbtn)
      
    ul.appendChild(li)
    
}
// for delete
ul.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        if(confirm("Are you sure")){
          let li = e.target.parentElement
          ul.removeChild(li)
          let expensekey=li.firstChild.textContent.split(' ')[0];
          localStorage.removeItem(key)


        }
    }
    if(e.target.classList.contains('edit')){
        let li=e.target.parentElement
        ul.removeChild(li)
           
        expense.value=li.firstChild.textContent.split(' ')[0];
        description.value=li.firstChild.textContent.split(' ')[1];
        category.value=li.firstChild.textContent.split(' ')[2];

        let expensekey=li.firstChild.textContent.split(' ')[0];
        localStorage.removeItem(expensekey)

    }

})


