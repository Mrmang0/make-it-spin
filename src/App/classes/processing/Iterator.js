export default class Iterator {
    constructor(val, lim, customInc) {
        this.startValue = val;
        this.iterator = this.startValue;
        this.limitator = lim;
        if (customInc)
            this.customIncrement = customInc;
        else
            this.customIncrement = 1;
    }

    peek() {
        return this.iterator
    }

    get() {
        if (this.customIncrement > 0) {
            if (this.iterator > this.limitator)
                this.iterator = this.startValue;
        } else {
            if (this.iterator < this.limitator)
                this.iterator = this.startValue;
        }
        this.iterator = this.iterator + this.customIncrement;
        return this.iterator;
    }
}