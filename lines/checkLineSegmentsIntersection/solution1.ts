import LineSegment from "../../math/LineSegment";
import {intervalIntersect} from "../../math/Interval";

export const solution = (ls1: LineSegment, ls2: LineSegment) => {
    const ls1IntervalX = {min: Math.min(ls1.start.x, ls1.end.x), max: Math.max(ls1.start.x, ls1.end.x)};
    const ls1IntervalY = {min: Math.min(ls1.start.y, ls1.end.y), max: Math.max(ls1.start.y, ls1.end.y)};
    const ls2IntervalX = {min: Math.min(ls2.start.x, ls2.end.x), max: Math.max(ls2.start.x, ls2.end.x)};
    const ls2IntervalY = {min: Math.min(ls2.start.y, ls2.end.y), max: Math.max(ls2.start.y, ls2.end.y)};

    // 检测两条线段的区间是否相交，如果区间不相交，线段肯定不相交
    if (intervalIntersect(ls1IntervalX, ls2IntervalX) === false || intervalIntersect(ls1IntervalY, ls2IntervalY) === false) {
        return false;
    }

    // 设线段的方程为 f(x) = ax + b，分别求出 ls1 和 ls2 的 a 和 b
    const a1 = (ls1.start.y + ls1.end.y) / (ls1.start.x + ls1.end.x);
    const b1 = (ls1.start.x * ls1.end.y - ls1.start.y * ls1.end.x) / (ls1.start.x + ls1.end.x);
    const a2 = (ls2.start.y + ls2.end.y) / (ls2.start.x + ls2.end.x);
    const b2 = (ls2.start.x * ls2.end.y - ls2.start.y * ls2.end.x) / (ls2.start.x + ls2.end.x);

    // 判断两条线相交，就是求 a1x + b1 = ax2 + b2 时 x 的值
    const intersectX = (b2 - b1) / (a1 - a2);
    const intersectY = a1 * intersectX + b1;

    // 判断交点是否在线段的区间内
    if (intersectX >= ls1IntervalX.min && intersectX <= ls1IntervalX.max
        && intersectY >= ls1IntervalY.min && intersectY <= ls1IntervalY.max) {
            return true;
    }
    return false;
};
