import Iterator from '../classes/processing/Iterator'
import {
    setLineColor,
    setLineWidth,
    setRandomLineColor
} from '../functions/misceleneous'
import Canvas from '../classes/Canvas'
import Line from '../classes/figures/Line'
import Arc from '../classes/figures/Arc'


export default function fourth() {
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const canvas = new Canvas('fan', 'regular-canvas', 1000, 600, wrapper);
    const Circles = [];

    for (let i = 1; i < 3; i++) {
        Circles.push(
            new Arc(canvas.context, i * 40 * i, i * 40 * i, i * 10 + 5,
                new Iterator(0.03 * Math.PI, 2 * Math.PI, Math.PI / 300),
                () => {
                    setLineColor(canvas.context, `255,255,255`, 1)
                }))
    }
    canvas.context.translate(canvas.center.X, canvas.center.Y);
    for (let i = 0; i < 1; i++) {
        const it = new Iterator(0.3, 0.01, -0.01);
        canvas.pipeline.add(Circles[i].draw.bind(Circles[i]), 0, () => false);
        canvas.pipeline.add(Circles[i + 1].draw.bind(Circles[i + 1]), 0, () => false);
        // canvas.pipeline.add(() => {
        //     state.misc.setLineColor("255,255,255", it.get());
        //     new state.classes.Line(Circles[i].getCurrentPoint(),
        //         Circles[i + 1].getCurrentPoint()).draw();
        // }, 101);

        canvas.pipeline.add(() => {
            setLineColor(canvas.context, "255,255,255", it.get());
            // setRandomLineColor(canvas.context);
            new Line(canvas.context, Circles[i].getCurrentPoint(),
                Circles[i + 1].getCurrentPoint()).draw();
            canvas.context.rotate(Math.PI / 12);
        }, 0, () => false);

    }
}