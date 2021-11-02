function doubleChar(str) {
    // Your code here
    let tempStr=''
    str.replace((a,b)=>a+a)
    console.log(str.split('').map(a=>tempStr+=a+a))
    return tempStr
}
// const doubleChar = (str) => str.split("").map(c => c + c).join("");
//
// function doubleChar(str) {
//     return str.replace(/(.)/g, "$1$1")
// }