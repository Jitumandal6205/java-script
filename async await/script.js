// async function getData() {
//    setTimeout (function (){
//     console.log("I am inside the block")
//    },3000)
//    }
//   let output = getData();
    
//await -- ?
// fetch api

// async function getData() {
//    // get request - async
//    let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId =1');
//    // convert response to json
//    let data = await response.json();
//    console.log(data);
// }

// getData();

//scenario:
//prepare url // api endpoint // -> sync
//await //fetch data // - > network call -> async
//process data // sync



const myHeaders = new Headers();
myHeaders.append("content-type","apllication/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
   method: "POST",
   body: JSON.stringify({ username: "Jitu Mandal" }),
      Headers: myHeaders,
};

async function getData(){
   const url = "https://jsonplaceholder.typicode.com/posts/1";
   const response = await fetch (url);
   let data = await response.json();
   console.log("get data response: " , data);
}
async function postData() {
   const response = await fetch (url, options);
   let data = await response.json();
   console.log("post data response: " , data);
}

async function processData(){
   await postData();
   await getData();
}

processData();