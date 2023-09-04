import p5 from "p5";

function sketch(p: p5) {
  const particles: p5.Vector[] = [];
  const numberOfPoints = 4000;
  const noiseScale = 0.01;

  function perticlesPush() {
    for (let i = 0; i < numberOfPoints; i++) {
      particles.push(p.createVector(p.random(p.width), p.random(p.height)));
    }
  }

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    perticlesPush();
    p.stroke(225);
    p.background(0, 0);
  };

  p.draw = function () {
    for (let i = 0; i < numberOfPoints; i++) {
      const particle = particles[i];
      p.point(particle.x, particle.y);
      const noise = p.noise(particle.x * noiseScale, particle.y * noiseScale);
      particle.x -= 5 * p.cos(noise * p.TAU);
      particle.y -= 5 * p.sin(noise * p.TAU);
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    particles.splice(0, particles.length);
    perticlesPush();
  };
}

export function noiseFlowFields(containerElement: HTMLElement | null) {
  if (containerElement !== null) {
    new p5(sketch, containerElement);
  } else {
    console.error("containerElement is not found");
  }
}
