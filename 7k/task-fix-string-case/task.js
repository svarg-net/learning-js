function solve(s){
    let iUp=[];
    let iLow=[];
    let i=0;
    for(i; i<s.length;i++)
        s[i]==s[i].toUpperCase()?iUp.push(i):iLow.push(i)
    console.log(iUp);
    console.log(iLow);
    let arr=s.split("");
    iUp.length<=iLow.length?iUp.map((i)=>{arr.splice(i,1,s[i].toLowerCase())}):iLow.map((i)=>{arr.splice(i,1,s[i].toUpperCase())})
    // console.log(s.replaceAt(3,s[i].toUpperCase()))
    return arr.join("");
}

//решение через регулярное выражение
//const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()