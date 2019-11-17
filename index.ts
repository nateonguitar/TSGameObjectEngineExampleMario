import { GameLauncher, GameOptions } from "game-object-engine/dist";
import { StressTestLevel } from "./src/levels/StressTestLevel";

var game = null;

window['launchGame'] = function () {
    if (!game) {
        game = new GameLauncher(<GameOptions>{
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
}

window['destroyGame'] = function () {
    if (game) {
        game.close();
        game = null;
    }
}

window.addEventListener('load', window['launchGame'], false);