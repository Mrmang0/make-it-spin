import Pipeline from './processing/Pipeline'

export default class Canvas {
    constructor(
        id,
        className,
        width,
        height,
        parent = document.getElementsByTagName('body')[0]
    ) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.classList.add(className);
        this.canvas.id = id;
        parent.appendChild(this.canvas);
        this.getContext();
        this.setStyle();
        this.pipeline = new Pipeline(100);

    }

    setStyle() {
        this.context.strokeStyle = 'rgba(255,255,255,1.0)'
        this.context.globalAlpha = 1.0;
        this.context.lineWidth = 10;
    }



    getContext(demension = '2d') {
        this.context = this.canvas.getContext(demension);
    }

}

// canvas: null,
//     context: null,
//     mainPipeline: null,

//     misc: {
//         getRndInteger: (min, max) => {
//             return Math.floor(Math.random() * (max - min)) + min;
//         },

//         getRndColor: function () {
//             return `${this.getRndInteger(1,255)},${this.getRndInteger(1,255)},${this.getRndInteger(1,255)}`;
//         },

//         setRandomLineColor: () => {
//             const ite = new state.classes.Iterator(1.0, 1.0);
//             state.misc.setLineColor(
//                 state.misc.getRndColor(), 1)
//         },

//         setWhiteLineColor: () => {
//             state.misc.setLineColor(
//                 '255,255,255', 1)
//         },

//         setLineColor: async function (rgb, a) {
//             state.context.strokeStyle = `rgba(${rgb},${a})`;
//         },
//     },

//     screenResolutionCounter: function () {
//         const width = window.screen.width;
//         const height = window.screen.height;

//         for (let i = 1; i < width / 20; i++) {
//             for (let j = 1; j < height / 20; j++) {
//                 if (width / i === height / j)
//                     return {
//                         width: i,
//                         height: j
//                     }
//             }

//         }
//     },

//     initialize: function () {
//         const resolution = this.screenResolutionCounter();
//         this.canvas = document.getElementById('main-canvas')
//         if (resolution) {
//             this.canvas.height = resolution.height * 100;
//             this.canvas.width = resolution.width * 100;
//         } else {
//             this.canvas.height = 800;
//             this.canvas.width = 500;
//         }
//         this.context = this.canvas.getContext('2d');
//         this.context.strokeStyle = 'rgba(255,255,255,1.0)'
//         this.context.globalAlpha = 1.0;
//         this.context.lineWidth = 10;
//         this.mainPipeline = new this.classes.Pipeline(50);
//     },