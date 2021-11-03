function century(year) {
    return year%100?Number.parseInt(year/100)+1:year/100;
}

//const century = year => Math.ceil(year/100)

// function century(year) {
//     return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
// }