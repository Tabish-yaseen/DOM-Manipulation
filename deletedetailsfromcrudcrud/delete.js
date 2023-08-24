let form=document.querySelector('#form')
        let ul=document.querySelector('#list')
       
        form.addEventListener('submit',onsubmit)
        // for post
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
            axios.post('https://crudcrud.com/api/4743b166826a44d091072eba88238224/applicationData', details)
            .then((res)=>{
                
                showonscreen(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        //for get request
        window.addEventListener('DOMContentLoaded',()=>{
            axios.get('https://crudcrud.com/api/4743b166826a44d091072eba88238224/applicationData')
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
                li.textContent=
                `${data.Name} ${data. phoneNumber} ${data.Email}`
                li.setAttribute('dataid',data._id)

                // creating delete button
                let dltbtn=document.createElement('button')
                dltbtn.className='delete'
                dltbtn.appendChild(document.createTextNode('delete'))

                li.appendChild(dltbtn)
                
                 ul.appendChild(li)

            }
            // for delete 
            ul.addEventListener('click',(e)=>{
                if(e.target.classList.contains('delete')){{
                   let li= e.target.parentElement
                   let userid=li.getAttribute('dataid')
                   
                   axios.delete(`https://crudcrud.com/api/4743b166826a44d091072eba88238224/applicationData/${userid}`)
                
                   .catch((err)=>{
                       console.log('there is a error')
                   })
                   ul.removeChild(li)
                }
              }

            })

          
        