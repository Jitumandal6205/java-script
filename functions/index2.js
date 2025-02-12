let obj = {
    name: "Jitu",
    age: 25,
    city: "Pune",
    greet: function() {
        console.log("Hello", this   + "!");
    }
};

console.log(obj);
obj.greet();
