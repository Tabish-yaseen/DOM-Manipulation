
let form=document.getElementById("addForm")
let parentLists=document.getElementById('items')
form.addEventListener('submit',additem);
parentLists.addEventListener('click',removeItems)
function additem(e){
    e.preventDefault()
    let input=document.getElementById('item').value
    
    //create a new  li item
    let newli=document.createElement('li')
    // add class to this
    newli.className="list-group-item"
    //creating textnode
    let textNode=document.createTextNode(input)
    console.log(newli)
    //adding textnode to newli
    newli.appendChild(textNode)
   
     //creating a delete button
     let dltbtn=document.createElement("button")
     // adding class to the button
    dltbtn.className="btn btn-danger btn-sm float-right delete";
     //adding textNode to this
     dltbtn.appendChild(document.createTextNode('X'))
     //ADDIND THIS BUTTON TO THE newli
     newli.appendChild(dltbtn)
      
      //creating edit button
      let editbtn=document.createElement('button')
      editbtn.className="btn btn-primary btn-sm float-right edit";
      editbtn.innerText='+'
      newli.appendChild(editbtn)
      //select the parent in which you want to append this newli ann then append it in that parent

    
    parentLists.appendChild(newli)
     console.log(parentLists)

}
function removeItems(e){

  if(e.target.classList.contains('delete')){
    if(confirm("Are you sure?")){
        //get the parent element of this className=delete
    let li=e.target.parentElement;
    parentLists.removeChild(li)


    }
    

  }
}