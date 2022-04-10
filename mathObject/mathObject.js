const addNumbers = (a,b) => {
    let x = a+b;
    return x;
};

const subtractNumbers = (a,b) => {
    let x = a-b;
    return x;
};

const divideNumbers = (a,b) => {
    let x = a/b;
    return x;
};

const multiplyNumbers = (a,b) => {
    let x = a*b;
    return x;
};


//Advanced mathObject

//Find Square Root
const squareRoot = (numb) => Math.sqrt(numb);

//Find Max number
const maxNumber = (a,b,c,d) => Math.max(a,b,c,d);
  

module.exports = {
    addNumbers,
    subtractNumbers,
    divideNumbers,
    multiplyNumbers,
    squareRoot,
    maxNumber
}