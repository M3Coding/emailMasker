let count = 0;
function cardCounter(card) {
    if (card >= 2 && card<= 6){
        count += 1;
        if(count > 0){ 
            
            return `${count} Bet`;
        }else {
            return `${count} Hold`;
        }
} else if (card >=7 && card <= 9){
    if(count > 0){ 
            return `${count} Bet`;
        }else {
            return `${count} Hold`;
        }
    
} else {
    count -= 1;
    if(count > 0){ 
            
            return `${count} Bet`;
        }else {
            return `${count} Hold`;
        }
}
}
console.log(cardCounter(5))
console.log(cardCounter(2))
console.log(cardCounter(4))
console.log(cardCounter(6))
console.log(cardCounter(7))
console.log(cardCounter(10))
console.log(cardCounter('K'))
console.log(cardCounter("Q"))