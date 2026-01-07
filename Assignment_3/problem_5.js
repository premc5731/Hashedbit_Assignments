// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.

function correctfn(sentence, wrong, correct) {
    let fixedSentence = sentence.replace(wrong, correct);
    return fixedSentence;
}

let mySentence = "I have a blue car";
let result = correctfn(mySentence, "blue", "red");

console.log(result);