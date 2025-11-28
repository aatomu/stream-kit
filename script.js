//@ts-check

const model = {
  origin: [
    new Square({ // X
      tag: ["axis"],
      length: [10, 0.1],
      base: {
        center: [0, 0, 0],
        angle: [0, 0, 0],
        offset: [5, 0, 0],
      },
      uv: {
        alias: "skin",
        start: [0, 0],
        end: [0, 0]
      }
    }),
    new Square({ // Y
      tag: ["axis"],
      length: [0.1, 20],
      base: {
        center: [0, 0, 0],
        angle: [0, 0, 0],
        offset: [0, 10, 0],
      },
      uv: {
        alias: "skin",
        start: [0, 0],
        end: [0, 0]
      }
    })
  ],
  heads: [
    // MARK: > Head/Front
    new Square({
      tag: ["head"],
      length: [8, 8],
      base: {
        center: [0, 0, 4],
        angle: [0, 0, 0],
        offset: [0, 4, 0],
      },
      uv: {
        alias: "skin",
        start: [16, 8],
        end: [8, 16]
      }
    }),
    // MARK: > Head/Right
    new Square({
      tag: ["head"],
      length: [8, 8],
      base: {
        center: [0, 0, 4],
        angle: [0, deg2Rad(-90), 0],
        offset: [0, 4, 0],
      },
      uv: {
        alias: "skin",
        start: [8, 8],
        end: [0, 16]
      }
    }),
    // MARK: > Head/Back
    new Square({
      length: [8, 8],
      tag: ["head"],
      base: {
        center: [0, 0, 4],
        angle: [0, deg2Rad(-180), 0],
        offset: [0, 4, 0],
      },
      uv: {
        alias: "skin",
        start: [32, 8],
        end: [24, 16]
      }
    }),
    // MARK: > Head/Left
    new Square({
      tag: ["head"],
      length: [8, 8],
      base: {
        center: [0, 0, 4],
        angle: [0, deg2Rad(-270), 0],
        offset: [0, 4, 0],
      },
      uv: {
        alias: "skin",
        start: [24, 8],
        end: [16, 16]
      }
    }),
    // MARK: > Head/Top
    new Square({
      tag: ["head"],
      length: [8, 8],
      base: {
        center: [0, 0, 4],
        angle: [deg2Rad(90), 0, 0],
        offset: [0, 4, 0],
      },
      uv: {
        alias: "skin",
        start: [16, 0],
        end: [8, 8]
      }
    }),
    // MARK: > Head/Bottom
    new Square({
      tag: ["head"],
      length: [8, 8],
      base: {
        center: [0, 0, 4],
        angle: [deg2Rad(-90), 0, 0],
        offset: [0, 4, 0],
      },
      uv: {
        alias: "skin",
        start: [24, 8],
        end: [16, 0]
      }
    })
  ],
  body: [
    // MARK: > Body/Front
    new Square({
      tag: ["body"],
      length: [8, 12],
      base: {
        center: [0, 0, 2],
        angle: [0, 0, 0],
        offset: [0, -6, 0],
      },
      uv: {
        alias: "skin",
        start: [28, 20],
        end: [20, 32]
      }
    }),
    // MARK: > Body/Right
    new Square({
      tag: ["body"],
      length: [4, 12],
      base: {
        center: [0, 0, 4],
        angle: [0, deg2Rad(-90), 0],
        offset: [0, -6, 0],
      },
      uv: {
        alias: "skin",
        start: [20, 20],
        end: [16, 32]
      }
    }),
    // MARK: > Body/Back
    new Square({
      tag: ["body"],
      length: [8, 12],
      base: {
        center: [0, 0, 2],
        angle: [0, deg2Rad(-180), 0],
        offset: [0, -6, 0],
      },
      uv: {
        alias: "skin",
        start: [40, 20],
        end: [32, 32]
      }
    }),
    // MARK: > Body/Right
    new Square({
      tag: ["body"],
      length: [4, 12],
      base: {
        center: [0, 0, 4],
        angle: [0, deg2Rad(-270), 0],
        offset: [0, -6, 0],
      },
      uv: {
        alias: "skin",
        start: [32, 20],
        end: [28, 32]
      }
    }),
    // MARK: > Body/Top
    new Square({
      tag: ["body"],
      length: [8, 4],
      base: {
        center: [0, 0, 6],
        angle: [deg2Rad(90), 0, 0],
        offset: [0, -6, 0],
      },
      uv: {
        alias: "skin",
        start: [28, 16],
        end: [20, 20]
      }
    }),
    // MARK: > Body/Bottom
    new Square({
      tag: ["body"],
      length: [8, 4],
      base: {
        center: [0, 0, 6],
        angle: [deg2Rad(-90), 0, 0],
        offset: [0, -6, 0],
      },
      uv: {
        alias: "skin",
        start: [36, 20],
        end: [28, 16]
      }
    }),
  ],
  rightArm: [
    // MARK: > RightArm/Front
    new Square({
      tag: ["arm", "rightArm"],
      length: [4, 12],
      base: {
        center: [0, 4, 2],
        angle: [0, 0, 0],
        offset: [6, -2, 0],
      },
      uv: {
        alias: "skin",
        start: [48, 20],
        end: [44, 32]
      }
    }),
    // MARK: > RightArm/Right
    new Square({
      tag: ["arm", "rightArm"],
      length: [4, 12],
      base: {
        center: [0, 4, 2],
        angle: [0, deg2Rad(-90), 0],
        offset: [6, -2, 0],
      },
      uv: {
        alias: "skin",
        start: [44, 20],
        end: [40, 32]
      }
    }),
    // MARK: > RightArm/Back
    new Square({
      tag: ["arm", "rightArm"],
      length: [4, 12],
      base: {
        center: [0, 4, 2],
        angle: [0, deg2Rad(-180), 0],
        offset: [6, -2, 0],
      },
      uv: {
        alias: "skin",
        start: [56, 20],
        end: [52, 32]
      }
    }),
    // MARK: > RightArm/Left
    new Square({
      tag: ["arm", "rightArm"],
      length: [4, 12],
      base: {
        center: [0, 4, 2],
        angle: [0, deg2Rad(-270), 0],
        offset: [6.1, -2, 0],
      },
      uv: {
        alias: "skin",
        start: [52, 20],
        end: [48, 32]
      }
    }),
    // MARK: > RightArm/Top
    new Square({
      tag: ["arm", "rightArm"],
      length: [4, 4],
      base: {
        center: [0, 0, 2],
        angle: [deg2Rad(90), 0, 0],
        offset: [6, -2, 0],
      },
      uv: {
        alias: "skin",
        start: [48, 16],
        end: [44, 20]
      }
    }),
    // MARK: > RightArm/Bottom
    new Square({
      tag: ["arm", "rightArm"],
      length: [4, 4],
      base: {
        center: [0, 0, 10],
        angle: [deg2Rad(-90), 0, 0],
        offset: [6, -2, 0],
      },
      uv: {
        alias: "skin",
        start: [52, 20],
        end: [48, 16]
      }
    }),
  ],
  rightLegs: [
    // MARK: > RightLegs/Front
    new Square({
      tag: ["legs", "rightLegs"],
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, 0, 0],
        offset: [2, -12, 0],
      },
      uv: {
        alias: "skin",
        start: [8, 20],
        end: [4, 32]
      }
    }),
    // MARK: > RightLegs/Right
    new Square({
      tag: ["legs", "rightLegs"],
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-90), 0],
        offset: [2, -12, 0],
      },
      uv: {
        alias: "skin",
        start: [4, 20],
        end: [0, 32]
      }
    }),
    // MARK: > RightLegs/Back
    new Square({
      tag: ["legs", "rightLegs"],
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-180), 0],
        offset: [2, -12, 0],
      },
      uv: {
        alias: "skin",
        start: [16, 20],
        end: [12, 32]
      }
    }),
    // MARK: > RightLegs/Left
    new Square({
      tag: ["legs", "rightLegs"],
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-270), 0],
        offset: [2, -12, 0],
      },
      uv: {
        alias: "skin",
        start: [12, 20],
        end: [8, 32]
      }
    }),
    // MARK: > RightLegs/Top
    new Square({
      tag: ["legs", "rightLegs"],
      length: [4, 4],
      base: {
        center: [0, 0, 0],
        angle: [deg2Rad(90), 0, 0],
        offset: [2, -12, 0],
      },
      uv: {
        alias: "skin",
        start: [8, 16],
        end: [4, 20]
      }
    }),
    // MARK: > RightLegs/Bottom
    new Square({
      tag: ["legs", "rightLegs"],
      length: [4, 4],
      base: {
        center: [0, 0, 12],
        angle: [deg2Rad(-90), 0, 0],
        offset: [2, -12, 0],
      },
      uv: {
        alias: "skin",
        start: [12, 20],
        end: [8, 16]
      }
    }),
  ]
}
// * MARK: Define Cubes
/** @type {Square[]} */
const minecraft_player_model = [
  ...model.origin,
  ...model.heads,
  ...model.body,
  ...model.rightArm,
  ...model.rightLegs
]

