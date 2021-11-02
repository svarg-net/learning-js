function doubleChar(str) {
    // Your code here
    let tempStr=''
    str.replace((a,b)=>a+a)
    console.log(str.split('').map(a=>tempStr+=a+a))
    return tempStr
}
