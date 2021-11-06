function rentalCarCost(d) {
    const priceCar=40
    if(d<3){
        return d*priceCar
    }else if(d>=3&&d<7){
        return d*priceCar-20
    }else if(d>=7){
        return d*priceCar-50
    }
}
//
// function baseCost(days, rate) {
//     return days * rate;
// }
//
// function discountRate(days) {
//     if ( days >= 7 ) {
//         return 50;
//     }
//     else if ( days >= 3 ) {
//         return 20;
//     }
//     else {
//         return 0;
//     }
// }
//
// function rentalCarCost(days) {
//     return baseCost(days, 40) - discountRate(days);
// }
//
// const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));