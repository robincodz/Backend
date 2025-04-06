function add(a, b) {
    return a + b
}

const subtract = (a, b) => {
    return b - a
}

const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Dividing by 0 is not allowed")
    }
    return a / b
}
module.exports={
    add,subtract,divide
}