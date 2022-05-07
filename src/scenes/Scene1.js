import camera from "../basic/Camera.js";
import light from "../basic/Light.js";
import loopMachine from "../basic/LoopMachine.js";
import renderer from "../basic/Renderer.js";
import scene from "../basic/Scene.js";
import plane from "../basic/shapes/Plane.js";
import skyTexture from "../images/SkyTexture.js";
import getXbotModel from '../models/xbot/XbotTest.js'
import nextBtn from "../UI/NextScene.js";

const cache = document.createElement('div')
class Scene1 {
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        console.log('hola start()', this);
        scene.add(plane);
        scene.add(light);
        scene.background = skyTexture;
        loopMachine.addCallback(this.render);
        loopMachine.start()
        camera.position.set(2,2,2)
        getXbotModel().then(model=>{
            scene.add(model)
            this.model = model
            camera.lookAt(model.position)
            model.scale.set(.01, .01, .01)
        })
        document.body.appendChild(nextBtn)
        nextBtn.addEventListener('click', this.next)
    }
    render = () => {
        renderer.render(scene, camera)
    }
    next = (e) => {
        this.sceneHandler.goTo('menu')
        e.preventDefault()
        e.stopPropagation()
    }
    close() {
        nextBtn.removeEventListener('click', this.next)
        cache.appendChild(nextBtn)
        scene.remove(plane);
        scene.remove(light);
        scene.remove(this.model)
        setTimeout(() => {
            loopMachine.removeCallback(this.render)
            loopMachine.stop()
        }, 100);
        console.error('CLOSED Scene1');
    }
}

// const scene1 = new Scene1()

// export default scene1

export default Scene1