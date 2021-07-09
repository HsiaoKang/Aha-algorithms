function getNumbers(count) {
    return Array.from(new Array(count), (item, index) => index).sort((a, b) => {
        return a > Math.random() * 10 ? 1 : -1
    })
}

function createInterface(question='please input',callback) {
    var readline = require('readline')

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    rl.question(question, function (answer) {
        callback(answer)
        rl.close()
    })
}
module.exports = { getNumbers ,createInterface}
