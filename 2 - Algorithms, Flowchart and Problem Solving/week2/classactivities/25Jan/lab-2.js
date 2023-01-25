// Create a function which returns the
// number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0

function countTrue(arr){
    let counter = 0; // initial count

    for(let i = 0; i < arr.length; i++){
        // iterate arr to see each element

        // arr[i] works too.
        if(arr[i] === true){
            // we can also use arr[i] because its returns true / false
            counter++;
            // counter = counter + 1;
            // counter += 1;
        }
    }
    return counter;
}

console.log(countTrue([true, false, false, true, false])); // 2
console.log(countTrue([])); // 0
console.log(countTrue([false, false, false, false])); // 0