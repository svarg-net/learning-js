function makeString(s){
    // ...
    let newString=''
    s.split(" ").map(a=>newString+=a[0])
    return newString
}

//const makeString = s => s.split(' ').map(x => x[0]).join('')
//
// function makeString(s){
//     return (s.match(/\b\w/g)).join('');
// }
//
// const makeString = ($) => $.match(/\b\w/gi).join('')