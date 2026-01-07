function calculate(num1, num2, operator) 
{
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid Operator";
    }

    return result;
}

let ret = calculate(10, 20, "+")
console.log("Result : ",ret)

