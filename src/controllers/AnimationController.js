import TransitionHandler from "../basic/animations/TransitionHandler.js"


class AnimationController{
    constructor() {
        this.state = null
        this.trnasitionHandler = null
    }
    init(characterController) { 
        this.state = characterController.state
        if(!this.trnasitionHandler){
            this.trnasitionHandler = new TransitionHandler(characterController.character)
        }
        this.trnasitionHandler.start()
    }
    stop(){
        this.trnasitionHandler.stop()
    }
    tick() { 
        if (this.state.translation.y == 1){
            this.trnasitionHandler.action(2)
            // console.log('2 adelante');
        } else if (this.state.translation.y == -1){
            this.trnasitionHandler.action(1)
            // console.log('1 atras');
        } else {
            this.trnasitionHandler.action(0)
            // console.log('0 quieto');
        }
    }
}

const animationController = new AnimationController()

export default animationController

export { AnimationController }