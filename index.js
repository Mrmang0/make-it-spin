let state = {
    canvas: null,
    context: null,
    delay: 500,


    angle: {
        value: Math.PI,
        get: () => {
            return this.value + 0, 2;
        },
    },



    misc: {
        getRndInteger: (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min;
        },

        getRndColor: function () {
            return `${this.getRndInteger(1,255)},${this.getRndInteger(1,255)},${this.getRndInteger(1,255)}`;
        },

        setRandomLineColor: () => {
            const ite = new state.classes.Iterator(1.0, 1.0);
            state.setLineColor(
                state.misc.getRndColor(), ite.get())
        },

        setWhiteLineColor: () => {
            const ite = new state.classes.Iterator(0.1, 1.0);
            state.setLineColor(
                '255,255,255', ite.get())
        },

        setLineColor: (color) => {
            const ite = new state.classes.Iterator(0.1, 1.0);
            state.setLineColor(
                color, ite.get())
        }
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
    },

    testDraw: async function () {
        setInterval(() => {
            const seed = this.iterator.get();
            this.context.strokeStyle = `rgba(${state.misc.getRndColor()},${seed/10})`;
            this.context.strokeRect(900, 500, 100, 100);
        }, this.delay)
    },

    setLineColor: async function (rgb, a) {
        this.context.strokeStyle = `rgba(${rgb},${a})`;
    },

    testRotation: async function () {
        setInterval(() => {
            this.context.rotate(state.angle.get());
        }, this.delay);

    },

    singleTranslate: async function () {
        const movX = 1.1;
        const movY = 1;
        this.context.translate(movX, movY);
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

                state.WrapIntoInterval(() => {
                    if (this.iterator.peek() >= 2 * Math.PI)
                        return
                    state.context.beginPath();
                    if (this.additionalFunc) {
                        this.additionalFunc();
                    }
                    state.context.arc(this.x, this.y, this.radius, this.iterator.get(), this.iterator.get());
                    this.currentPoint = this.iterator.peek();
                    state.context.stroke();
                }, state.delay / this.x * this.radius);

            }

            getCurrentPoint() {
                const angle = this.currentPoint;
                const center = {
                    x: this.x + this.radius,
                    y: this.y + this.radius
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
                console.log(state.context);
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
                if (this.iterator > this.limitator)
                    this.iterator = this.startValue;
                this.iterator = this.iterator + this.customIncrement;
                return this.iterator;
            }
        },
    },
    WrapIntoInterval: (callFunction, delay) => {
        setInterval(() => {
            callFunction();
        }, delay);
    }

}



state.initialize();
// state.context.strokeRect(200, 200, 200, 200)
// state.testDraw();

// let a = new state.classes.Arc(200, 200, 50,
//     new state.classes.Iterator(Math.PI / 100, 2 * Math.PI, Math.PI / 100),
//     state.misc.setRandomLineColor)


const Circles = [];
for (let i = 1; i < 6; i++) {
    Circles.push(new state.classes.Arc(i * 85, i * 65, i * 10 + 5,
        new state.classes.Iterator(Math.PI / 100, 2 * Math.PI, Math.PI / 100),
        ()=>{state.misc.setLineColor('0,0,0')}))
    Circles[i - 1].draw();
}


// const b = new state.classes.Line( Circles[1].getCurrentPoint(),Circles[2].getCurrentPoint());


state.WrapIntoInterval(() => {
    for (let i = 0; i < 4; i++) {
       
        const a = new state.classes.Line(Circles[i].getCurrentPoint(), Circles[i + 1].getCurrentPoint());
        state.misc.setWhiteLineColor();
        a.draw();
    }

}, state.delay + 1);

// state.testTranslate();
// state.testRotation();
// state.testTranslate();