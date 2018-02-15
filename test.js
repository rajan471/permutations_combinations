const Combinatorics = require('js-combinatorics');

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

let time1 = (new Date()).getMilliseconds();

let cmb = Combinatorics.permutation(array, 4);

let time2 = (new Date()).getMilliseconds();

let permutations = cmb.toArray();

permutations.forEach((p)=>{
    console.log(p);
})

console.log(time1, time2, (new Date(time2 - time1)).getMilliseconds());