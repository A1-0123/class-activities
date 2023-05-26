"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
console.log((0, util_1.sum)(1, 2));
console.log((0, util_1.multiply)(1, 2));
console.log((0, util_1.divide)(1, 2));
function getUsersOnlineMessage(numUsersOnline) {
    if (numUsersOnline) {
        // 0, false, undefined, null, NaN, ""(empty string) are all falsy
        return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}
