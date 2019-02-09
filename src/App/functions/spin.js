import Canvas from '../classes/Canvas'
import Iterator from '../classes/processing/Iterator';
import rotate from '../classes/Geometry/Rotate'
import Point from '../classes/additional/Point';
import circle from './circle';
import Circle from '../classes/additional/Circle';


export default function spin() {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('spin', 'regular-canvas', 1000, 800, wrapper)
    const iterator = new Iterator(Math.PI / 100, 2 * Math.PI, Math.PI / 100)

    canvas.pipeline.add(() => {
        canvas.clear();
        let angle = iterator.get()
        const circles = [
            new Circle(new Point(200, 200), 75),
            new Circle(new Point(800, 200), 75),
            new Circle(new Point(200, 600), 75),
            new Circle(new Point(800, 600), 75)
        ]
        canvas.context.beginPath();
        circles.map(circle => {
            canvas.context.beginPath();
            canvas.moveTo(circle.center);
            circle.currentPoint = rotate.spinAroundCenter(circle.currentPoint, circle.center, angle);
            canvas.lineTo(circle.currentPoint);
           
            console.log("ok");
        })

        for (let i = 0; i < 4; i++) {
            if (i == 0) {
                canvas.context.beginPath();
                canvas.moveTo(circles[0].currentPoint)
            } else
            if (i == 3)
                canvas.lineTo(circles[0].currentPoint);
            else
                canvas.lineTo(circles[i].currentPoint);


        }
        canvas.context.stroke();

    }, 10, x => false)



}