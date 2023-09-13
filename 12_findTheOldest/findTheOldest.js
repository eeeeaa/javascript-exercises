/**
 * @param {object[]} arr
 */
const findTheOldest = function(arr) {
    return arr.reduce((oldest, person)=>{
        if(oldest["name"] == null){
            oldest = person;
        } else {
            let oldestAge = 
            ((oldest.yearOfDeath == null)? new Date().getFullYear() : oldest.yearOfDeath) 
            - oldest.yearOfBirth;
            
            let personAge = 
            ((person.yearOfDeath == null)? new Date().getFullYear() : person.yearOfDeath)
             - person.yearOfBirth;

            if(personAge > oldestAge){
                oldest = person;
            }
        }
        
        return oldest;
    },{});
};

// Do not edit below this line
module.exports = findTheOldest;
