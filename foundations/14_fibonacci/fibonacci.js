const fibonacci = function(num) {
    num = Number(num);
    if (num < 0){
        return "OOPS";
    }
    let sequence = [0, 1];
    let index = 1;
    let temp;

    for (let i = 2; i <= num; i++){
        temp = sequence[index] + sequence[index-1];
        sequence.push(temp);
        index++;
    }

    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
