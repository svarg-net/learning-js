function lastDigit(n, d) {
    let arr=n.toString()
    if(arr.length<d){
        return arr.split('').map((a)=>parseInt(a))
    }
    else if(d>0){
        return (arr.slice(arr.length-d,arr.length).split('').map((a)=>parseInt(a)))
    }else
        return []
}

// function lastDigit(n, d) {
//     const nums = String(n).split('').map(Number);
//     const len = nums.length;
//     let index = 0;
//     return nums.filter(el => index++ >= len - d);
// }
//
// function lastDigit(n, d) {
//     const arr = [...n+[]].map(Number)
//     return arr.slice( d > arr.length ? 0 : arr.length - d, )
// }