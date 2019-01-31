let state = {
    canvas: null,
    context: null,
    mainPipeline: null,

    misc: {
        getRndInteger: (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
        },

        getRndColor: function () {
            return `${this.getRndInteger(1,255)},${this.getRndInteger(1,255)},${this.getRndInteger(1,255)}`;
        },

        setRandomLineColor: () => {
            const ite = new state.classes.Iterator(1.0, 1.0);
            state.misc.setLineColor(
                state.misc.getRndColor(), 1)
        },

        setWhiteLineColor: () => {
            state.misc.setLineColor(
                '255,255,255', 1)
        },

        setLineColor: async function (rgb, a) {
            state.context.strokeStyle = `rgba(${rgb},${a})`;
        },
    },

    screenResolutionCounter: function () {
        const width = window.screen.width;
        const height = window.screen.height;

        for (let i = 1; i < width / 20; i++) {
            for (let j = 1; j < height / 20; j++) {
                if (width / i === height / j)
                    return {
                        width: i,
                        height: j
                    }
            }

        }
    },

    initialize: function () {
        const resolution = this.screenResolutionCounter();
        this.canvas = document.getElementById('main-canvas')
        this.canvas.height = resolution.height * 100;
        this.canvas.width = resolution.width * 100;
        this.context = this.canvas.getContext('2d');
        this.context.strokeStyle = 'rgba(255,255,255,1.0)'
        this.context.globalAlpha = 1.0;
        this.context.lineWidth = 10;
        this.mainPipeline = new this.classes.Pipeline(100);
    },

    classes: {
        Arc: class DrawArc {
            constructor(x, y, radius, iterator, additionalFunc) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.iterator = iterator;
                this.additionalFunc = additionalFunc;
                this.currentPoint;
            }

            draw() {
                if (this.iterator.peek() >= 2 * Math.PI)
                    return
                state.context.beginPath();
                if (this.additionalFunc) {
                    this.additionalFunc();
                }
                state.context.arc(this.x, this.y, this.radius, this.iterator.get(), this.iterator.get());
                this.currentPoint = this.iterator.peek();
                state.context.stroke();
            }

            getCurrentPoint() {
                const angle = this.currentPoint;
                const center = {
                    x: this.x,
                    y: this.y 
                }

                const X = center.x + (this.radius * Math.cos(angle));
                const Y = center.y + (this.radius * Math.sin(angle));
                return {
                    X,
                    Y
                };
            }
        },

        Line: class DrawLine {
            constructor(startPoint, endPoint) {
                this.startPoint = startPoint;
                this.endPoint = endPoint;
            }

            draw() {
                state.context.lineWidth = 2;
                state.context.beginPath();
                state.context.moveTo(this.startPoint.X, this.startPoint.Y);
                state.context.lineTo(this.endPoint.X, this.endPoint.Y);
                state.context.stroke();
            }

        },

        Iterator: class Iterator {

            constructor(val, lim, customInc) {
                this.startValue = val;
                this.iterator = this.startValue;
                this.limitator = lim;
                this.Wrapper;
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
                console.log(this.iterator + this.customIncrement);
                return this.iterator;
            }
        },

        Pipeline: class Pipeline {
            constructor(tickDelay) {
                if (tickDelay)
                    this.tickDelay = tickDelay;
                else
                    this.tickDelay = 100;
                this.functions = [];
                this.startPipeline();
                this.interval;

            }

            startPipeline() {
                const _this = this;
                this.interval = setInterval(() => {
                    for (let func of _this.functions) {
                        if (func.currentIteration == func.iterations - 1)
                            this.functions.splice(
                                this.functions.indexOf(func)
                            );

                        func.execute();
                        func.currentIteration++;
                    }
                }, this.tickDelay);
            }

            addFunction(func, iterations = -1) {
                this.functions.push({
                    execute: func,
                    iterations: iterations,
                    currentIteration: 0
                })
            }

            stopPipeline() {
                clearInterval(this.interval);
            }
        },
    },


}

state.initialize();
state.mainPipeline.stopPipeline();
const Circles = [];


for (let i = 1; i < 3; i++) {
    Circles.push(
        new state.classes.Arc(i * 100 * i, i * 10 * i, i * 10 + 5,
            new state.classes.Iterator(Math.PI / 100, 2 * Math.PI, Math.PI / 100),
            () => {
                state.misc.setLineColor(`255,255,255`, 1)
            }))
}

for (let i = 0; i < 1; i++) {
    // const it = new state.classes.Iterator(0.8, 0.1, -0.01);
    state.mainPipeline.addFunction(Circles[i].draw.bind(Circles[i]), 101);
    state.mainPipeline.addFunction(Circles[i + 1].draw.bind(Circles[i + 1]), 101);
    state.mainPipeline.addFunction(() => {
        state.misc.setLineColor("255,0,0", 0.5);
        new state.classes.Line(Circles[i].getCurrentPoint(),
            Circles[i + 1].getCurrentPoint()).draw();
    }, 101);

}

state.mainPipeline.startPipeline();