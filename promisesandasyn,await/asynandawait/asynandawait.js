console.log("person1: show ticket")
console.log("person2: show ticket")



let pre_movie= async ()=>{
    const promisewifebringingtick=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
    
        },3000)
    })
    const getpopcorn=new Promise((resolve,reject)=>{
        resolve("popcorn")
    })
    const getbutter=new Promise((resolve,reject)=>{
        resolve("butter")
    })
    const getcoldrink=new Promise((resolve,reject)=>{
        resolve('coldrink')
    })
    
      let ticket =  await promisewifebringingtick
      console.log(`wife:i have a ${ticket}`)
      console.log('husband:we should go in')
      console.log("wife: no i am hungry")

      let popcorn= await getpopcorn
      console.log(`husband: i got SOME ${popcorn}`)
    console.log("husband:we should go in")
    console.log("wife:no i want butter ON POPCORN")
    
    let butter=await getbutter
    console.log(`husband: i got a ${butter}`)
    console.log("husband:should we go in now")
    console.log("wife: no i want coldrink too")
    
    

    let coldrink= await getcoldrink
    console.log(`husband:i got ${coldrink}`)
    console.log("husband:we should go in now its too late")
    console.log("wife:yes please")
    
     return ticket
}


  

pre_movie().then((t)=>console.log(t))
console.log("person3: show ticket")
console.log("person4: show ticket")