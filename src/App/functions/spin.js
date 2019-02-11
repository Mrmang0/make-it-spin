import Canvas from '../classes/Canvas'
import Iterator from '../classes/processing/Iterator';
import rotate from '../classes/Geometry/Rotate'
import Point from '../classes/additional/Point';
import Circle from '../classes/additional/Circle';
import Line from '../classes/geometry/Line'
import {
    getRndInteger
} from './misceleneous';


export default function spin() {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('spin', 'regular-canvas', 1000, 800, wrapper)
    const iterator = new Iterator(Math.PI / 100, 2 * Math.PI, Math.PI / 100)
    const radius = 100;


    canvas.pipeline.setTickDelay(10)
    canvas.pipeline.add(() => {
        const circles = [
            new Circle(new Point(300, 300), radius),
            new Circle(new Point(600, 300), radius),
            new Circle(new Point(600, 600), radius),
            new Circle(new Point(300, 600), radius),

        ];

        const circlePoints = [];
        canvas.clear();
        // let angle = iterator.get()
        circles.map(x => {
            let v = getRndInteger(-1, 1)
            if (v == 0)
                v = 1;

            x.currentPoint = rotate.spinAroundCenter(x.currentPoint, x.center, iterator.get(), v);
            circlePoints.push(x.currentPoint);
        })

        const lines = Line.GetLineArray(circlePoints);
        canvas.beginPath();
        lines.map(x => {
            canvas.moveTo(x.startPoint);
            canvas.lineTo(x.endPoint);
        })
        canvas.stroke();
    }, 10, x => false)

}