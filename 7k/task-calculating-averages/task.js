var Calculator = {
    average: function(...arg) {
        // Your code here...
        let sum=0
        arg.length!=0?arg.map((a)=>sum+=a):sum=0
        return sum>0?sum/arg.length:sum
    }
};