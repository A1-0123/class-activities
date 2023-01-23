function capFirstLetters(sentenses){
    // console.log(sentenses);
    let stringArray = sentenses.split(" ");
    for(let i = 0; i < stringArray.length; i++){
        // stringArray[i] a when i = 0
        // stringArray[i] short when i = 1
        // stringArray[i] sentence when i = 2
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() 
        // sentence = S 
        // s = S
        + stringArray[i].slice(1);
        // entence
        // hort
    }
    return stringArray.join(" ");
}

console.log(capFirstLetters("a short sentence"))
console.log(capFirstLetters("a lazy fox"))
console.log(capFirstLetters("look, it is working!"))