function correct(string)
{
    let str=''
    string.split("").map(i=>{
        console.log(i)
        if(i==='0'){
            str+='O'
        }else if(i==5){
            str+='S'
        }else if(i==1){
            str+='I'
        }else{
            str+=i
        }
    })
    return str
}

// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
//
// const corrections = {
//     '5': 'S',
//     '0': 'O',
//     '1': 'I',
// };
//
// const correct = string => (
//     string.replace(/[501]/g, character => corrections[character])
// );