/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let obj = {};
    for (let i=0; i<this.words.length; i++) {
      for(let y=i+1; y<(this.words.length-(i+1)); y++) {
        if (this.words[i+1]) {
          obj[this.words[i]] = this.words[y]
        } else if (this.words[i+1] == undefined) {
          obj[this.words[i]] = 'NULL'
        }
      }
    }

    let keyz = Object.keys(obj)
    let valz = Object.values(obj)

    for (let i=0; i<keyz.length; i++) {
      for (let y=0; y<valz.lengh; y++) {
        if (keyz[i] == valz[i][y]) {
          valz[i].splice(y, 1);
        }
      }
    }

    let newObj = {}

    for (let i=0; i<keyz.length; i++) {
        newObj[keyz[i]] = valz[i]
    }

    return newObj
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let obj = this.makeChains()
    let arr = []
    let keyz = Object.keys(obj)
    let valz = Object.values(obj)

    for (let i=0; i<numWords; i++) {
      let randInt = Math.floor(Math.random() * Object.keys(obj).length);
      for (let x=randInt; x<1; x++) { 
        let randInt2 = Math.floor(Math.random() * Object.valz(obj)[x].length)
        let word = Object.valz(obj)[x][randInt2]
        if (word == arr[i-1]) {
          let randInt3 = Math.floor(Math.random() * Object.valz(obj)[x].length)
          word = Object.valz(obj)[x][randInt3]
          arr.push(word)
        } else if (word == 'NULL') {
          arr.push(word)
          break
        } else {
          arr.push(word)
        }
      }
    }

    let str = arr.toString()
    return str
  }


}

module.exports = { markovMachine };
