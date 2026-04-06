const repeatString = function(word, num) {
    let newWord = "";
    if (num >= 0){
        for (let i = 0; i < num; i++){
            newWord += word;
        }
    }else{
        return("ERROR");
    }

    return newWord;
};

// Do not edit below this line
module.exports = repeatString;
