class SceneHandler {
    constructor(sceneList) {
        this.prev = null
        this.sceneList = sceneList
    }
    goTo(sceneName) {
        if (this.prev != null) {
            this.prev.close()
        }
        this.sceneList[sceneName].then(scene => {
            scene.open(this)
            this.prev = scene
        })
    }
}
export default SceneHandler