async function main() {
  // * MARK: Canvas Initialize
  /** @type {HTMLCanvasElement} */
  //@ts-expect-error
  const canvas = document.getElementById("canvas");

  /** @type {WebGLRenderingContext | null} */
  const gl = canvas.getContext("webgl");
  if (!gl) {
    alert("WebGLをサポートしていません");
    return;
  }

  // WebGLの初期設定
  gl.enable(gl.DEPTH_TEST);
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.1, 0.1, 0.1, 1.0);

  // * MARK: WebGL Initialize
  // シェーダーのソースコード
  const vertexShaderSource = `
        attribute vec3 a_position;
        attribute vec2 a_texCoord;
        
        uniform mat4 u_matrix;
        
        varying vec2 v_texCoord;
        
        void main() {
          gl_Position = u_matrix * vec4(a_position, 1.0);
          v_texCoord = a_texCoord;
        }
      `;

  const fragmentShaderSource = `
        precision mediump float;
        
        varying vec2 v_texCoord;
        uniform sampler2D u_texture;
        
        void main() {
          gl_FragColor = texture2D(u_texture, v_texCoord);
        }
      `;

  // シェーダーとプログラムの作成
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  if (!vertexShader || !fragmentShader) return;

  const program = createProgram(gl, vertexShader, fragmentShader);
  if (!program) return;

  // 画像が読み込まれたら描画開始
  const textures = await loadTextures(gl, {
    "skin": "./template.png"
  })
  
  // Mirror Skin
  if (textures["skin"].height== 32) {

  }
  // Custom Skin
  if (textures["skin"].height== 32) {

  }

  // アニメーション開始
  startAnimation(canvas.height / canvas.width, gl, program, textures);
}

/**
 * @param {number} aspectRatio
 * @param {WebGLRenderingContext} gl
 * @param {WebGLProgram} program
 * @param {Textures} textures
 */
function startAnimation(aspectRatio, gl, program, textures) {
  // バッファの作成
  const positionBuffer = gl.createBuffer();
  const texCoordBuffer = gl.createBuffer();
  // 属性の位置を取得
  const positionLocation = gl.getAttribLocation(program, "a_position");
  const texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
  const matrixLocation = gl.getUniformLocation(program, "u_matrix");

  const camera = new Camera({
    offset: [0, 0, -60],
    rotation: [0, 0, 0]
  })
  camera.setPerspective(deg2Rad(45), aspectRatio, 0.1, 500);
  camera.rotation[0] = deg2Rad(0)
  camera.rotation[1] = deg2Rad(135)

  let rotation = 0
  function render() {
    rotation += 0.5;

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(program);

    // camera.rotation[1] = deg2Rad(rotation)

    gl.uniformMatrix4fv(matrixLocation, false, camera.getProjectionViewMatrix());

    // 各面を描画
    minecraft_player_model.forEach(square => {
      if (square.tag?.includes("rightLegs")) {
        square.effect = {
          center: [0, 0, 0],
          // angle: [deg2Rad(0), deg2Rad(-rotation * 0.5), 0],
          angle: [deg2Rad(-rotation), deg2Rad(0), 0],
          // angle: [deg2Rad(90), deg2Rad(0), 0],
          offset: [0, 0, 0],
        }
      }



      const data = square.toWebGL(textures)
      // 頂点座標
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.vertexPositions), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

      // テクスチャ座標
      gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data.textureCoordinates), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(texCoordLocation);
      gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);

      // 描画
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    })

    requestAnimationFrame(render);
  }
  render();
}

main();