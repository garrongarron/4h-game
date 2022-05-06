import scene from "../basic/Scene.js";
import bullet from "../basic/shapes/Bullet.js";

class RayCasterController {
    constructor() {
        this.state = null
        this.raycaster = new THREE.Raycaster();
    }
    init(characterController) { 
        this.state = characterController.state
        this.state['target'] = new THREE.Vector3()

    }
    setCamera(camera){
        this.camera = camera
    }
    
    tick() { 
        this.raycaster.setFromCamera(new THREE.Vector2(.5, .5), this.camera);
        const intersects = this.raycaster.intersectObjects(scene.children, true)[0];
        if (intersects) {
            this.state.target.copy(intersects.point)
            bullet.position.copy(intersects.point);
        }
    }
}

const rayCasterController = new RayCasterController()

export default rayCasterController