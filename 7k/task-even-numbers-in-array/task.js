function evenNumbers(array, number) {
    let temp_arr=[];
    array.map((a)=>{
        if(a%2==0)
            temp_arr.push(a)
    })
    temp_arr.splice(0,temp_arr.length-number)
    return temp_arr
}