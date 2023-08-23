// GET REQUEST
 function getTodos() {
    axios.get('https://jsonplaceholder.typicode.com/todos',{
       params:{ _limit:6}
    }
    )
    .then((res)=>{
        console.log(res)
        console.log(res.data[199])
        showOutput(res)
    }).catch((err)=>{
        console.log(err)
    })

//    try {
//       let res=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       console.log(res)
//       showOutput(res)

//     }catch(err){
//         console.log(err)

//     }
    

}  
  // POST REQUEST
  async function addTodo() {
    try{
    
   let res=await axios.post('https://jsonplaceholder.typicode.com/todos',{
    name:"tabish",
    title:true
   })
        console.log(res)
        console.log(res.data)
        showOutput(res)  
}catch(err){
    console.log(err)
}
    


  }
  
  // PUT/PATCH REQUEST
  function updateTodo() {
    console.log('PUT/PATCH Request');
    let config={
        method:"patch",
        url:'https://jsonplaceholder.typicode.com/todos/6',
        data:{
            title:"tabish",
            

        }
    }
     axios(config).then((res)=>{
        showOutput(res)
        console.log(res)
        console.log(res.data)
     }).catch((err)=>{
        console.log(err)
     })


  }
  
  // DELETE REQUEST
  function removeTodo() {
    console.log('DELETE Request');
     axios.delete('https://jsonplaceholder.typicode.com/todos/2')
     .then(res=>{
        showOutput(res)
        console.log(res)
        console.log(res.data)
     }).catch((err)=>{
        console.log(err)
     })

    //    let res = await axios.delete('https://jsonplaceholder.typicode.com/todos/2')
     
    //     showOutput(res)
    //     console.log(res)
    //     console.log(res.data)
    
      
  }
  
  // SIMULTANEOUS DATA
  function getData() { 
    console.log('Simultaneous Request');

    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos'), // for todod request
        axios.get("https://jsonplaceholder.typicode.com/posts"),// for posts

    ]).then((res)=>{
        console.log(res)
        console.log(res[0].data)
        console.log(res[1].data)
        showOutput(res[1])
    }).catch((err)=>{
        console.log(err)
    })
  }
  
  // CUSTOM HEADERS
  function customHeaders() {
    console.log('Custom Headers');
    const config={
        headers:{
            'Content-Type': 'application/json',
            Authorization:'sometoken'
        }
    }

    axios.post(
        'https://jsonplaceholder.typicode.com/todos', 
        {
    name:"tabish",
    title:true
   }, 
   config
   ).then((res)=>{
    console.log(res.header)
    showOutput(res)
   })
    
  }
  // Axios globas
  axios.defaults.headers.common['X-Auth-Token']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  
  // TRANSFORMING REQUESTS & RESPONSES
  function transformResponse() {
    const config={
        method:'post',
        url:'https://jsonplaceholder.typicode.com/todos',
        data:{
            title:"hello world"
        },
        transformResponse:  axios.defaults.transformResponse.concat((data)=>{
            data.title=data.title.toUpperCase()
            return data
        })

    }
    axios(config).then((res)=>{
        showOutput(res)
    }).catch((err)=>{
        console.log(err)
    })
  }
  
  // ERROR HANDLING
  function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todos',{
        params:{ _limit:6}
     }
     )
     .then((res)=>{
         showOutput(res)
     }).catch((err)=>{
         if(err.response){
            //server responded with the status other than 200 range
            console.log(err.response.data)
            console.log(err.response.status)
         }
         else if(err.request){
            // request was made but no response 
            console.error(err.request)
         }
         else{
            console.error(err.message)
         }
     })
    
  }
  
  // CANCEL TOKEN
  function cancelToken() {
    const source= axios.CancelToken.source();
    axios.get('https://jsonplaceholder.typicode.com/todos',{
      cancelToken: source.token 

    })
    .then((res)=>{
      showOutput(res)
    })
    .catch((err)=>{
      if(axios.isCancel(err)){
        console.log(err.message);
      }
    });
    if(true){
      source.cancel('request cancelled')
    }
    
    
  }
  
  // INTERCEPTING REQUESTS & RESPONSES
  axios.interceptors.request.use((config)=>{
    console.log(config)
    console.log(`${config.method} request sent to ${config.url} at ${new Date().getTime()}`)
    return config
  },(error)=>{
    return Promise.reject(error)
  })
  
  
  // AXIOS INSTANCES
  
  // Show output in browser
  function showOutput(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
  }
  
  // Event listeners
  document.getElementById('get').addEventListener('click', getTodos);
  document.getElementById('post').addEventListener('click', addTodo);
  document.getElementById('update').addEventListener('click', updateTodo);
  document.getElementById('delete').addEventListener('click', removeTodo);
  document.getElementById('sim').addEventListener('click', getData);
  document.getElementById('headers').addEventListener('click', customHeaders);
  document
    .getElementById('transform')
    .addEventListener('click', transformResponse);
  document.getElementById('error').addEventListener('click', errorHandling);
  document.getElementById('cancel').addEventListener('click', cancelToken);