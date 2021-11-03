function removeChar(str){
    //You got this!
    let ar=str.split("")
    ar.shift();
    ar.pop();
    return ar.join("")
};


//
// function removeChar(str) {
//     return str.slice(1, -1);
// }
//
// const removeChar = str => str.slice(1,-1)