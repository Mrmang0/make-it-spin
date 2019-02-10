import Line from '../additional/Line'

export class DrawLine {
    constructor(context, startPoint, endPoint) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.context = context;
    }
    /**
     * Legacy method
     */
    draw() {
        this.context.lineWidth = 4;
        this.context.beginPath();
        this.context.moveTo(this.startPoint.X, this.startPoint.Y);
        this.context.lineTo(this.endPoint.X, this.endPoint.Y);
        this.context.stroke();
    }

    GetLineArray(points) {
        const lines = [];
        for (let i = 0; i < points.length; i++) {
            if (i == points.length - 1)
            {
                lines.push(new Line(points[i], points[0]))
                break;
            }
              
            lines.push(new Line(points[i], points[i + 1]))

        }
        return lines;
    }
}

const LineUtilities = new DrawLine()
export default LineUtilities;