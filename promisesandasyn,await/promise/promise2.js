console.log("person 1: shows ticket")
console.log("person 2: shows ticket")

const promisewifebringingtick=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket')

    },3000)
})
const getpopcorn=promisewifebringingtick.then((t)=>{
    console.log("wife:i have a ticket")
    console.log('husband:we should go in')
    console.log("wife: no i am hungry")
    return new Promise((resolve,reject)=>{
        resolve(`${t} popcorn`)
    })
    // return (`${t} popcorn`)
})
const getbutter=getpopcorn.then((t)=>{
    console.log("husband: i got SOME popcorn")
    console.log("husband:we should go in")
    console.log("wife:no i want butter ON POPCORN")
    return new Promise((resolve,reject)=>{
        resolve(`${t} butter`)
    })
})
const getcoldrink=getbutter.then((t)=>{
    console.log("husband: i got a butter")
    console.log("husband:should we go in now")
    console.log("wife: no i want coldrink too")
    return new Promise((resolve,reject)=>{
        resolve(`${t} coldrink`)
    })
})
getcoldrink.then((t)=>{
    console.log('husband:i got coldrink')
    console.log("husband:we should go in now its too late")
    console.log("wife:yes please")
    console.log(t)
})

console.log("person 3:shows ticket")
console.log("person 4: shows ticket")