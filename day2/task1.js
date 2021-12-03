const dataToArr = require('./helperFunc')

function depthPerception(fileNameString) {
    let arr = dataToArr(fileNameString)
    let forward = [];
    let up = [];
    let down = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'forward') forward.push(arr[i + 1])
        if (arr[i] === 'up') up.push(arr[i + 1])
        if (arr[i] === 'down') down.push(arr[i + 1])
    }

    let finalUp = up.map(Number).reduce((prev, current) => prev + current)
    let finalDown = down.map(Number).reduce((prev, current) => prev + current)
    let finalDistance = forward.map(Number).reduce((prev, current) => prev + current)

    return (finalDown - finalUp) * finalDistance;
}

console.log(depthPerception("data.txt"))