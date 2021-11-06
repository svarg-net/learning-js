String.prototype.toJadenCase = function () {
    return this.toLowerCase().split(' ').map(s=>s.charAt(0).toUpperCase()+s.substring(1)).join(' ');
};

// String.prototype.toJadenCase = function () {
//     return this.split(" ").map(function(word){
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
// }
//
// String.prototype.toJadenCase = function () {
//     return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
// };