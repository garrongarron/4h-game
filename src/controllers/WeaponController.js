import sounds from "../../sounds/Audios.js"
import ray from "../basic/shapes/Ray.js"

class WeaponController {
    constructor() {
        this.state = null
        this.character = null
        this.speed = .07
        this.ySensibility = 0.001
        this.rightHand =  null
        this.n = 0
    }
    setWeapon(weapon){
        this.weapon = weapon
    }
    setChest(chest){
        this.chest = chest;
    }
    setRightHand(rightHand){
        this.rightHand = rightHand;
    }

    init(characterController) { 
        this.state = characterController.state
        this.character = characterController.character
        // this.chest = this.character.children[0].children[0].children[0].children[0]
        // this.rightHand = this.character.children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0]
        this.rightHand.attach(this.weapon)
        document.addEventListener('mousedown', this.shot)
    }
    
    shot = () =>{
        sounds.play('impact')
        ray.visible = true
        clearTimeout(this.n)
        this.n = setTimeout(() => {
            ray.visible = false
        }, 100);
    }
   
    tick() { 
        this.weapon.position.copy(this.rightHand.position)
        this.chest.lookAt(
            this.state.target.x,
            this.state.target.y-.5,
            this.state.target.z,
        )

        const spowningPoint = new THREE.Vector3()
        this.rightHand.getWorldPosition(spowningPoint)
        spowningPoint.y += .1
        ray.position.copy(spowningPoint)
        ray.lookAt(this.state.target)
    }
}

const weaponController = new WeaponController()

export default weaponController

export { WeaponController }