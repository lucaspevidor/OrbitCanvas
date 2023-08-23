import { Vector2 } from "./Vector2";

export function CalculateGravitationalForce(m1: number, m2: number, p1: Vector2, p2: Vector2): Vector2 {
    const G = 2;
    const dFactor = 3;

    const d = p1.subtract(p2).scale(dFactor);
    const f = d.normalize().scale((G * m1 * m2 / (d.mag() ** 2)));

    return f;
}