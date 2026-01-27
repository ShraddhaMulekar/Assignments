const promise = new Promise((resolve, reject)=>{
    const success = false; // Change this to false to test rejection
    if(success){
        resolve("Promise resolved successfully!");
    } else{
        reject("Promise rejected!");
    }
})

console.log(promise)

promise.then((message)=>{
    console.log("Promise resolved with message: " + message)
}).catch((message)=>{
    console.log("Promise rejected with message: " + message)
})