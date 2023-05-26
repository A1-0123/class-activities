import { sum, multiply, divide } from "./util";

console.log(sum(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));


function getUsersOnlineMessage(numUsersOnline: number) {
 if (numUsersOnline) { 
    // 0, false, undefined, null, NaN, ""(empty string) are all falsy

    return `There are ${numUsersOnline} online now!`;
 }
    return "Nobody's here. :(";
}