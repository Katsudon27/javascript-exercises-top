const reverseString = function(sentence) {
    let reversedSentence = "";
    let char = "";

    for (let i = sentence.length; i > -1; i--){
        char = sentence.charAt(i);
        reversedSentence += char;
    }

    return reversedSentence;
};

// Do not edit below this line
module.exports = reverseString;
