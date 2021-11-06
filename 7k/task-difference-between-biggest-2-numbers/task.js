function diffBig2(arr) {
    let max=Math.max(...arr)
    let max2=Math.min(...arr)
    arr.splice(arr.indexOf(max),1)
    arr.map(a=>{
        a<=max&&a>max2?max2=a:''
    })
    return max-max2
}

// const diffBig2 = arr => {
//     let max = Math.max(...arr);
//     arr.splice(arr.indexOf(max), 1);
//     return max - Math.max(...arr);
// }
//
// function diffBig2(arr) {
//     let [a,b] = arr.reduce( ([a,b],v) => v>a? [v,a] : [a, Math.max(b,v)], [-1/0,-1/0] );
//     return a-b
// }