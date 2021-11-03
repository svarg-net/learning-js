var Calculator = {
    average: function(...arg) {
        // Your code here...
        let sum=0
        arg.length!=0?arg.map((a)=>sum+=a):sum=0
        return sum>0?sum/arg.length:sum
    }
};

//best
// var Calculator = {
//     average: function() {
//
//         return Array.prototype.slice.call(arguments).reduce(function(prev, next) {
//             return prev + next;
//         }, 0) / (arguments.length || 1);
//     }
// };