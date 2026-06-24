const stringsEnd = "n";
const stringInput = "Bastian"

function confirmEnding(stringToCheck, comparedString) {
    const endStrLength = comparedString.length;
    console.log(endStrLength);
    const endStrInput = stringToCheck.length - endStrLength;
    console.log(endStrInput)
   
    const sliceStr = stringToCheck.slice(endStrInput)
    console.log(sliceStr)
    if(sliceStr === comparedString) {
        console.log(true);
        return true;
    }else {
        console.log(false);
        return false;
    }

}

confirmEnding(stringInput, stringsEnd)