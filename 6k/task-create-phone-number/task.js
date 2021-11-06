function createPhoneNumber(numbers){
    let str=numbers.join("")
    v1=str.slice(0,3);
    v2=str.slice(3).slice(0,3);
    v3=str.slice(6)
    return "("+v1+") "+v2+"-"+v3
}


// function createPhoneNumber(numbers){
//     return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
// }
//
// function createPhoneNumber(numbers){
//     var format = "(xxx) xxx-xxxx";
//
//     for(var i = 0; i < numbers.length; i++)
//     {
//         format = format.replace('x', numbers[i]);
//     }
//
//     return format;
// }