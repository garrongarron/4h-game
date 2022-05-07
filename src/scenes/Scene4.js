import camera from "../basic/Camera.js";
import light from "../basic/Light.js";
import loopMachine from "../basic/LoopMachine.js";
import renderer, { canvas } from "../basic/Renderer.js";
import resize from "../basic/Resize.js";
import scene from "../basic/Scene.js";
import plane from "../basic/shapes/Plane.js";
import skyTexture from "../images/SkyTexture.js";
import settings from "../UI/settings/Settings.js";
import nextBtn from "../UI/NextScene.js"
import cache from "../basic/Cache.js";
import loadPlayer from "./files-scene4/LoadPlayer.js";

class Scene4 {
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        scene.add(plane);
        scene.add(light);
        scene.background = skyTexture;
        loopMachine.addCallback(this.render);
        loopMachine.start()
        loadPlayer.start()
        camera.position.set(2, 2, 2)
        console.log('Scene4 start()', this);
        resize.start(renderer)
        setTimeout(() => {
            document.body.appendChild(nextBtn)
            nextBtn.innerHTML = 'Settings'
            nextBtn.removeEventListener('click', this.next)
            nextBtn.addEventListener('click', this.next)
        }, 500);
    }
    render = () => {
        renderer.render(scene, camera)
    }
    next = (e) => {
        this.sceneHandler.goTo('settings')
        e.preventDefault()
        e.stopPropagation()
    }
    close() {
        scene.remove(plane);
        scene.remove(light);
        cache.appendChild(nextBtn)
        loadPlayer.stop()
        console.error('CLOSED Scene4');
    }
}

export default Scene4