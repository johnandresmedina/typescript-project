"use strict";
function combine(n1, n2) {
    var result = null;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1 + " " + n2;
    }
    return result;
}
var combinedAges = combine(30, 26);
console.log(combinedAges);
var combinedName = combine("30", "26");
console.log(combinedName);
