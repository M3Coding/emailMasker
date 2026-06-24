let year = 2021;

function isLeapYear(num){
    if(num%4===0 && num%100 ===0) {
        if(num%400 === 0) {
            console.log("I may be divisble by 100 but I am also divisible by 400 which make me a leap year")
            return `${num} is a leap year.`
        } else {
            console.log("failed")
        return `${num} is not a leap year.`
        }
        
    } else if(num%4===0 || num%400 === 0){
        console.log("success")
        return `${num} is a leap year.`
    } else {
        console.log("else failed")
        return `${num} is not a leap year.`
    }
}
let result = isLeapYear(year);
console.log(result)

