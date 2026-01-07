// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.
const states = [
    "Andhra Pradesh", 
    "Bihar", 
    "Goa", 
    "Gujarat", 
    "Haryana", 
    "Himachal Pradesh"
];

const vowels = ['A', 'E', 'I', 'O', 'U'];

const filteredStates = states.filter(state => {
    let firstLetter = state[0].toUpperCase();
    
    return !vowels.includes(firstLetter);
});

console.log(filteredStates);