import { CalculateGravitationalForce } from "../Physics/Gravitation";
import { Vector2 } from "../Physics/Vector2";
import { DrawArrow, DrawCircle, DrawDot, DrawLine } from "../drawer";
import { SolarSystemManager } from "./SolarSystemManager";

export function DrawSolarBodies(ssm: SolarSystemManager) {
    ssm.GetBodies().forEach(body => {        
        if (body.name === "Sun") {
            DrawCircle(body.color, body.radius, new Vector2(body.position.x, body.position.y), body.radius * 2);
        } else {
            DrawCircle(body.color, body.radius, new Vector2(body.position.x, body.position.y));
        }
    })
}

export function DrawForces(ssm: SolarSystemManager) {
    const scaleFactor = 20000;
    ssm.GetBodies().forEach((body, index) => {
        const bodies = [...ssm.GetBodies()];
        bodies.splice(index, 1);

        let f = new Vector2(0, 0);

        bodies.forEach(ob => {
            const _f = CalculateGravitationalForce(ob.mass, body.mass, ob.position, body.position);
            f = f.add(_f);
        })
        
        DrawArrow(body.color, 4, body.position, f.scale(scaleFactor));
    })
}

export function DrawPositionHistory(ssm: SolarSystemManager) {
    ssm.GetBodies().forEach(body => {            
        for (let i = body.positionHistory.length - 1; i > 0; i--) {
            const opacity = i / body.positionHistory.length;
            const c = `rgba(255, 255, 255, ${opacity})`;
            // DrawLine(c, body.positionHistory[i+1], body.positionHistory[i]); 
            DrawDot(c, body.positionHistory[i]);
        }
    });
}
