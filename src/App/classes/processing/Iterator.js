export default class Iterator {
    constructor(val, lim, customInc) {
        this.startValue = val;
        this.iterator = this.startValue;
        this.limitator = lim;
        this.rounds = 0;
        this.reachedMax = false;
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
            if (this.iterator > this.limitator) {
                this.iterator = this.startValue;
                this.rounds++;
            }
        } else {
            if (this.iterator < this.limitator) {
                this.iterator = this.startValue;
                this.rounds++;
            }
        }
        this.iterator = this.iterator + this.customIncrement;
        return this.iterator;
    }

    getSmooth() {
       if(this.iterator>=this.limitator && this.rounds%2==0 )
            this.rounds++
        else if(this.iterator<=this.startValue && this.rounds%2!=0)
            this.rounds++;
        if(this.iterator < this.limitator && this.rounds%2==0)
            this.iterator+= this.customIncrement;
            else
            this.iterator-=this.customIncrement
            console.log(this.iterator);
            console.log(this.rounds)
        return this.iterator;
    }
}