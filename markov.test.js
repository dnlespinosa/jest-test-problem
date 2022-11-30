const { markovMachine } = require("./markov")

describe('testing markov length', function() {
    beforeEach(function() {
        let mm = new markovMachine()
        let str = 'the cat in the hat'
        let arr = str.split(' ')
    })

    test('object length', function() {
        let obj = mm.makeChains(str)
        expect(Object.keys(obj).length).toEqual(arr.length)
    })
    test('last object null', function() {
        let obj = mm.makeChains(str)
        let keyz = Object.keys(obj)
        let valz = Object.values(obj)

        expect(obj.key[keyz.length-1][valz.length-1]).toBe('NULL')
    })
})