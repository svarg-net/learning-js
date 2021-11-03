function isVow(a){
    return a.map(n=>n='aeiou'.includes(String.fromCharCode(n))?String.fromCharCode(n):n)
}