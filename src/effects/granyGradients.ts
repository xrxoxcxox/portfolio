import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import gradientFragment from "./shader/gradientFragment.glsl?raw";
import gradientVertex from "./shader/gradientVertex.glsl?raw";
import grainyFragment from "./shader/grainyFragment.glsl?raw";
import grainyVertex from "./shader/grainyVertex.glsl?raw";

export function createGranyGradients(canvas: HTMLCanvasElement) {
	// Setup
	const scene = new THREE.Scene();
	const camera = new THREE.OrthographicCamera();
	camera.position.z = 1;

	const renderer = new THREE.WebGLRenderer({ canvas: canvas });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.outputColorSpace = THREE.DisplayP3ColorSpace;

	// Add gradient plane
	const gradientPlaneGeometry = new THREE.PlaneGeometry(2, 2);
	const gradientPlaneMaterial = new THREE.ShaderMaterial({
		uniforms: {
			time: { value: 0 },
		},
		vertexShader: gradientVertex,
		fragmentShader: gradientFragment,
	});

	const plane = new THREE.Mesh(gradientPlaneGeometry, gradientPlaneMaterial);
	scene.add(plane);

	// Postprocessing
	const composer = new EffectComposer(renderer);

	const renderPass = new RenderPass(scene, camera);
	composer.addPass(renderPass);

	const grainyShader = {
		uniforms: {
			tDiffuse: { value: null },
		},
		vertexShader: grainyVertex,
		fragmentShader: grainyFragment,
	};

	const grainyShaderPass = new ShaderPass(grainyShader);
	composer.addPass(grainyShaderPass);

	// Render
	function render() {
		gradientPlaneMaterial.uniforms.time.value += 0.002;
		requestAnimationFrame(render);
		composer.render();
	}

	render();

	// Resize
	window.addEventListener("resize", () => {
		const width = window.innerWidth;
		const height = window.innerHeight;

		renderer.setSize(width, height);

		camera.updateProjectionMatrix();
	});
}
