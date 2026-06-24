let year = 2020;

function isLeapYear(num){
    if(num%4===0 || num%400===0) {
        if(num%100 === 0) {
            console.log("failed")
            return `${year} is not a leap year.`
        } else {
            console.log("success")
            return `${year} is a leap year.`
        }
    } else {
        console.log("failed")
            return `${year} is not a leap year.`
    }
}
let result = isLeapYear(year);
console.log(result)

