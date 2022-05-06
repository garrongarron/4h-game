class WeaponController {
    constructor() {
        this.state = null
        this.character = null
        this.speed = .07
        this.ySensibility = 0.001
        this.rightHand =  null
    }
    init(characterController) { 
        this.state = characterController.state
        this.character = characterController.character
        this.rightArm = this.character.children[0].children[0].children[0].children[0]
        this.rightHand = this.character.children[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0]
        this.rightHand.attach(this.weapon)
    }
    setWeapon(weapon){
        this.weapon = weapon
        
    }
    tick() { 
        this.weapon.position.copy(this.rightHand.position)
        this.rightArm.lookAt(0,1.5,0)
        // console.log(this.state.target);
    }
}

const weaponController = new WeaponController()

export default weaponController