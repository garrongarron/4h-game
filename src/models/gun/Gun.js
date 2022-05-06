const loader = new THREE.GLTFLoader();

const gun = () =>{
  return new Promise((res, rej) => {
    loader.load("src/models/gun/scene.gltf",
      function (gltf) {
        const size= 0.013
        gltf.scene.scale.set(size, size, size);
        gltf.scene.traverse(function (node) {
          if (node.isMesh) {
            node.castShadow = true;
          }
        });
        res(gltf.scene);
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened", error);
        rej();
      });
  });
}

export default gun;
