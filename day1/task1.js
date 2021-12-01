const fs = require('fs')
let contentString = fs.readFileSync("data.txt").toString()
let contentArr = contentString.split('\n').map((i) => Number(i));

function counter(array) {
    let count = 0;
    for(let i =0; i < array.length; i++) {
        if (array[i] > array[i-1]) count++
    }
    return count 
}


console.log(counter(contentArr))

