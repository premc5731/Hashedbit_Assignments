// Q9) Write a function to count the number of words in a paragraph.

function countWords(paragraph) 
{
    let trimmedText = paragraph.trim();
    
    let wordsArray = trimmedText.split(" ");
    
    return wordsArray.length;
}

let myText = "I am learning how to code in JavaScript";

console.log("Word count is: " + countWords(myText));