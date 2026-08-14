const sentence = "I am learning JavaScript";

const words = sentence.split(" ");

let longest = "";

for (const word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}

console.log(longest);