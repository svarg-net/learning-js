"use strict";
const numberSort = function (a,b) {
    return a - b;
};

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    let arr=[]
    array.map(a=>arr.concat(a))
    console.log(arr.concat(...array).sort())
    return [].concat(...array).sort(numberSort);
}

// function flattenAndSort(array) {
//     return [].concat(...array).sort((a,b) => a - b);
// }
//
// function flattenAndSort(array) {
//     return array
//         .reduce((result, current) => [...result, ...current],[])
//         .sort((a, b) => a - b)
//         ;
// }