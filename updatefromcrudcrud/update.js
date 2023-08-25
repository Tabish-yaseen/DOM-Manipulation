        let form=document.querySelector('#form')
        let ul=document.querySelector('#list')
        let name1=document.querySelector('.name')
        let phonenumber=document.querySelector('.phoneno')
        let email=document.querySelector('.email')
        let editmode=false
        let  editingUserId=null
       
        form.addEventListener('submit',onsubmit)
        // for post request
        function onsubmit(e){
            e.preventDefault()
           
            const details={
                Name:name1.value,
                PhoneNumber:phonenumber.value,
                Email:email.value,
            };
            if(editmode==false)
            axios.post('https://crudcrud.com/api/88ee32a45688408abf3ae79cba3b4009/applicationData', details)
            .then((res)=>{
                
                showonscreen(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })

            else if (editmode && editingUserId) {
                axios.put(`https://crudcrud.com/api/88ee32a45688408abf3ae79cba3b4009/applicationData/${editingUserId}`, details)
                    .then((res) => {

                        axios.get(`https://crudcrud.com/api/88ee32a45688408abf3ae79cba3b4009/applicationData/${editingUserId}`)
                            .then((res) => {
                                showonscreen(res.data);
                                editmode = false;
                                editingUserId = null;
                            })
                            .catch((err) => {
                                console.log('GET request error', err);
                            });
                    })
                 }  
        }     
            
        //for get request
        window.addEventListener('DOMContentLoaded',()=>{
            axios.get('https://crudcrud.com/api/88ee32a45688408abf3ae79cba3b4009/applicationData')
            .then((res)=>{
                for(let i=0;i<res.data.length;i++){
                    showonscreen(res.data[i])
                }
            }).catch((err)=>{
                console.log(err)
            })
            
        })

            function showonscreen(data){
                
                let li=document.createElement('li')
                li.innerHTML = `
                ${data.Name} ${data.PhoneNumber} ${data.Email}
                <button class="delete" data-id="${data._id}">delete</button>
                <button class="edit" data-id="${data._id}" data-name="${data.Name}" data-phone="${data.PhoneNumber}" data-email="${data.Email}">edit</button>
             `;

                ul.appendChild(li)

            }
            // for delete 
            ul.addEventListener('click',(e)=>{
                if(e.target.classList.contains('delete')){
                   let li= e.target.parentElement
                   let userid=e.target.getAttribute('data-id')
                   
                   axios.delete(`https://crudcrud.com/api/88ee32a45688408abf3ae79cba3b4009/applicationData/${userid}`)
                   .then((res)=>{
                    ul.removeChild(li)
                    })
                     .catch((err)=>{
                       console.log('there is a error')
                   })
                   
                }
            
                 // for update/put request
            
                 if (e.target.classList.contains('edit')) {
                     let li = e.target.parentElement;
                     
    
                      name1.value = e.target.getAttribute('data-name');
                      phonenumber.value = e.target.getAttribute('data-phone');
                      email.value = e.target.getAttribute('data-email');
                      editmode = true;
                      editingUserId = e.target.getAttribute('data-id');

                      
                      ul.removeChild(li);
                          }
 
                      })
        