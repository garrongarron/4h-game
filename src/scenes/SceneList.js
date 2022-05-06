let buffer = {};

let lazy = async (filename) => {
    if(!buffer.hasOwnProperty(filename)){
        let module = await import(`${filename}`)
        const obj = new module.default
        buffer[filename] = obj
        return obj
    } 
    return buffer[filename]
}

let sceneList = {
    get 'campo'(){ return lazy('./Scene1.js')},
    get 'menu'(){ return lazy('./Scene2.js')},
}
export default sceneList



