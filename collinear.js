
function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        let v = key instanceof Function ? key(x) : x[key];
        let el = rv.find((r) => r && r.key === v);
        if (el) {
            el.values.push(x);
        } else {
            rv.push({ key: v, values: [x] });
        }
        return rv;
    }, []);
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    slopeWith(p) {
        return Math.abs((p.y - this.y) / (p.x - this.x));
    }

    compare(p) {
        return (p.y - this.y) || (p.x - this.x);
    }

    toString() {
        return "{ x : " + this.x + ", y: " + this.y + "}";
    }
}

function collinear(input) {
    const points = input.points.map(p => new Point(p.x, p.y));
    const lines = {};

    for (let i = 0; i<points.length; i++) {
        const thisPoint = points[i];
        const slopes = points.map(point => {
            return {
                slope: thisPoint.slopeWith(point),
                point: point,
            }
        }).sort((sA, sB) => sA.slope - sB.slope);

        const lineSegments = groupBy(slopes, 'slope')
            .filter(group => group.values.length > 2)
            .map(group => group.values.map(slope => slope.point))
            .map(points => points.concat([thisPoint])
                .sort((pA, pB) => pA.compare(pB)))
            .map(points => [points.shift(), points.pop()]);

        lineSegments.forEach(lineSegment => {
            const startPoint = lineSegment[0];
            lines[startPoint.x + "_" + startPoint.y] = lineSegment;
        });
    }

    return Object.values(lines);
}

module.exports = collinear;
