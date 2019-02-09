
export default class DrawArc {
    constructor(context, x, y, radius, iterator, additionalFunc) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.iterator = iterator;
        this.additionalFunc = additionalFunc;
        this.currentPoint;
        this.context = context;
    }

    draw() {
        if (this.iterator.peek() >= 2 * Math.PI)
            return
        this.context.beginPath();
        if (this.additionalFunc) {
            this.additionalFunc();
        }
        this.context.arc(this.x, this.y, this.radius, this.iterator.get(), this.iterator.get());
        this.currentPoint = this.iterator.peek();
        this.context.stroke();
    }

    getCurrentPoint() {
        const angle = this.currentPoint;
        const X = this.x + (this.radius * Math.cos(angle));
        const Y = this.y + (this.radius * Math.sin(angle));
        return {
            X,
            Y
        };
    }
}