export default class DrawLine {
    constructor(context,startPoint, endPoint) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.context = context;
    }

    draw() {
        this.context.lineWidth = 4;
        this.context.beginPath();
        this.context.moveTo(this.startPoint.X, this.startPoint.Y);
        this.context.lineTo(this.endPoint.X, this.endPoint.Y);
        this.context.stroke();
    }
}