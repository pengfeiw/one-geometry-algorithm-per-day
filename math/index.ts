import Vector2d from "./Vecrtor2d";

export const isVector2dParallel = (vec1: Vector2d, vec2: Vector2d) => {
    if (vec1.cross(vec2) === 0) {
        return true;
    }

    return false;
}
