// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.


let text = "Hashedbit problem 4";

let vowelsCount = 0;
let consonantsCount = 0;

let vowelsList = "aeiouAEIOU";

for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
        if (vowelsList.includes(char)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
}

console.log("Vowels: " + vowelsCount);
console.log("Consonants: " + consonantsCount);