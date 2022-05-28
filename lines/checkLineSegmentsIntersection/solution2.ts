import LineSegment from "../../math/LineSegment";
import {intervalIntersect} from "../../math/Interval";
import Vector2d from "../../math/Vecrtor2d";
import * as MathUtil from "../../math";

export const solution = (ls1: LineSegment, ls2: LineSegment) => {
    const ls1IntervalX = {min: Math.min(ls1.start.x, ls1.end.x), max: Math.max(ls1.start.x, ls1.end.x)};
    const ls1IntervalY = {min: Math.min(ls1.start.y, ls1.end.y), max: Math.max(ls1.start.y, ls1.end.y)};
    const ls2IntervalX = {min: Math.min(ls2.start.x, ls2.end.x), max: Math.max(ls2.start.x, ls2.end.x)};
    const ls2IntervalY = {min: Math.min(ls2.start.y, ls2.end.y), max: Math.max(ls2.start.y, ls2.end.y)};

    // 检测两条线段的区间是否相交，如果区间不相交，线段肯定不相交
    if (intervalIntersect(ls1IntervalX, ls2IntervalX) === false || intervalIntersect(ls1IntervalY, ls2IntervalY) === false) {
        return false;
    }

    const vec1 = Vector2d.createByPoint(ls1.start, ls1.end);
    const vec2 = Vector2d.createByPoint(ls2.start, ls2.end);
    
    // 根据线段是否平行处理
    if (MathUtil.isVector2dParallel(vec1, vec2)) {
        const temVec = Vector2d.createByPoint(ls1.start, ls2.end);
        if (MathUtil.isVector2dParallel(vec1, temVec)) {
            return true;
        }
        return false;
    } else {
        const vec11 = Vector2d.createByPoint(ls1.end, ls2.start);
        const vec12 = Vector2d.createByPoint(ls1.end, ls2.end);

        // 根据叉积的乘积符号判断，如果旋转方向相同，符号为正
        if (vec1.cross(vec11) * vec1.cross(vec12) > 0) {
            return false;
        }

        const vec21 = Vector2d.createByPoint(ls2.end, ls1.start);
        const vec22 = Vector2d.createByPoint(ls2.end, ls1.end);
        if (vec2.cross(vec21) * vec2.cross(vec22) > 0) {
            return false;
        }

        return true;
    }
};
