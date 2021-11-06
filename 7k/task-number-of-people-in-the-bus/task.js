var number = function(busStops){
    let people=0
    busStops.map(a=>people+=a[0]-a[1])
    return people
}

//const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
// const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)