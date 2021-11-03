function sumTriangularNumbers(n) {
    let ar = [];
    let result = 0
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            if (i > 1) {
                let j = i - 2;
               ar.push(i + ar[j]);
                ;
            } else {
                ar.push(i)
            }
        }
        result = ar.reduce((a, b) => a + b);
    }
    return result
}

// function sumTriangularNumbers(n) {
//     return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
// }
//
// function sumTriangularNumbers(n) {
//     var sum = 0;
//     for(var i = 1; i <= n; i++)
//     {
//         sum += (i*(i+1))/2;
//     }
//     return sum;
// }
