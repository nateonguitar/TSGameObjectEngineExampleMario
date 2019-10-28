import { Level, LevelParams, GameObject, Vector2 } from "game-object-engine/dist";
import { StressTestSquare } from "../StressTestSquare";

export class StressTestLevel extends Level {
    constructor() {
        super(<LevelParams>{
            managingGameObjectClass: StressTestLevelController,
            unitSize: 10,
            extraViewportPadding: new Vector2(0.5, 0.5)
        });
    }
}

export class StressTestLevelController extends GameObject {
    private items: StressTestSquare[] = [];
    constructor() {
        super({layer: 0});
    }

    // override
    public update(): void {
        this.items.push(new StressTestSquare());
    }
}