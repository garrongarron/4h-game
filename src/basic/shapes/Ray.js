// const geometry = new THREE.BoxGeometry(.1, .1, 10);
const geometry = new THREE.BoxGeometry(.01, .01, 100);
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const material = new THREE.MeshPhongMaterial({ color: 0xff2200 });
const rayVisible = new THREE.Mesh(geometry, material);
const ray = new THREE.Group();

const getRay = () => {
    rayVisible.position.z = 50.3
    ray.add(rayVisible)
    ray.visible = false
    return ray
}
getRay()
export default ray

export { getRay } 