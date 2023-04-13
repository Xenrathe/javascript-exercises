const findTheOldest = function(peopleList) {
    let oldestAge = 0;
    let oldestPerson = null;

    peopleList.forEach((person) => {
        let deathYear = 2023;
    
        if (person.yearOfDeath !== undefined)
            deathYear = person.yearOfDeath;
        
        if (deathYear - person.yearOfBirth > oldestAge){
            oldestAge = deathYear - person.yearOfBirth;
            oldestPerson = person;
        }
    });

    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
