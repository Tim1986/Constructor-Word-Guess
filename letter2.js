function Letter(str) {
    this.str = str;
    this.guessed = false;
    this.isSpace = false;
    if (str === " ") {
        this.isSpace = true;
        this.guessed = true;
    }
    this.toString = function () {
        if (this.guessed === true && this.isSpace === false) {
            return this.str
        } else if (this.guessed === false && this.isSpace === false) {
            return "_"
        } else if (this.isSpace === true) {
            return "   "
        }
    }
    this.check = function (input) {
        if (input === this.str) {
            this.guessed = true;
        }
    }
}

// var test = new Letter("a")
// console.log(test)
// console.log(test.toString())

module.exports = Letter