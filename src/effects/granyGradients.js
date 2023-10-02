import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { DotScreenShader } from "./CustomShader";
import fragment from "./shader/fragment.glsl?raw";
import vertex from "./shader/vertex.glsl?raw";

export function createGranyGradients(dom) {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera();
  camera.position.z = 1;

  const renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.DisplayP3ColorSpace;

  dom.appendChild(renderer.domElement);

  const planeGeometry = new THREE.PlaneGeometry(2, 2);
  const planeMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
    },
    vertexShader: vertex,
    fragmentShader: fragment,
  });

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  scene.add(plane);

  const composer = new EffectComposer(renderer);

  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass);

  const dotScreenShaderPass = new ShaderPass(DotScreenShader);
  composer.addPass(dotScreenShaderPass);

  let time = 0;

  function render() {
    time += 0.005;
    planeMaterial.uniforms.time.value = time;
    requestAnimationFrame(render);
    composer.render();
  }

  render();

  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  });
}
