import SceneHandler from "./scenes/SceneHandler.js";
import sceneList from "./scenes/SceneList.js";

const scenes = new SceneHandler(sceneList)

scenes.goTo('menu')