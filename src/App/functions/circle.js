import Canvas from '../classes/Canvas'
import {DrawLine as Line} from '../classes/geometry/Line'
import Iterator from '../classes/processing/Iterator'
import {
    setLineColor
} from '../functions/misceleneous'

export default function circle() {
    const lines = [];
    const length = 200;    
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('fan', 'regular-canvas', 1000, 800,wrapper);
    const iterator = new Iterator(1, length, 1);
    canvas.context.translate(canvas.center.X, canvas.center.Y);
    setLineColor(canvas.context,"255,255,255", 0.01);
    canvas.pipeline.setTickDelay(5);
    canvas.pipeline.add(() => {
        const line = new Line(canvas.context,{
            X: 0,
            Y: 0
        }, {
            X: iterator.peek(),
            Y: iterator.get()
        });

        if (lines.length >= 3) {

            new Line(canvas.context,lines[0], {
                X: (iterator.peek() + length) * Math.cos(Math.PI / 4),
                Y: iterator.get()
            }).draw();
        } else {

        }

        if (iterator.peek() == length) {
            canvas.context.rotate(Math.PI / 12);
            lines.push(line.endPoint);
        }


    }, 0, () => {
        return false
    })
}