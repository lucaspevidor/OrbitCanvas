import { Vector2 } from "./Physics/Vector2";
import { DrawForces, DrawPositionHistory, DrawSolarBodies } from "./SolarSystem/SolarSystemDrawer";
import { SolarSystemManager } from "./SolarSystem/SolarSystemManager";
import { SpaceBody } from "./SolarSystem/classes/SpaceBody";
import { ClearCanvas } from "./drawer";

let lastTime = 0;
const ssm = new SolarSystemManager();

function SetInitialState() {
    // const earth = new SpaceBody("Earth", 5.97e24, 5, {x: 200, y: 300}, {x: 0, y: 0}, "blue");
    // const sun = new SpaceBody("Sun", 1.99e30, 10, {x: 400, y: 400}, {x: 0, y: 0}, "yellow");
    const earth = new SpaceBody("Earth", 1, 5, new Vector2(200, 300), new Vector2(0.1,-0.2), "blue");
    const mars = new SpaceBody("Mars", 0.4, 3, new Vector2(150, 120), new Vector2(0.1, -0.1), "brown");
    const sun = new SpaceBody("Sun", 100, 10, new Vector2(400, 400), new Vector2(0, 0), "yellow");

    ssm.AddBody(earth);
    ssm.AddBody(mars);
    ssm.AddBody(sun);    
}

function UpdateFrame(timestamp: number) {
    const dt = (timestamp - lastTime) / 1000;
    lastTime = timestamp;
   
    ClearCanvas();

    ssm.Calculate(dt);    
    DrawSolarBodies(ssm); 
    DrawForces(ssm);   
    DrawPositionHistory(ssm);

    requestAnimationFrame(UpdateFrame);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        requestAnimationFrame(UpdateFrame);
    }
})

SetInitialState();
requestAnimationFrame(UpdateFrame);