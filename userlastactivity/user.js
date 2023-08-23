let arr=[]
function updateLastUserActivity(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            post.LastUserActivityTime=new Date().getTime()
            resolve( post.LastUserActivityTime)

        },1000)

    })
}
function Createpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.push(post)
            resolve(post.Name)
        },2000)

    })
    

    
}
const post = { Name: "tabish",
 LastUserActivityTime: "13th of august" };
Promise.all( [ Createpost(post),updateLastUserActivity(post) ]).then((values)=>{
console.log(values)
})

