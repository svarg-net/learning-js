// return masked string
function maskify(cc) {
    let result='';
    arr=cc.split("");
    if(arr.length-4>0){
        console.log(arr.length-4);
        for(let i=0;i<arr.length-4;i++){
            arr[i]='#';

        }
        result=arr.join("")
    }
    else{
        console.log(arr);
        result=cc
    }

    return result
}

// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }

// function maskify(cc) {
//     return cc.replace(/.(?=.{4})/g, "#");
// }
//
// maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);