let form=document.querySelector('#form')
        let ul=document.querySelector('#list')
       
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
            axios.post('https://crudcrud.com/api/5297bfaa791a4128845841f707e9235f/applicationData', details)
            .then((res)=>{
                
                showonscreen(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        window.addEventListener('DOMContentLoaded',()=>{
            axios.get('https://crudcrud.com/api/5297bfaa791a4128845841f707e9235f/applicationData')
            .then((res)=>{
                for(let i=0;i<res.data.length;i++){
                    showonscreen(res.data[i])
                }
            })
            
        })
            

            function showonscreen(data){
                let li=document.createElement('li')
                li.textContent=
                `${data.Name} ${data. phoneNumber} ${data.Email}`
                ul.appendChild(li)

            }

        