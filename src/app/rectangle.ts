export class Rectangle {
    height: string;
    width: string;
    style: string;
    x: number;
    y: number;
    transform =`translate(${this.x}, ${this.y})`;
}