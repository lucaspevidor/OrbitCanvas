import {describe, expect, test} from 'vitest';
import { Vector2 } from '../../src/Physics/Vector2';

function compareFloat(f1: number, f2: number, epsilon: number) {
    return Math.abs(f1 - f2) < epsilon;
}

describe("Vector2", () => {
    test("Create vector", () => {
        expect(new Vector2(0, 0)).toBeInstanceOf(Vector2);
    })

    test("Modify vector", () => {
        const v2 = new Vector2(0, 0);
        v2.x = 1;
        v2.y = 2;
        expect(v2.x).toEqual(1);
        expect(v2.y).toEqual(2);
    });

    test("Get vector magnitude", () => {
        const v = new Vector2(3, 4);
        expect(v.mag()).toEqual(5);
    })

    test("Get vector angle", () => {
        expect((new Vector2(1, 1)).angle()).toEqual(Math.PI / 4);
    })

    test("Get vector angle in degrees", () => {
        expect((new Vector2(1, 1)).angleDeg()).toEqual(45);
    })

    test("Get normalized vector", () => {
        const v = new Vector2(3, 4).normalize();
        expect(v.x).toEqual(0.6);
        expect(v.y).toEqual(0.8);
        expect(v.mag()).toEqual(1);
    })

    test("Add two vectors", () => {
        const v1 = new Vector2(1, 2);
        const v2 = new Vector2(3, 4);
        const res = v1.add(v2);

        expect(res.x).toEqual(4);
        expect(res.y).toEqual(6);
    });

    test("Subtract two vectors", () => {
        const v1 = new Vector2(1, 2);
        const v2 = new Vector2(3, 4);
        const res = v1.subtract(v2);

        expect(res.x).toEqual(-2);
        expect(res.y).toEqual(-2);
    });

    test("Multiply two vectors", () => {
        const v1 = new Vector2(3, 4);
        const v2 = new Vector2(6, 8);
        const res = v1.multiply(v2);        

        expect(Math.abs(res.x + 14)).toBeLessThan(0.001);
        expect(Math.abs(res.y - 48)).toBeLessThan(0.001);
    });

    test("Divide two vectors", () => {
        const v1 = new Vector2(3, 4);
        const v2 = new Vector2(6, 8);
        const res = v1.divide(v2);

        expect(Math.abs(res.x-0.5)).toBeLessThan(0.001);
        expect(Math.abs(res.y)).toBeLessThan(0.001);
    });

    test("Scale vector", () => {
        const v = new Vector2(3, 4).scale(2);
        expect(v.x).toEqual(6);
        expect(v.y).toEqual(8);
    })

    test("Rotate vector by 90 degrees", () => {
        const v = new Vector2(2, 1).r90deg();
        expect(compareFloat(v.x, -1, 0.001)).toBeTruthy();
        expect(compareFloat(v.y, 2, 0.001)).toBeTruthy();
    })

    test("Rotate vector by 180 degrees", () => {
        const v = new Vector2(2, 1).r180deg();
        expect(compareFloat(v.x, -2, 0.001)).toBeTruthy();
        expect(compareFloat(v.y, -1, 0.001)).toBeTruthy();
    })

    test("Rotate vector by 270 degrees", () => {
        const v = new Vector2(2, 1).r270deg();
        expect(compareFloat(v.x, 1, 0.001)).toBeTruthy();
        expect(compareFloat(v.y, -2, 0.001)).toBeTruthy();
    })
})