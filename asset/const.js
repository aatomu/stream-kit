const template_uv = {
  head: getUVbySize([8, 8, 8], "skin", [0, 0]),
  body: getUVbySize([8, 12, 4], "skin", [16, 16]),
  rightArmWide: getUVbySize([4, 12, 4], "skin", [40, 16]),
  leftArmWideX32: Object.fromEntries(
    Object.entries(getUVbySize([4, 12, 4], "skin", [40, 16])).map(([k, v]) => {
      const tmp = v.start[0]
      v.start[0] = v.end[0]
      v.end[0] = tmp
      return [k, v]
    }),
  ),
  rightLeg: getUVbySize([4, 12, 4], "skin", [0, 16]),
  leftLegX32: Object.fromEntries(
    Object.entries(getUVbySize([4, 12, 4], "skin", [0, 16])).map(([k, v]) => {
      const tmp = v.start[0]
      v.start[0] = v.end[0]
      v.end[0] = tmp
      return [k, v]
    }),
  ),
}

const template_surface = {
  leftArmWide: {
    front: {
      length: [4, 12],
      base: {
        center: [0, 4, 2],
        angle: [0, 0, 0],
        offset: [-6, -2, 0],
      },
    },
    right: {
      length: [4, 12],
      base: {
        center: [0, 4, 2],
        angle: [0, deg2Rad(-90), 0],
        offset: [-6, -2, 0],
      },
    },
    back: {
      base: {
        center: [0, 4, 2],
        angle: [0, deg2Rad(-180), 0],
        offset: [-6, -2, 0],
      },
    },
    left: {
      length: [4, 12],
      base: {
        center: [0, 4, 2],
        angle: [0, deg2Rad(-270), 0],
        offset: [-6, -2, 0],
      },
    },
    top: {
      length: [4, 4],
      base: {
        center: [0, 0, 2],
        angle: [deg2Rad(90), 0, 0],
        offset: [-6, -2, 0],
      },
    },
    bottom: {
      length: [4, 4],
      base: {
        center: [0, 0, 10],
        angle: [deg2Rad(-90), 0, 0],
        offset: [-6, -2, 0],
      },
    }
  },
  leftLeg: {
    front: {
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, 0, 0],
        offset: [-2, -12, 0],
      },
    },
    right: {
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-90), 0],
        offset: [-2, -12, 0],
      },
    },
    back: {
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-180), 0],
        offset: [-2, -12, 0],
      },
    },
    left: {
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-270), 0],
        offset: [-2, -12, 0],
      },
    },
    top: {
      length: [4, 4],
      base: {
        center: [0, 0, 0],
        angle: [deg2Rad(90), 0, 0],
        offset: [-2, -12, 0],
      },
    },
    bottom: {
      length: [4, 4],
      base: {
        center: [0, 0, 12],
        angle: [deg2Rad(-90), 0, 0],
        offset: [-2, -12, 0],
      },
    }
  }
}

