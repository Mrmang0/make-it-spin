import Pipeline from './processing/Pipeline'
import Point from './additional/Point';

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
        this.center = new Point(width / 2, height / 2)
        parent.appendChild(this.canvas);
        this.getContext();
        this.setStyle();
        this.pipeline = new Pipeline(30);

    }

    setStyle() {
        this.color = `255,255,255`
        this.opacity = 1
        this.context.strokeStyle = `rgba(${this.color},${this.opacity})`
        this.context.globalAlpha = 1.0;
        this.context.lineWidth = 4;
    }

    setColor(color) {
        this.color = color;
        this.context.strokeStyle = `rgba(${color},${this.opacity})`
    }

    setOpacity(opacity) {
        this.opacity= opacity
        this.context.strokeStyle = `rgba(${this.color},${opacity})`
    }

    getContext(demension = '2d') {
        this.context = this.canvas.getContext(demension);
    }

    moveTo(point) {
        this.context.moveTo(point.X, point.Y);
    }

    lineTo(point) {
        this.context.lineTo(point.X, point.Y);
    }

    beginPath() {
        this.context.beginPath();
    }

    stroke() {
        this.context.stroke();
    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}