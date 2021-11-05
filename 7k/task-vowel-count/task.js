function getCount(str) {
    return str.split("").filter(a=>a=='a'||a=='e'||a=='i'||a=='o'||a=='u').length;
}

// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
// }
//
// function getCount(str) {
//     return str.replace(/[^aeiou]/gi, '').length;
// }