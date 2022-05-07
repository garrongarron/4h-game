import camera from "../../basic/Camera.js"
import light from "../../basic/Light.js"
import scene from "../../basic/Scene.js"
import { AnimationController } from "../../controllers/AnimationController.js"
import { CameraController } from "../../controllers/CameraController.js"
import { CharacterController } from "../../controllers/CharacterController.js"
import { KeyController } from "../../controllers/KeyController.js"
import { MouseController } from "../../controllers/MouseController.js"
import { MoveController } from "../../controllers/MoveController.js"
import { RayCasterController } from "../../controllers/RaycasterController.js"
import { RotationController } from "../../controllers/RotationController.js"
import { ShadowController } from "../../controllers/ShadowController.js"
import { WeaponController } from "../../controllers/WeaponController.js"
import gun from "../../models/gun/Gun.js"


class CustomController {
    constructor() {
        this.model = null
        this.characterController = new CharacterController()
        this.keyController = new KeyController()
        this.mouseController = new MouseController()
        this.moveController = new MoveController()
        this.rotationController = new RotationController()
        this.shadowController = new ShadowController()
        this.cameraController = new CameraController()
        this.rayCasterController = new RayCasterController()
        this.weaponController = new WeaponController()
        this.animationController = new AnimationController()
    }
    start(model) {
        this.characterController.addCharacter(model)
        this.characterController.addController(this.keyController)
        this.mouseController.setCamera(camera)
        this.characterController.addController(this.mouseController)
        this.characterController.addController(this.moveController)
        this.characterController.addController(this.rotationController)
        this.shadowController.setDirectionalLight(light.children[0])
        this.shadowController.setVector(new THREE.Vector3(0, 5, -5))
        this.characterController.addController(this.shadowController)
        this.cameraController.setCamera(camera)
        this.characterController.addController(this.cameraController)
        this.rayCasterController.setCamera(camera)
        this.rayCasterController.setCharacter(model)
        this.characterController.addController(this.rayCasterController)
        gun().then(modelGun=>{
            const group = new THREE.Group();
            modelGun.position.set(
                model.position.x + .1,
                model.position.y,
                model.position.z - .1
            )
            modelGun.rotation.x += Math.PI * .5
            group.add(modelGun)
            scene.add(group)
            this.weaponController.setWeapon(group)
            const chest = model.children[0].children[1].children[1].children[1]//.children[2]
            console.log(chest);
            this.weaponController.setChest(chest)
            const rightHand = model.children[0].children[1].children[1].children[1].children[3].children[1].children[1].children[1]
            this.weaponController.setRightHand(rightHand)
            
            this.characterController.addController(this.weaponController)
            this.characterController.addController(this.animationController)
            this.characterController.start()
        })
    }

    stop(){
        scene.remove(group)
        this.characterController.stop()
    }
}

const customController = new CustomController()

export default customController

export { CustomController }