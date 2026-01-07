// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(text) 
{
    let letters = text.split("");

    let flippedLetters = letters.reverse();

    let result = flippedLetters.join("");

    return result;
}

console.log(reverseString("Hashedbit"));