import camera from './basic/Camera.js';
import cube from './basic/shapes/Cube.js';
import keyCode from './basic/KeyCode.js';
import keyListener from './basic/KeyListener.js';
import light from './basic/Light.js';
import plane from './basic/shapes/Plane.js';
import renderer, { canvas } from './basic/Renderer.js';
import scene from './basic/Scene.js'
import loopMachine from './basic/LoopMachine.js';
import keyController from './controllers/KeyController.js';
import moveController from './controllers/MoveController.js';
import rotationController from './controllers/RotationController.js';
import shadowController from './controllers/ShadowController.js';
import animationController from './controllers/AnimationController.js';
import characterController from './controllers/CharacterController.js';
// import policeCar from './models/police-car/PoliceCar.js';
// import Xbot from './models/Xbot/XbotLoader.js';
// import animate from './models/xbot/Animate.js';
// import getXbotModel from './models/xbot/XbotTest.js';
import resize from './basic/Resize.js';
import getSwatModel from './models/swat/Swat.js';
import cameraController from './controllers/CameraController.js';
import mouse from './basic/Mouse.js';
import mouseController from './controllers/MouseController.js';
import skyTexture from './images/SkyTexture.js';
import sounds from '../sounds/Audios.js';
import mira from './UI/Mira.js';
import info from './UI/Info.js';

scene.add( cube );
scene.add( light );
scene.add( plane );
camera.position.set(2,3,-4)

camera.lookAt(cube.position)

getSwatModel().then(model=>{
    scene.add(model)
    model.scale.set(.01,.01,.01)
    // console.log(model);
    characterController.addCharacter(model)
    characterController.addController(keyController)//#1
    mouseController.setCamera(camera)
    characterController.addController(mouseController)//#1
    characterController.addController(moveController)//#2
    characterController.addController(rotationController)//#3
    shadowController.setDirectionalLight(light.children[0])
    shadowController.setVector(new THREE.Vector3(0, 5, -5))
    characterController.addController(shadowController)//#4
    cameraController.setCamera(camera)
    characterController.addController(cameraController)//#4.1
    
    loopMachine.addCallback(() => {
        camera.lookAt(model.position)
    })
    characterController.addController(animationController)//#5
    characterController.start()
})

loopMachine.addCallback(() => {
    if(keyListener.isPressed(keyCode.ENTER)) cube.rotation.y += .01
    renderer.render(scene, camera)
});
resize.start(renderer)

scene.background = skyTexture;

loopMachine.start()
keyListener.start()
mouse.setCanvas(canvas)
mouse.start()
sounds.play('background')
sounds.setAsLoop('background')
sounds.setVolume('background', .25)

document.body.appendChild(mira)
document.body.appendChild(info)