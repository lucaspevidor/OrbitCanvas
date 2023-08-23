import { Vector2 } from './Physics/Vector2';
import {GetCanvas, canvas} from './canvas'

export function ClearCanvas() {
    GetCanvas().clearRect(0, 0, canvas.width, canvas.height);
}

export function DrawCrosshair(position: Vector2, color: string) {
    const size = 10;

    const c = GetCanvas();
    c.beginPath();
    c.moveTo(position.x - size / 2, position.y);
    c.lineTo(position.x + size / 2, position.y);
    c.moveTo(position.x, position.y - size / 2);
    c.lineTo(position.x, position.y + size / 2);
    c.strokeStyle = color;
    c.stroke();
}

export function DrawCircle(color: string, radius: number, position: Vector2, shadowRadius: number = 0) {
    const c = GetCanvas();
    c.beginPath();
    if (shadowRadius !== 0) {
        c.shadowColor = color;
        c.shadowBlur = shadowRadius;
    }
    c.arc(position.x, position.y, radius, 0, 2 * Math.PI);
    c.fillStyle = color;
    c.fill();    

    c.shadowBlur = 0;
}

export function DrawSquare(color: string, size: number, position: Vector2) {
    const c = GetCanvas();
    c.fillStyle = color;
    c.fillRect(position.x, position.y, size, size);
}

export function DrawArrow(color: string, size: number, position: Vector2, vector: Vector2) {
    const dest = position.add(vector);

    const p1 = dest.add(vector.normalize().scale(size));
    const p2 = dest.add(vector.normalize().r90deg().scale(size / 2));
    const p3 = dest.add(vector.normalize().r270deg().scale(size / 2));
    
    const c = GetCanvas();
    c.strokeStyle = color;
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(position.x, position.y);
    c.lineTo(dest.x, dest.y);    
    c.stroke();
    c.moveTo(dest.x, dest.y);
    c.lineTo(p2.x, p2.y);
    c.lineTo(p1.x, p1.y);
    c.lineTo(p3.x, p3.y);
    c.closePath();
    c.fill();    
}

export function DrawDot(color: string, position: Vector2) {
    const c = GetCanvas();
    c.fillStyle = color;
    c.beginPath();
    c.fillRect(position.x, position.y, 1, 1);
    c.stroke();
}

export function DrawLine(color: string, origin: Vector2, destination: Vector2) {
    const c = GetCanvas();
    c.strokeStyle = color;
    c.lineWidth = 0.5;
    c.moveTo(origin.x, origin.y);
    c.lineTo(destination.x, destination.y);
    c.stroke();
}