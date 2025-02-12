// let arr = [1,2,3,4,5];
// //array constructor
// let brr = new Array ('Jitu',1 ,'jitu');
// brr.push('mandal');
// brr.pop();

// brr.shift();
// brr.unshift('mandal');
// brr.push(20);
// brr.push(40);
// brr.splice(2,1,'Mandal');
// console.log(brr);


let arr = [1,5,'jitu','mandal','null'];

let ans = arr.filter((value) => {
    if(typeof(value) === 'string')
    {
       return true;
    }
    else{
        return false;
    }
});

console.log(ans);