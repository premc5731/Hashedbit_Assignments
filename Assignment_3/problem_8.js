// Q8) Write a function to find repeated sum of digits until there is only a single 
// digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6

function repeatedSum(num) 
{
    while (num > 9) {
        let sum = 0;
        let strNum = num.toString();
        
        for (let i = 0; i < strNum.length; i++) {
            sum += Number(strNum[i]);
        }
        
        num = sum;
    }
    return num;
}

console.log(repeatedSum(456)); 