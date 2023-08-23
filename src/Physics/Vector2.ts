export class Vector2 {
    constructor(
        public x: number,
        public y: number,
    ) {};

    public add(other: Vector2) {
        return new Vector2(this.x + other.x, this.y + other.y);
    }
    
    public subtract(other: Vector2) {
        return new Vector2(this.x - other.x, this.y - other.y);        
    }

    public multiply(other: Vector2) {
        const mag = this.mag() * other.mag();
        const angle = this.angle() + other.angle();

        const y = Math.sin(angle) * mag;
        const x = Math.cos(angle) * mag;

        return new Vector2(x, y);
    }

    public divide(other: Vector2) {
        const mag = this.mag() / other.mag();
        const angle = this.angle() - other.angle();

        const y = Math.sin(angle) * mag;
        const x = Math.cos(angle) * mag;

        return new Vector2(x, y);
    }

    public scale(factor: number) {
        return new Vector2(this.x * factor, this.y * factor);
    }

    public mag() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    public angle() {
        return Math.atan(this.y / this.x);
    }

    public angleDeg() {
        return this.angle() * 180 / Math.PI;
    }

    public normalize() {
        const mag = this.mag();
        return new Vector2(this.x / mag, this.y / mag);
    }

    public r90deg() {
        return new Vector2(-this.y, this.x);
    }

    public r180deg() {
        return new Vector2(-this.x, -this.y);
    }

    public r270deg() {
        return new Vector2(this.y, -this.x);
    }
}