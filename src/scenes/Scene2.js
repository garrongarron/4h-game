class Scene2 {
    
    open(sceneHandler) {
        this.sceneHandler = sceneHandler
        console.log('hola start()', this);
        document.addEventListener('click', this.next)
    }
    next = (e) =>{
        this.sceneHandler.goTo('campo')
        e.preventDefault()
        e.stopPropagation()
    }
    close(){     
        document.removeEventListener('click', this.next)
        console.error('CLOSED Scene2');
    }
}

// const scene1 = new Scene1()

// export default scene1

export default Scene2