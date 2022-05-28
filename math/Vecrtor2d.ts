import Point2d from "./Point2d";

class Vector2d {
    x: number;
    y: number;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize() {
        return new Vector2d(this.x / this.length, this.y / this.length);
    }

    /**
     * 注意：这里返回的是一个数值，在三维向量中返回向量。
     */
    cross(vec: Vector2d) {
        return this.x * vec.y - this.y * vec.x;
    }
    static createByPoint(start: Point2d, end: Point2d) {
        return new Vector2d(end.x - start.x, end.y - start.y);
    }
}


export default Vector2d;