const model = {
  axis: [
    // MARK: > Axis/X
    new Square({
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
    // MARK: > Axis/Y
    new Square({
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
      uv: template_uv.head.front
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
      uv: template_uv.head.right
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
      uv: template_uv.head.back
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
      uv: template_uv.head.left
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
      uv: template_uv.head.top
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
      uv: template_uv.head.bottom
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
      uv: template_uv.body.front
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
      uv: template_uv.body.right
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
      uv: template_uv.body.back
    }),
    // MARK: > Body/Left
    new Square({
      tag: ["body"],
      length: [4, 12],
      base: {
        center: [0, 0, 4],
        angle: [0, deg2Rad(-270), 0],
        offset: [0, -6, 0],
      },
      uv: template_uv.body.left
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
      uv: template_uv.body.top
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
      uv: template_uv.body.bottom
    }),
  ],
  rightArmWide: [
    // MARK: > RightArm/Front
    new Square({
      tag: ["arm", "rightArm"],
      length: [4, 12],
      base: {
        center: [0, 4, 2],
        angle: [0, 0, 0],
        offset: [6, -2, 0],
      },
      uv: template_uv.rightArmWide.front
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
      uv: template_uv.rightArmWide.right
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
      uv: template_uv.rightArmWide.back
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
      uv: template_uv.rightArmWide.left
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
      uv: template_uv.rightArmWide.top
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
      uv: template_uv.rightArmWide.bottom
    }),
  ],
  leftArmWideX32: [
    // MARK: > LeftArm/Front
    new Square({
      tag: ["arm", "leftArm"],
      ...template_surface.leftArmWide.front,
      uv: template_uv.leftArmWideX32.front
    }),
    // MARK: > LeftArm/Right
    new Square({
      tag: ["arm", "leftArm"],
      ...template_surface.leftArmWide.right,
      uv: template_uv.leftArmWideX32.left
    }),
    // MARK: > LeftArm/Back
    new Square({
      tag: ["arm", "leftArm"],
      length: [4, 12],
      ...template_surface.leftArmWide.back,
      uv: template_uv.leftArmWideX32.back
    }),
    // MARK: > LeftArm/Left
    new Square({
      tag: ["arm", "leftArm"],
      ...template_surface.leftArmWide.left,
      uv: template_uv.leftArmWideX32.right
    }),
    // MARK: > LeftArm/Top
    new Square({
      tag: ["arm", "leftArm"],
      ...template_surface.leftArmWide.top,
      uv: template_uv.leftArmWideX32.top
    }),
    // MARK: > LeftArm/Bottom
    new Square({
      tag: ["arm", "leftArm"],
      ...template_surface.leftArmWide.bottom,
      uv: template_uv.leftArmWideX32.bottom
    }),
  ],
  rightLeg: [
    // MARK: > RightLeg/Front
    new Square({
      tag: ["legs", "rightLeg"],
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, 0, 0],
        offset: [2, -12, 0],
      },
      uv: template_uv.rightLeg.front
    }),
    // MARK: > RightLeg/Right
    new Square({
      tag: ["legs", "rightLeg"],
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-90), 0],
        offset: [2, -12, 0],
      },
      uv: template_uv.rightLeg.right
    }),
    // MARK: > RightLeg/Back
    new Square({
      tag: ["legs", "rightLeg"],
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-180), 0],
        offset: [2, -12, 0],
      },
      uv: template_uv.rightLeg.back
    }),
    // MARK: > RightLeg/Left
    new Square({
      tag: ["legs", "rightLeg"],
      length: [4, 12],
      base: {
        center: [0, 6, 2],
        angle: [0, deg2Rad(-270), 0],
        offset: [2, -12, 0],
      },
      uv: template_uv.rightLeg.left
    }),
    // MARK: > RightLeg/Top
    new Square({
      tag: ["legs", "rightLeg"],
      length: [4, 4],
      base: {
        center: [0, 0, 0],
        angle: [deg2Rad(90), 0, 0],
        offset: [2, -12, 0],
      },
      uv: template_uv.rightLeg.top
    }),
    // MARK: > RightLeg/Bottom
    new Square({
      tag: ["legs", "rightLeg"],
      length: [4, 4],
      base: {
        center: [0, 0, 12],
        angle: [deg2Rad(-90), 0, 0],
        offset: [2, -12, 0],
      },
      uv: template_uv.rightLeg.bottom
    }),
  ],
  leftLegX32: [
    // MARK: > LeftLeg/Front
    new Square({
      tag: ["legs", "leftLeg"],
      ...template_surface.leftLeg.front,
      uv: template_uv.leftLegX32.front
    }),
    // MARK: > LeftLeg/Right
    new Square({
      tag: ["legs", "leftLeg"],
      ...template_surface.leftLeg.right,
      uv: template_uv.leftLegX32.left
    }),
    // MARK: > LeftLeg/Back
    new Square({
      tag: ["legs", "leftLeg"],
      ...template_surface.leftLeg.back,
      uv: template_uv.leftLegX32.back
    }),
    // MARK: > LeftLeg/Left
    new Square({
      tag: ["legs", "leftLeg"],
      ...template_surface.leftLeg.left,
      uv: template_uv.leftLegX32.right
    }),
    // MARK: > LeftLeg/Top
    new Square({
      tag: ["legs", "leftLeg"],
      ...template_surface.leftLeg.top,
      uv: template_uv.leftLegX32.top
    }),
    // MARK: > LeftLeg/Bottom
    new Square({
      tag: ["legs", "leftLeg"],
      ...template_surface.leftLeg.bottom,
      uv: template_uv.leftLegX32.bottom
    }),
  ],
}


/**
 * 
 * @param {[number,number,number]} size 
 * @param {string} alias
 * @param {[number,number]} start 
 * @returns {{[facing: string]: UV}}}
 */
function getUVbySize(size, alias, start) {
  const [x, y, z] = size;

  return {
    front: {
      alias: alias,
      start: [start[0] + z + x, start[1] + z],
      end: [start[0] + z, start[1] + z + y]
    },
    right: {
      alias: alias,
      start: [start[0] + z, start[1] + z],
      end: [start[0], start[1] + z + y]
    },
    back: {
      alias: alias,
      start: [start[0] + z + x + z + x, start[1] + z],
      end: [start[0] + z + x + z, start[1] + z + y]
    },
    left: {
      alias: alias,
      start: [start[0] + z + x + z, start[1] + z],
      end: [start[0] + z + x, start[1] + z + y]
    },
    top: {
      alias: alias,
      start: [start[0] + z + x, start[1]],
      end: [start[0] + z, start[1] + z]
    },
    bottom: {
      alias: alias,
      start: [start[0] + z + x + x, start[1] + z],
      end: [start[0] + z + x, start[1]]
    }
  };
}
