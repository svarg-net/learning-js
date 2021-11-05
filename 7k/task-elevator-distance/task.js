function elevatorDistance(array) {
    // your code here
    let sum=0
    for (let i=0; i<array.length-1;i++){
        sum+=Math.abs(array[i]-array[i+1])
    }
    return sum
}

// function elevatorDistance(array) {
//     return array.slice(1).reduce((s,n,i)=>s+Math.abs(n-array[i]),0)
// }
//
// const elevatorDistance = ($) => $.slice(1).map((el, i)=> Math.abs($[i] - el)).reduce((a, b)=> a + b, 0)