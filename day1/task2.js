const fs = require('fs')
const {counter, dataToArr} = require ('./task1')


function windowCounter(fileNameString){
    const content = dataToArr(fileNameString)
    let newArr = []
    for(let i =0; i < content.length -2 ; i++) {
        let element = content[i] + content[i+1] + content[i+2]
        newArr.push(element)
    }
    return counter(newArr)
}

