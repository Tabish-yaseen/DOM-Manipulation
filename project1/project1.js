
let form=document.querySelector('#addForm')
let expense=document.getElementById('amount')
let description=document.getElementById('description')
let category=document.getElementById('category')
let lists=document.getElementById('items')



form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const obj={
        Expense:expense.value,
        Description:description.value,
        Category:category.value
    }
    localStorage.setItem(obj.Expense,JSON.stringify(obj))

    let li=document.createElement("li")
    li.className="list-group-item"
    const textContent = `${obj.Expense} ${obj.Description} ${obj.Category}`;
    li.appendChild(document.createTextNode(textContent))

    let dltbtn=document.createElement('button')
    dltbtn.className="btn btn-danger btn-sm float-right delete"
    dltbtn.appendChild(document.createTextNode('Delete Expense'))
    li.appendChild(dltbtn)

    let editbtn=document.createElement('button')
    editbtn.className="btn btn-primary btn-sm float-right edit"
    editbtn.appendChild(document.createTextNode("Edit Expense"))
    li.appendChild(editbtn)
    

    lists.appendChild(li)
})



lists.addEventListener('click',(e)=>{
    
    //for delete
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            let li=e.target.parentNode
            lists.removeChild(li)
            let expensekey=li.firstChild.textContent.split(' ')[0];

            localStorage.removeItem(expensekey)

        }
    }
    
    if(e.target.classList.contains('edit')){
        let li=e.target.parentElement

        let expensekey=li.firstChild.textContent.split(' ')[0];
        
        expense.value=li.firstChild.textContent.split(' ')[0];
        description.value=li.firstChild.textContent.split(' ')[1];
        category.value=li.firstChild.textContent.split(' ')[2];

        localStorage.removeItem(expensekey)
        lists.removeChild(li)

            
}
})

