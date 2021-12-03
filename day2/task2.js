const fs = require('fs')

const dataToArr = require('./task1');

function deepSeeDiving (filePathString) {
    let arr = dataToArr(filePathString) 
    const directionArr = arr.filter( direction => direction === 'forward' || direction === 'up' || direction === 'down');
    const digits = /\d/
    const numberArr = arr.filter( number => number.match(digits)).map(Number)
    let aim = 0;
    let horPos = 0;
    let depth = 0;

    for (let i = 0; i < arr.length; i++) {
        if (directionArr[i] === 'forward')  {
            horPos = horPos + numberArr[i];
            depth =  depth + (aim * numberArr[i])
        }
        if (directionArr[i] === 'up')  aim = aim - numberArr[i]
        if (directionArr[i] === 'down')  aim = aim + numberArr[i]
    }
    return horPos * depth

}


console.log(deepSeeDiving("data.txt"))


