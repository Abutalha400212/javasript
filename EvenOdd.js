function isLeapYear(year){
    var reminder=(year % 4);
    // console.log(reminder);
    if(reminder===0){
        return true;
    }
    else{
        return false;
    }
    
}
const valueAdded = 1920;
const values = isLeapYear(valueAdded);
console.log(valueAdded ,'is leap year.','it is',values);