export default class Pipeline {
    constructor(tickDelay) {
        if (tickDelay)
            this.tickDelay = tickDelay;
        else
            this.tickDelay = 100;
        this.functions = [];
        this.interval;
        this.startPipeline();


    }

    startPipeline() {
        const _this = this;
        this.interval = setInterval(() => {
            for (let func of _this.functions) {
                if (func.stopCondition()) {
                    this.functions.splice(
                        this.functions.indexOf(func)
                    );
                }
                else{
                    func.execute();
                    func.currentIteration++;
                }
                
            }
        }, this.tickDelay);
    }

    add(
        func,
        iterations = -2,
        stopCondition = function () {
            if (this.currentIteration >= iterations)
                return true
            return false
        }
    ) {
        this.functions.push({
            execute: func,
            iterations: iterations,
            currentIteration: 0,
            stopCondition: stopCondition
        })
    }

    stopPipeline() {
        clearInterval(this.interval);
    }

    setTickDelay(delay) {
        this.stopPipeline();
        this.tickDelay = delay;
        this.startPipeline();
    }
}