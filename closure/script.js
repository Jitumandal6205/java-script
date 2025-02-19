// function outerFunction() {
//     let name = "jitu";

//     function innerFunction() {
//         console.log(name);
//     }
//     innerFunction();

// }

// outerFunction();



function outerFunction() {
    let name = "jitu";

    function innerFunction() {
        console.log(name);
    }
    return innerFunction;

}

let inner = outerFunction();

 inner();