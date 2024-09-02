import {
  plus310ted5e4i90h as plus,
  numberToInt1ygmcfwhs2fkq as numberToInt,
  initMetadataForClassbxx6q50dy2s7 as initMetadataForClass,
  THROW_CCE2g6jy02ryeudk as THROW_CCE,
  equals2au1ep9vhcato as equals,
  ArrayList3it5z8td81qkl as ArrayList,
  Unit_instanceat14thlj150z as Unit_instance,
  shuffled357jrbcm2hlkc as shuffled,
  listOf1jh22dvmctj1r as listOf,
  until1jbpn0z3f8lbg as until,
  step18s9qzr5xwxat as step,
  toInt5qdj874w69jh as toInt,
} from './kotlin-kotlin-stdlib.mjs';
//region block: imports
//endregion
//region block: pre-declaration
class PerlinNoise {
  constructor() {
    var tmp = this;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'dev.yidafu.perlin.PerlinNoise.P.<anonymous>' call
    var list = createDefaultPermutationTable();
    tmp.y4_1 = plus(list, list);
  }
  z4(x, y) {
    // Inline function 'kotlin.math.floor' call
    var tmp$ret$0 = Math.floor(x);
    var X = numberToInt(tmp$ret$0) & 255;
    // Inline function 'kotlin.math.floor' call
    var tmp$ret$1 = Math.floor(y);
    var Y = numberToInt(tmp$ret$1) & 255;
    // Inline function 'kotlin.math.floor' call
    var X_f = x - Math.floor(x);
    // Inline function 'kotlin.math.floor' call
    var Y_f = y - Math.floor(y);
    var topRight = new Vector2(X_f - 1.0, Y_f - 1.0);
    var topLeft = new Vector2(X_f, Y_f - 1.0);
    var bottomRight = new Vector2(X_f - 1.0, Y_f);
    var bottomLeft = new Vector2(X_f, Y_f);
    var valueTopRight = this.y4_1.r((this.y4_1.r(X + 1 | 0) + Y | 0) + 1 | 0);
    var valueTopLeft = this.y4_1.r((this.y4_1.r(X) + Y | 0) + 1 | 0);
    var valueBottomRight = this.y4_1.r(this.y4_1.r(X + 1 | 0) + Y | 0);
    var valueBottomLeft = this.y4_1.r(this.y4_1.r(X) + Y | 0);
    var dotTopRight = topRight.c5(getConstantVector(valueTopRight));
    var dotTopLeft = topLeft.c5(getConstantVector(valueTopLeft));
    var dotBottomRight = bottomRight.c5(getConstantVector(valueBottomRight));
    var dotBottomLeft = bottomLeft.c5(getConstantVector(valueBottomLeft));
    var u = fade(X_f);
    var v = fade(Y_f);
    return lerp(u, lerp(v, dotBottomLeft, dotTopLeft), lerp(v, dotBottomRight, dotTopRight));
  }
  d5() {
    var list = createPermutationTable();
    this.y4_1 = plus(list, list);
  }
  e5() {
    var list = createDefaultPermutationTable();
    this.y4_1 = plus(list, list);
  }
}
class Vector2 {
  constructor(x, y) {
    this.a5_1 = x;
    this.b5_1 = y;
  }
  c5(other) {
    return this.a5_1 * other.a5_1 + this.b5_1 * other.b5_1;
  }
  toString() {
    return 'Vector2(x=' + this.a5_1 + ', y=' + this.b5_1 + ')';
  }
  equals(other) {
    if (this === other)
      return true;
    if (!(other instanceof Vector2))
      return false;
    var tmp0_other_with_cast = other instanceof Vector2 ? other : THROW_CCE();
    if (!equals(this.a5_1, tmp0_other_with_cast.a5_1))
      return false;
    if (!equals(this.b5_1, tmp0_other_with_cast.b5_1))
      return false;
    return true;
  }
}
//endregion
function fade(t) {
  return 6 * t * t * t * t * t - 15 * t * t * t * t + 10 * t * t * t;
}
function lerp(t, a1, a2) {
  return a1 + t * (a2 - a1);
}
function createPermutationTable() {
  // Inline function 'kotlin.collections.MutableList' call
  var list = ArrayList.n(256);
  // Inline function 'kotlin.repeat' call
  // Inline function 'kotlin.contracts.contract' call
  var inductionVariable = 0;
  if (inductionVariable < 256)
    do {
      var index = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.MutableList.<anonymous>' call
      // Inline function 'dev.yidafu.perlin.createPermutationTable.<anonymous>' call
      list.t(index);
    }
     while (inductionVariable < 256);
  var list_0 = list;
  var list2 = shuffled(list_0);
  return plus(list2, list2);
}
function createDefaultPermutationTable() {
  return listOf([151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180]);
}
function getConstantVector(v) {
  var h = v & 3;
  switch (h) {
    case 0:
      return new Vector2(1.0, 1.0);
    case 1:
      return new Vector2(-1.0, 1.0);
    case 2:
      return new Vector2(-1.0, -1.0);
    default:
      return new Vector2(1.0, -1.0);
  }
}
function get_perlin() {
  _init_properties_Main_kt__xi25uv();
  return perlin;
}
var perlin;
function generateTerrain(size, ctx) {
  _init_properties_Main_kt__xi25uv();
  ctx.clearRect(0.0, 0.0, 500.0, 500.0);
  var progression = step(until(0, size), 1);
  var inductionVariable = progression.v_1;
  var last = progression.w_1;
  var step_0 = progression.x_1;
  if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
    do {
      var y = inductionVariable;
      inductionVariable = inductionVariable + step_0 | 0;
      var progression_0 = step(until(0, size), 1);
      var inductionVariable_0 = progression_0.v_1;
      var last_0 = progression_0.w_1;
      var step_1 = progression_0.x_1;
      if (step_1 > 0 && inductionVariable_0 <= last_0 || (step_1 < 0 && last_0 <= inductionVariable_0))
        do {
          var x = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_1 | 0;
          var n = 0.0;
          var a = 1.0;
          var f = 0.005;
          var inductionVariable_1 = 0;
          if (inductionVariable_1 <= 8)
            do {
              var o = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              var v = a * get_perlin().z4(x * f, y * f);
              n = n + v;
              a = a * 0.5;
              f = f * 2.0;
            }
             while (inductionVariable_1 <= 8);
          n = n + 1.0;
          n = n * 0.5;
          // Inline function 'kotlin.math.floor' call
          var x_0 = 255 * n;
          var value = Math.floor(x_0);
          var tmp;
          if (value < 128) {
            tmp = 'rgb(0,0,' + value + ')';
          } else if (value < 230) {
            tmp = 'rgb(0, ' + value + ',' + value / 2 + ')';
          } else {
            tmp = 'rgb(' + value + ',' + value + ',' + value + ')';
          }
          var color = tmp;
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 1.0, 1.0);
        }
         while (!(x === last_0));
    }
     while (!(y === last));
}
function main() {
  _init_properties_Main_kt__xi25uv();
  var tmp = document.getElementById('canvas');
  var canvas = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
  var tmp_0 = canvas.getContext('2d');
  var ctx = tmp_0 instanceof CanvasRenderingContext2D ? tmp_0 : THROW_CCE();
  var imageSize = {_v: 500};
  generateTerrain(imageSize._v, ctx);
  var tmp_1 = document.getElementById('imageSize');
  var range = tmp_1 instanceof HTMLInputElement ? tmp_1 : THROW_CCE();
  range.onchange = main$lambda(imageSize, ctx);
  var tmp_2 = document.getElementById('resetSeed');
  var resetBtn = tmp_2 instanceof HTMLInputElement ? tmp_2 : THROW_CCE();
  resetBtn.onclick = main$lambda_0(imageSize, ctx);
  var tmp_3 = document.getElementById('defaultSeed');
  var defaultBtn = tmp_3 instanceof HTMLInputElement ? tmp_3 : THROW_CCE();
  defaultBtn.onclick = main$lambda_1(imageSize, ctx);
}
function main$lambda($imageSize, $ctx) {
  return function (evt) {
    var tmp = evt.target;
    var i = tmp instanceof HTMLInputElement ? tmp : THROW_CCE();
    var size = toInt(i.value, 10);
    $imageSize._v = size;
    generateTerrain(size, $ctx);
    return Unit_instance;
  };
}
function main$lambda_0($imageSize, $ctx) {
  return function (it) {
    get_perlin().d5();
    generateTerrain($imageSize._v, $ctx);
    return Unit_instance;
  };
}
function main$lambda_1($imageSize, $ctx) {
  return function (it) {
    get_perlin().e5();
    generateTerrain($imageSize._v, $ctx);
    return Unit_instance;
  };
}
var properties_initialized_Main_kt_gqj46d;
function _init_properties_Main_kt__xi25uv() {
  if (!properties_initialized_Main_kt_gqj46d) {
    properties_initialized_Main_kt_gqj46d = true;
    perlin = new PerlinNoise();
  }
}
function mainWrapper() {
  main();
}
//region block: post-declaration
initMetadataForClass(PerlinNoise, 'PerlinNoise', PerlinNoise);
initMetadataForClass(Vector2, 'Vector2');
//endregion
mainWrapper();

//# sourceMappingURL=PerlinNoise.mjs.map
