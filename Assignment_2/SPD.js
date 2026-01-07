function sumOfProducts(n1, n2) 
{
    let totalSum = 0;

    while (n1 > 0 || n2 > 0) {
        let digit1 = n1 % 10;
        let digit2 = n2 % 10;

        totalSum = totalSum + (digit1 * digit2);

        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }

    return totalSum;
}

let ret = sumOfProducts(21, 78)
console.log("Result : ",ret)

