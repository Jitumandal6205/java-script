class Human{
    age = 20;
    weight = 50;
    height = 1.75;

    walking(){
        console.log("Walking...");
    }

    running(){
        console.log("Running...");
    }

}

let obj = new Human();
console.log(obj);
obj.running();