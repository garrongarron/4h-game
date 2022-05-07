import keyListener from "../../basic/KeyListener.js"
import mouse from "../../basic/Mouse.js"
import { canvas } from "../../basic/Renderer.js"
import scene from "../../basic/Scene.js"
import sky from "../../basic/shapes/Sky.js"
import gun from "../../models/gun/Gun.js"
import getXbotModel from "../../models/xbot/XbotTest.js"
import mira from "../../UI/Mira.js"
import customController from "../files-scene4/CustomController.js"

class LoadPlayer {
    constructor() {
        this.models = []
    }
    start(){
        this.models = [gun(), getXbotModel()]
        scene.add(sky);
        document.body.appendChild(mira)
        Promise.all(this.models).then(models=>{
            const gunModel = models[0]
            gunModel.position.set(0,0,0)
            gunModel.rotation.set(0,0,0)
            const character = models[1]
            character.position.set(0,0,0)
            character.rotation.set(0,0,0)
            scene.add(character)
            customController.start(character, gunModel)
        })
        keyListener.start()
        mouse.setCanvas(canvas)
        mouse.start()
    }
    stop(){
        keyListener.stop()
        mouse.stop()
        scene.remove(sky);
        customController.stop()
    }
}

const loadPlayer = new LoadPlayer()

export default loadPlayer

export { LoadPlayer }