const findTheOldest = function(people) {
    let result = people.reduce((previous, current) => {
        let currentAge;
        if (!current.yearOfDeath){
            currentAge = (new Date()).getFullYear() - current.yearOfBirth;
        }else{
            currentAge = current.yearOfDeath - current.yearOfBirth;
        }

        if (currentAge > previous.age){
            previous.name = current.name;
            previous.age = currentAge;
        }

        return previous;
    }, { 
        name: "",
        age: 0,
    });

    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
