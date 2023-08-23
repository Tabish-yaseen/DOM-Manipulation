const posts = [{title: 'POST1'}];
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
// Do not touch this function
function create3rdPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}
function deletePost(){
      return new Promise((resolve, reject) => {
          setTimeout( () => {
              if(posts.length > 0){
                  const poppedElement  = posts.pop();
                  resolve(poppedElement);
              } else {
                  reject("ERROR: ARRAY IS EMPTY")
              }
          }, 1000)
      })
  }


  //ist approach
  async function fun1(){
    try{
    const msg=await create2ndPost()
    const msg2=await deletePost()
    console.log(msg2.title)
    const msg3=await create3rdPost()
    const msg4=await deletePost()
    console.log(msg4.title)
    const msg5=await deletePost()
    console.log(msg5.title)
    const msg6=await deletePost()
    }catch(err){
        console.log(err)
    }
    
    
}
fun1()


// 2nd approach
//   create2ndPost()
//  .then(deletePost)
//  .then((value)=>{
//      console.log(value.title)
//  })
//  .then(create3rdPost)
//  .then(deletePost)
//  .then((value)=>{
//      console.log(value.title)
//  })
//  .then(deletePost)
//  .then((value)=>{
//      console.log(value.title)
//  })
//  .then(deletePost)
//  .catch((err)=>{
//      console.log(err)
//  })

 
  
  //3rd approach

//   create2ndPost()
//   .then(()=>{
//      return deletePost()
     
//   })
//   .then((value)=>{
//     console.log(value.title)
// })
// .then(()=>{
//   return create3rdPost()
// })
// .then(()=>{
//   return deletePost()
// })
// .then((value)=>{
//   console.log(value.title)
// })
// .then(()=>{
//   return deletePost()
// })
// .then((value)=>{
//   console.log(value.title)
// })
// .then(()=>{
//   return deletePost()

// })
// .catch((err)=>{
//   console.log(err)
// })

// console.log("tabish")
// // 

