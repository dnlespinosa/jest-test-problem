/** Command-line tool to generate Markov text. */

const fs = require('fs')
let file = 'eggs.txt'
const { markovMachine } = require('/.markov')

let mm = new markovMachine()

function eggs(path) {
    fs.readFile(path, utf8, (err, data) => {
        if (err) {
            console.log(`Error while reading ${path}`, err)
            process.kill(1)
        }

        let str = mm.makeText()
        return str

    })
}

eggs(file)