function Letter(str) {
    this.str = str;
    this.guessed = false;
    this.toString = function() {
        if (this.guessed === true) {
            return this.str
        } else {
            return "_"
        }
    }
    this.check = function(input) {
        if (input === this.str) {
            this.guessed = true;
        }
    }
}

module.exports = Letter