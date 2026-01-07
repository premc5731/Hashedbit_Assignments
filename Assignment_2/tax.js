function findTax(salary) 
{
    let taxAmount;

    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxAmount = salary * 0; 
            break;
        case (salary > 500000 && salary <= 1000000):
            taxAmount = salary * 0.10; 
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxAmount = salary * 0.20; 
            break;
        case (salary > 1500000):
            taxAmount = salary * 0.30; 
            break;
        default:
            taxAmount = "Invalid Salary";
    }

    return taxAmount;
}

let ret = findTax(600000)
console.log("Tax : ",ret)

