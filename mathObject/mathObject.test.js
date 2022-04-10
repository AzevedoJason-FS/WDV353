const {
        addNumbers, 
        subtractNumbers, 
        divideNumbers, 
        multiplyNumbers, 
        squareRoot, 
        maxNumber, 
      } =  require("./mathObject");

describe("Testing Simple mathObject", () => {
    
    test("Should add two numbers", () => {
        const result = addNumbers(2,2);
        expect(result).toBe(4);
    });

    test("Should subtract two numbers", () => {
        const result = subtractNumbers(4,2);
        expect(result).toBe(2);
    });

    test("Should divide two numbers", () => {
        const result = divideNumbers(6,2);
        expect(result).toBe(3);
    });

    test("Should multiply two numbers", () => {
        const result = multiplyNumbers(8,2);
        expect(result).toBe(16);
    });

});


//Advanced mathObject

describe("Testing Advanced mathObject", () => {

    test("Should find square root", () => {
        const result = squareRoot(9);
        expect(result).toBe(3);
    });

    test("Should find the max number", () => {
        const result = maxNumber(2,50,10,14);
        expect(result).toBe(50);
    });

});