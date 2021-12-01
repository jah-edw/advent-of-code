const fs = require('fs')

function dataToArr(filePathString){
    let contentString = fs.readFileSync(filePathString).toString();
    let contentArr = contentString.split('\n').map((i) => Number(i));
    return contentArr
}


function counter(array) {
    let count = 0;
    for(let i =0; i < array.length; i++) {
        if (array[i] > array[i-1]) count++
    }
    return count 
}

module.exports = {counter, dataToArr};
 