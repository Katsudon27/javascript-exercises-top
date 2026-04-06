const sumAll = function(a ,b) {
    if (Number.isInteger(a) && Number.isInteger(b) && parseInt(a) >= 0 && parseInt(b) >= 0){
        let sum, start, end;
        const args = [...arguments];

        args.sort(function (a,b) {return a - b;});

        sum = args[0];
        start = sum + 1;
        end = args[1];

        for (start; start <= end; start++){
            sum += start;
        }

        return sum;
    }else{
        return("ERROR");
    }
};

// Do not edit below this line
module.exports = sumAll;
