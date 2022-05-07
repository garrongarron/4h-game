import { canvas } from "../basic/Renderer.js";

class Scene2 {
    
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        console.log('hola start()', this);
        canvas.addEventListener('click', this.next)
    }
    next = (e) =>{
        this.sceneHandler.goTo('settings')
        e.preventDefault()
        e.stopPropagation()
    }
    close(){     
        canvas.removeEventListener('click', this.next)
        console.error('CLOSED Scene2');
    }
}

// const scene1 = new Scene1()

// export default scene1

export default Scene2