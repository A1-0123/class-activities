function guessGame(a, limit){
    console.log("You put " + a);

    let random = Math.floor(Math.random() * limit) + 1; 
    // will give random number between 1 and limit
    
    if(random > a) {
        console.log("Your value to less");
    }else if (random == a) {
        console.log("You won!");
    }else if (random < a) {
        console.log("Your value to much");
    }

    console.log("Random number is " + random);
}

guessGame(3, 4);