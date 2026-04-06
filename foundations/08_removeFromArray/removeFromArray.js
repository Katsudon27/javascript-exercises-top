const removeFromArray = function(array, ...Args) {
    for(let i = 0; i < Args.length; i++){
        while(array.includes(Args[i])){
            array.splice(array.indexOf(Args[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
