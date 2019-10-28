import { GameLauncher, GameOptions } from "game-object-engine/dist";
import { StressTestLevel } from "./src/levels/StressTestLevel";

function gameLauncher() {
    new GameLauncher(<GameOptions>{
        backgroundColor: "#330000",
        border: "1px solid red",
        allowToggleDebug: true,
        screenHeight: 800,
        screenWidth: 1000,
        levelClasses: {
            'StressTestLevel': StressTestLevel,
        }
    });
}

window.addEventListener('load', gameLauncher, false);