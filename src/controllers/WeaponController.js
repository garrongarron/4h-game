import sounds from "../../sounds/Audios.js"
import mouse from "../basic/Mouse.js"
import ray from "../basic/shapes/Ray.js"
import info from "../UI/Info.js"
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
        document.removeEventListener('mousedown', this.shot)
        document.addEventListener('mousedown', this.shot)
        sounds.setVolume('impact', .125)
    }
    stop = ()=>{
        document.removeEventListener('mousedown', this.shot)
    }
    
    shot = () =>{
        sounds.play('impact')
        ray.visible = true
        clearTimeout(this.n)
        this.n = 0
        this.n = setTimeout(() => {
            ray.visible = false
            this.n = 0
        }, 100);
    }
   
    tick() { 
        this.weapon.position.copy(this.rightHand.position)
        this.weapon.position.y = 2+ mouse.acumulated.y / 150 
        this.chest.rotation.x = mouse.acumulated.y / 2000
        info.innerText = this.chest.rotation.x
        if(mouse.delta.x ==0) this.weapon.lookAt(this.state.target)
        ray.lookAt(this.state.target)
    }
}

const weaponController = new WeaponController()

export default weaponController

export { WeaponController }