class Scene1 {
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        console.log('hola start()', this);
        document.addEventListener('click',this.next)
    }
    next = () =>{
        this.sceneHandler.goTo('menu')
    }
    close(){
        document.removeEventListener('click',this.next)
        console.log('hola stop()');
    }
}

// const scene1 = new Scene1()

// export default scene1

export default Scene1