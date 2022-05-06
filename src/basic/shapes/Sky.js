const geometry = new THREE.SphereGeometry( 500, 8, 8 );
const material = new THREE.MeshBasicMaterial( { color: 0x87CEEB , side: THREE.BackSide} );
material.opacity = .1
material.transparent = true
const sky = new THREE.Mesh( geometry, material );
sky.name = 'sky'

export default sky