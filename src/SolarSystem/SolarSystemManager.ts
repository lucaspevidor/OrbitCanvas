import { CalculateGravitationalForce } from "../Physics/Gravitation";
import { Vector2 } from "../Physics/Vector2";
import { SpaceBody } from "./classes/SpaceBody";

export class SolarSystemManager {
    private bodies: Array<SpaceBody> = [];
    private positionHistoryCount = 500;

    public AddBody(body: SpaceBody) {
        this.bodies.push(body);        
    }

    public GetBodies() {
        return this.bodies;
    }

    // Updates all bodies velocity and position information
    public Calculate(deltaTime: number) {        
        if (deltaTime > 0.1)
            deltaTime = 0;

        const timeScale = 500;
        deltaTime *= timeScale;

        this.bodies.forEach((b, index) => {
            if (b.name === "Sun")
                return;
            this.UpdateBody(index, deltaTime);
        });
    }

    private UpdateBody(bodyIndex: number, deltaTime: number) {
        const bodies = [...this.bodies];
        const body = bodies.splice(bodyIndex, 1)[0];

        body.positionHistory.push(body.position)
        body.position = body.position.add(body.velocity.scale(deltaTime));

        if (body.positionHistory.length > this.positionHistoryCount)
            body.positionHistory.splice(0, 1);

        const G = 2;        

        let f = new Vector2(0, 0);

        bodies.forEach(ob => {
            const _f = CalculateGravitationalForce(ob.mass, body.mass, ob.position, body.position);

            f = f.add(_f);
        })

        body.velocity = body.velocity.add(f.scale(deltaTime / body.mass));
    }

    
}