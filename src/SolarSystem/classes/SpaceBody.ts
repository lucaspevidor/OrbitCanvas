import { Vector2 } from "../../Physics/Vector2";

export class SpaceBody{
    public positionHistory: Array<Vector2> = [];
    
    constructor(
        public name: string,
        public mass: number,
        public radius: number,
        public position: Vector2,
        public velocity: Vector2,
        public color: string,        
    ) {};
}