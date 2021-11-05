function duplicateEncode(word){
    let temp=''
    word.toLowerCase().split('').map(s=>{word.toLowerCase().split(s).length-1>1?temp+=')':temp+='('})
    return temp
}


// function duplicateEncode(word){
//     return word
//         .toLowerCase()
//         .split('')
//         .map( function (a, i, w) {
//             return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//         })
//         .join('');
// }
//
// function duplicateEncode(word) {
//     word = word.toLowerCase();
//     return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }