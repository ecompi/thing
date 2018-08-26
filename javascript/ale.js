var vertexShaderText =
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'',
'void main()',
'{',
'   gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');

var fragmentShaderText =
[
'precision mediump float;',
'',
'void main()',
'{',
'  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',
]
var InitDemo = function () {
  console.log('This thing is shoopid-i working');

  var canvas = document.getElementById('game-surface');
  var gl = canvas.getContext('webgl');

  if (!gl) {
    console.log('WebGL is not supported, falling down lol')
    gl = canvas.getContext('experimental-webgl');
  }

  if (!gl) {
    alert('Your browser doesnt like WebGL lol');
  }

  gl.clearColor(0.75, 0.85, 0.8, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};
