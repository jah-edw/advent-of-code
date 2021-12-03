const fs = require('fs')

function dataToArr(filePathString) {
    let contentString = fs.readFileSync(filePathString).toString();
    let contentArr = contentString.split(/\n| /)
    return contentArr
}

module.exports = dataToArr