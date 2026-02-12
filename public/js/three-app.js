import * as THREE from './three/three.module.js';
const scene = new THREE.Scene();

// 相机
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 4;

// 渲染器
const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

// 🌍 地球贴图（在线）
const textureLoader = new THREE.TextureLoader();
textureLoader.load('images/bgc.jpg', function (texture) {
  scene.background = texture;
});
const earthTexture = textureLoader.load("/images/boll.png");

// 地球
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(1, 64, 64),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    roughness: 1,
    metalness: 0,
  }),
);
scene.add(earth);

// ✨ 大气层（发光）
const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 64, 64),
  new THREE.MeshBasicMaterial({
    color: 0x44aaff,
    transparent: true,
    opacity: 0.2,
    blending: THREE.AdditiveBlending,
  }),
);
scene.add(atmosphere);

// 🌟 星空背景
const starsGeometry = new THREE.BufferGeometry();
const starCount = 2000;
const positions = [];

for (let i = 0; i < starCount; i++) {
  positions.push(
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
    (Math.random() - 0.5) * 200,
  );
}

starsGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(positions, 3),
);

const stars = new THREE.Points(
  starsGeometry,
  new THREE.PointsMaterial({ color: 0xffffff }),
);
scene.add(stars);

// 💡 光照
scene.add(new THREE.AmbientLight(0xffffff, 1));

const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
sunLight.position.set(5, 2, 5);
scene.add(sunLight);

// 🎬 动画
function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.0015;
  atmosphere.rotation.y += 0.001;
  stars.rotation.y += 0.0002;
  renderer.render(scene, camera);
}
animate();

// 自适应窗口
function resizeRenderer() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio); // 保持高分屏清晰
  renderer.setSize(width, height, false);

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
window.addEventListener("resize", resizeRenderer);


