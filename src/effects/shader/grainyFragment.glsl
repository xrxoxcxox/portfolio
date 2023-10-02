uniform sampler2D tDiffuse;

varying vec2 vUv;

float random(vec2 p) {
  vec2 k1 = vec2(23.14069263277926, // e^pi (Gelfond's constant)
  2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
  );
  return fract(cos(dot(p, k1)) * 12345.6789);
}

void main() {
  vec4 color = texture2D(tDiffuse, vUv);
  vec2 uvrandom = vUv;
  uvrandom.y *= random(vec2(uvrandom.y, 0.4));
  color.rgb += random(uvrandom) * 0.1;
  gl_FragColor = color;
}
