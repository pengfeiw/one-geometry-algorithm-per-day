type Interval = {
    min: number;
    max: number;
}

const intervalIntersect = (interval1: Interval, interval2: Interval) => {
    if (interval1.min > interval2.max || interval1.max < interval2.min) {
        return true;
    }

    return false;
};

export {intervalIntersect}
export default Interval;
