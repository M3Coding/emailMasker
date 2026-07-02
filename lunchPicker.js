const lunches = ["fruit", "Pizza", "Chicken"];
function addLunchToEnd(arr, str){
    const addedLunch=arr.push(str);
    const addItem = arr[addedLunch-1];
    console.log(addItem)
    console.log(`${addItem} added to the end of the lunch menu.`);
    console.log(arr);
    return arr;

}
function addLunchToStart(arr, str) {
    const addLunch=arr.unshift(str);
    const addItem = arr[addLunch-1]
    console.log(`${addItem} added to the start of the lunch menu.`)
    console.log(arr);
    return arr;
    
}
function removeLastLunch(arr){
    const removedLunch =arr.pop();
    if(arr.length === 0) {
        console.log("No lunches to remove.")
    } else {
        console.log(`${removedLunch} removed from the end of the lunch menu.`)
    console.log(arr);
    return arr;
    }

}
function removeFirstLunch(arr){
    const removedItem =arr.shift();
    if(arr.length ===0){
        console.log("No lunches to remove.")
    } else {
        console.log(`${removedItem} removed from the start of the lunch menu.`)
        console.log(arr);
        return arr;
    }
}
function getRandomLunch(arr){
    const randomLunch = Math.floor(Math.random() *arr.length);
    console.log(randomLunch)
    const getLunch = arr[randomLunch];
    console.log(getLunch);
    return getLunch;
}

function showLunchMenu(arr){
    if(arr.length ===0 ){
        console.log("The menu is empty.")
    } else{
        console.log(`Menu items: ${arr}`);
        return `Menu items: ${arr}`;
    }
}
addLunchToEnd(lunches, "hamburger");
addLunchToStart(lunches, "Meatloaf");
removeLastLunch(lunches);
removeFirstLunch(lunches);
getRandomLunch(lunches);
showLunchMenu(lunches);