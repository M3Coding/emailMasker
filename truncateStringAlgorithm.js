const stringInput = "A-tisket a-tasket A green and yellow basket";
const stringLength = 8;
function truncateString(string, lengthOfString) {
    const sliceString = string.slice(0, lengthOfString);
    if(string.length <= lengthOfString) {
        console.log(string);
        return string;
        

    } else {
        console.log(sliceString + "...")
        return sliceString + "..."
    }
    
}

truncateString(stringInput, stringLength)