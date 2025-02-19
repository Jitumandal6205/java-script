let promise1 = new Promise((resolve, reject) => {
    
    let success = true;
    if (success){
        resolve("promise fullfilled");
    }
    else {
        reject("promise rejected");
    }
});

promise1.then((message) => {
    console.log("Promise message: " + message);
}).catch((error) => {
    console.log("promise error: " + error);
})