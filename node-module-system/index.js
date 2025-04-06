//module.exports ->export
// require ->import

const firstModule =require("./firstModule")

console.log(firstModule.add(10,2));
try {
    console.log("trying to divide by 0");
    let result= firstModule.divide(5,10)
    console.log("result",result);
} catch (error) {
    console.log("caught an error",error.message);
}

//module wrapper
// (
//     function(exports,require,module,__filename,__dirname)
//     //your module card goes here
// )