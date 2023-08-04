
let form=document.getElementById("addForm")
let parentLists=document.getElementById('items')

form.addEventListener('submit',additem);

parentLists.addEventListener('click',removeItems)

function additem(e){
    e.preventDefault()
    let input=document.getElementById('item').value
    let input2=document.getElementById('input2').value
    
    //create a new  li item
    let newli=document.createElement('li')
    // add class to this
    newli.className="list-group-item"
    //creating textnode
    let textNode=document.createTextNode(input)
    //adding textnode to newli
    newli.appendChild(textNode)
    //addind space textnode to newli
    newli.appendChild(document.createTextNode(' '))
    //adding another textnode to newli
    newli.appendChild(document.createTextNode(input2))
    console.log( newli)
   
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
    //filtering
    var filterInput=document.getElementById('filter')
    filterInput.addEventListener("keyup",filterItems)
function filterItems(e){
   let text =e.target.value.toLowerCase()

  let lists =parentLists.getElementsByTagName("li")
  let arr=Array.from(lists)
  for(let element of arr){

    let itemName=element.firstChild.textContent
    let itemName2=element.childNodes[2].textContent
    if((itemName.toLowerCase().indexOf(text)!=-1) || (itemName2.toLowerCase().indexOf(text)!=-1)){
        element.style.display='block'
        
    }
    else{
        element.style.display='none'
    }
   
  }

}
    

  
