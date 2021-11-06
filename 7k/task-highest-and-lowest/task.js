function highAndLow(numbers){
    let max,  min;
    numbers.split(" ").map((n)=>{
        n=parseInt(n);
        if(!max){
            max=n;
            min=n
        }
        if(max<n)max=n;
        if(min>n)min=n;
    })
    return max+" "+min
}