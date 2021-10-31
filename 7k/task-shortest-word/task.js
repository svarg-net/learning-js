function findShort(s){
    const arr = s.split(" ")
    let min=arr[0].length;
    arr.map((s)=>{
        console.log(s.length,min)
        if(s.length<min)
            min=s.length
    })
    return min;
}