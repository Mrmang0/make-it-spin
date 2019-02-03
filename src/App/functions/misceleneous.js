import Iterator from '../classes/processing/Iterator'

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRndColor() {
    return `${getRndInteger(1,255)},${getRndInteger(1,255)},${getRndInteger(1,255)}`;
}

export function setRandomLineColor(context) {
    const ite = new Iterator(1.0, 1.0);
    setLineColor(
        context,
        getRndColor(), 1)
}

export function setWhiteLineColor(context) {
    setLineColor(
        context,
        '255,255,255', 1)
}

export async function setLineColor(context, rgb, a) {
    context.strokeStyle = `rgba(${rgb},${a})`;
}

export function setLineWidth(context,val)
{
    context.lineWidth = val;
}