//region block: polyfills
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
//endregion
//region block: imports
var imul_0 = Math.imul;
var isView = ArrayBuffer.isView;
var clz32 = Math.clz32;
//endregion
//region block: pre-declaration
class CharSequence {}
class Number_0 {}
class Unit {
  toString() {
    return 'kotlin.Unit';
  }
}
class Char {}
class Collection {}
class KtList {}
class Companion {
  constructor() {
    Companion_instance = this;
    this.a1_1 = new Long(0, -2147483648);
    this.b1_1 = new Long(-1, 2147483647);
    this.c1_1 = 8;
    this.d1_1 = 64;
  }
}
class Long extends Number_0 {
  constructor(low, high) {
    Companion_getInstance();
    super();
    this.e1_1 = low;
    this.f1_1 = high;
  }
  g1(other) {
    return add(this, other);
  }
  h1(other) {
    return divide(this, other);
  }
  i1() {
    return this.j1().g1(new Long(1, 0));
  }
  j1() {
    return new Long(~this.e1_1, ~this.f1_1);
  }
  k1() {
    return this.e1_1;
  }
  l1() {
    return toNumber(this);
  }
  toString() {
    return toStringImpl(this, 10);
  }
  equals(other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  }
  valueOf() {
    return this.l1();
  }
}
class Digit {
  constructor() {
    Digit_instance = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.b2_1 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
  }
}
class AbstractCollection {
  static d2() {
    return createThis(this);
  }
  z() {
    return this.m() === 0;
  }
  toString() {
    return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  }
  toArray() {
    return collectionToArray(this);
  }
}
class AbstractMutableCollection extends AbstractCollection {
  static c2() {
    return this.d2();
  }
  o(elements) {
    this.e2();
    var modified = false;
    var tmp0_iterator = elements.f();
    while (tmp0_iterator.g()) {
      var element = tmp0_iterator.h();
      if (this.t(element))
        modified = true;
    }
    return modified;
  }
  toJSON() {
    return this.toArray();
  }
  e2() {
  }
}
class IteratorImpl {
  constructor($outer) {
    this.h2_1 = $outer;
    this.f2_1 = 0;
    this.g2_1 = -1;
  }
  g() {
    return this.f2_1 < this.h2_1.m();
  }
  h() {
    if (!this.g())
      throw NoSuchElementException.l2();
    var tmp = this;
    var tmp1 = this.f2_1;
    this.f2_1 = tmp1 + 1 | 0;
    tmp.g2_1 = tmp1;
    return this.h2_1.r(this.g2_1);
  }
}
class AbstractMutableList extends AbstractMutableCollection {
  static n2() {
    var $this = this.c2();
    $this.m2_1 = 0;
    return $this;
  }
  t(element) {
    this.e2();
    this.o2(this.m(), element);
    return true;
  }
  f() {
    return new IteratorImpl(this);
  }
  equals(other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, KtList) : false))
      return false;
    return Companion_instance_1.q2(this, other);
  }
}
class Companion_0 {
  constructor() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList.n(0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.Companion.Empty.<anonymous>' call
    this_0.k_1 = true;
    tmp.r2_1 = this_0;
  }
}
class ArrayList extends AbstractMutableList {
  static a2(array) {
    Companion_getInstance_0();
    var $this = this.n2();
    $this.j_1 = array;
    $this.k_1 = false;
    return $this;
  }
  static p() {
    Companion_getInstance_0();
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    return this.a2(tmp$ret$0);
  }
  static n(initialCapacity) {
    Companion_getInstance_0();
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    var $this = this.a2(tmp$ret$0);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'kotlin.collections.ArrayList.<init>.<anonymous>' call
      var message = 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException.p1(toString_1(message));
    }
    return $this;
  }
  static l(elements) {
    Companion_getInstance_0();
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(elements);
    return this.a2(tmp$ret$0);
  }
  m() {
    return this.j_1.length;
  }
  r(index) {
    var tmp = this.j_1[rangeCheck(this, index)];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  s(index, element) {
    this.e2();
    rangeCheck(this, index);
    // Inline function 'kotlin.apply' call
    var this_0 = this.j_1[index];
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.set.<anonymous>' call
    this.j_1[index] = element;
    var tmp = this_0;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  }
  t(element) {
    this.e2();
    // Inline function 'kotlin.js.asDynamic' call
    this.j_1.push(element);
    this.m2_1 = this.m2_1 + 1 | 0;
    return true;
  }
  o2(index, element) {
    this.e2();
    // Inline function 'kotlin.js.asDynamic' call
    this.j_1.splice(insertionRangeCheck(this, index), 0, element);
    this.m2_1 = this.m2_1 + 1 | 0;
  }
  o(elements) {
    this.e2();
    if (elements.z())
      return false;
    var offset = increaseLength(this, elements.m());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = elements.f();
    while (tmp0_iterator.g()) {
      var item = tmp0_iterator.h();
      // Inline function 'kotlin.collections.ArrayList.addAll.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      this.j_1[offset + index_0 | 0] = item;
    }
    this.m2_1 = this.m2_1 + 1 | 0;
    return true;
  }
  toString() {
    return arrayToString(this.j_1);
  }
  u2() {
    return [].slice.call(this.j_1);
  }
  toArray() {
    return this.u2();
  }
  e2() {
    if (this.k_1)
      throw UnsupportedOperationException.y2();
  }
}
class Exception extends Error {
  static z2() {
    var $this = createThis(this);
    init_kotlin_Exception($this);
    setPropertiesToThrowableInstance($this);
    return $this;
  }
  static z1(message) {
    var $this = createThis(this);
    init_kotlin_Exception($this);
    setPropertiesToThrowableInstance($this, message);
    return $this;
  }
}
class RuntimeException extends Exception {
  static f3() {
    var $this = this.z2();
    init_kotlin_RuntimeException($this);
    return $this;
  }
  static g3(message) {
    var $this = this.z1(message);
    init_kotlin_RuntimeException($this);
    return $this;
  }
}
class IllegalArgumentException extends RuntimeException {
  static c3() {
    var $this = this.f3();
    init_kotlin_IllegalArgumentException($this);
    return $this;
  }
  static p1(message) {
    var $this = this.g3(message);
    init_kotlin_IllegalArgumentException($this);
    return $this;
  }
}
class IndexOutOfBoundsException extends RuntimeException {
  static k3() {
    var $this = this.f3();
    init_kotlin_IndexOutOfBoundsException($this);
    return $this;
  }
  static l3(message) {
    var $this = this.g3(message);
    init_kotlin_IndexOutOfBoundsException($this);
    return $this;
  }
}
class IllegalStateException extends RuntimeException {
  static m3() {
    var $this = this.f3();
    init_kotlin_IllegalStateException($this);
    return $this;
  }
  static t1(message) {
    var $this = this.g3(message);
    init_kotlin_IllegalStateException($this);
    return $this;
  }
}
class UnsupportedOperationException extends RuntimeException {
  static y2() {
    var $this = this.f3();
    init_kotlin_UnsupportedOperationException($this);
    return $this;
  }
}
class NoSuchElementException extends RuntimeException {
  static l2() {
    var $this = this.f3();
    init_kotlin_NoSuchElementException($this);
    return $this;
  }
}
class NumberFormatException extends IllegalArgumentException {
  static r3() {
    var $this = this.c3();
    init_kotlin_NumberFormatException($this);
    return $this;
  }
  static s3(message) {
    var $this = this.p1(message);
    init_kotlin_NumberFormatException($this);
    return $this;
  }
}
class ArithmeticException extends RuntimeException {
  static w3() {
    var $this = this.f3();
    init_kotlin_ArithmeticException($this);
    return $this;
  }
  static x3(message) {
    var $this = this.g3(message);
    init_kotlin_ArithmeticException($this);
    return $this;
  }
}
class ClassCastException extends RuntimeException {
  static x1() {
    var $this = this.f3();
    init_kotlin_ClassCastException($this);
    return $this;
  }
}
class StringBuilder {
  static y3(content) {
    var $this = createThis(this);
    $this.c_1 = !(content === undefined) ? content : '';
    return $this;
  }
  static d() {
    return this.y3('');
  }
  a() {
    // Inline function 'kotlin.js.asDynamic' call
    return this.c_1.length;
  }
  b(index) {
    // Inline function 'kotlin.text.getOrElse' call
    var this_0 = this.c_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (0 <= index ? index <= (charSequenceLength(this_0) - 1 | 0) : false) {
      tmp = charSequenceGet(this_0, index);
    } else {
      throw IndexOutOfBoundsException.l3('index: ' + index + ', length: ' + this.a() + '}');
    }
    return tmp;
  }
  z3(value) {
    this.c_1 = this.c_1 + toString(value);
    return this;
  }
  e(value) {
    this.c_1 = this.c_1 + toString_0(value);
    return this;
  }
  toString() {
    return this.c_1;
  }
}
class Companion_1 {
  constructor() {
    this.p2_1 = 2147483639;
  }
  s2(index, size) {
    if (index < 0 || index >= size) {
      throw IndexOutOfBoundsException.l3('index: ' + index + ', size: ' + size);
    }
  }
  t2(index, size) {
    if (index < 0 || index > size) {
      throw IndexOutOfBoundsException.l3('index: ' + index + ', size: ' + size);
    }
  }
  q2(c, other) {
    if (!(c.m() === other.m()))
      return false;
    var otherIterator = other.f();
    var tmp0_iterator = c.f();
    while (tmp0_iterator.g()) {
      var elem = tmp0_iterator.h();
      var elemOther = otherIterator.h();
      if (!equals(elem, elemOther)) {
        return false;
      }
    }
    return true;
  }
}
class EmptyList {
  constructor() {
    EmptyList_instance = this;
    this.a4_1 = new Long(-1478467534, -1720727600);
  }
  equals(other) {
    var tmp;
    if (!(other == null) ? isInterface(other, KtList) : false) {
      tmp = other.z();
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return '[]';
  }
  m() {
    return 0;
  }
  z() {
    return true;
  }
  r(index) {
    throw IndexOutOfBoundsException.l3("Empty list doesn't contain element at index " + index + '.');
  }
  f() {
    return EmptyIterator_instance;
  }
}
class EmptyIterator {
  g() {
    return false;
  }
  h() {
    throw NoSuchElementException.l2();
  }
}
class IntIterator {
  h() {
    return this.b4();
  }
}
class Random {
  static e4() {
    Default_getInstance();
    return createThis(this);
  }
  b4() {
    return this.f4(32);
  }
  q(until) {
    return this.g4(0, until);
  }
  g4(from, until) {
    checkRangeBounds(from, until);
    var n = until - from | 0;
    if (n > 0 || n === -2147483648) {
      var tmp;
      if ((n & (-n | 0)) === n) {
        var bitCount = fastLog2(n);
        tmp = this.f4(bitCount);
      } else {
        var v;
        do {
          var bits = this.b4() >>> 1 | 0;
          v = bits % n | 0;
        }
         while (((bits - v | 0) + (n - 1 | 0) | 0) < 0);
        tmp = v;
      }
      var rnd = tmp;
      return from + rnd | 0;
    } else {
      while (true) {
        var rnd_0 = this.b4();
        if (from <= rnd_0 ? rnd_0 < until : false)
          return rnd_0;
      }
    }
  }
}
class Default extends Random {
  static d4() {
    Default_instance = null;
    var $this = this.e4();
    Default_instance = $this;
    $this.c4_1 = defaultPlatformRandom();
    return $this;
  }
  f4(bitCount) {
    return this.c4_1.f4(bitCount);
  }
  b4() {
    return this.c4_1.b4();
  }
  q(until) {
    return this.c4_1.q(until);
  }
  g4(from, until) {
    return this.c4_1.g4(from, until);
  }
}
class Companion_2 {
  constructor() {
    Companion_instance_2 = this;
    this.o4_1 = new Long(0, 0);
  }
}
class XorWowRandom extends Random {
  static p4(x, y, z, w, v, addend) {
    Companion_getInstance_2();
    var $this = this.e4();
    $this.h4_1 = x;
    $this.i4_1 = y;
    $this.j4_1 = z;
    $this.k4_1 = w;
    $this.l4_1 = v;
    $this.m4_1 = addend;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(($this.h4_1 | $this.i4_1 | $this.j4_1 | $this.k4_1 | $this.l4_1) === 0)) {
      // Inline function 'kotlin.random.XorWowRandom.<anonymous>' call
      var message = 'Initial state must have at least one non-zero element.';
      throw IllegalArgumentException.p1(toString_1(message));
    }
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < 64)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.random.XorWowRandom.<anonymous>' call
        $this.b4();
      }
       while (inductionVariable < 64);
    return $this;
  }
  static n4(seed1, seed2) {
    Companion_getInstance_2();
    return this.p4(seed1, seed2, 0, 0, ~seed1, seed1 << 10 ^ (seed2 >>> 4 | 0));
  }
  b4() {
    var t = this.h4_1;
    t = t ^ (t >>> 2 | 0);
    this.h4_1 = this.i4_1;
    this.i4_1 = this.j4_1;
    this.j4_1 = this.k4_1;
    var v0 = this.l4_1;
    this.k4_1 = v0;
    t = t ^ t << 1 ^ v0 ^ v0 << 4;
    this.l4_1 = t;
    this.m4_1 = this.m4_1 + 362437 | 0;
    return t + this.m4_1 | 0;
  }
  f4(bitCount) {
    return takeUpperBits(this.b4(), bitCount);
  }
}
class Companion_3 {
  constructor() {
    Companion_instance_3 = this;
    this.u_1 = new IntRange(1, 0);
  }
}
class IntProgression {
  constructor(start, endInclusive, step) {
    if (step === 0)
      throw IllegalArgumentException.p1('Step must be non-zero.');
    if (step === -2147483648)
      throw IllegalArgumentException.p1('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.v_1 = start;
    this.w_1 = getProgressionLastElement(start, endInclusive, step);
    this.x_1 = step;
  }
  f() {
    return new IntProgressionIterator(this.v_1, this.w_1, this.x_1);
  }
  z() {
    return this.x_1 > 0 ? this.v_1 > this.w_1 : this.v_1 < this.w_1;
  }
  equals(other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = this.z() && other.z() || (this.v_1 === other.v_1 && this.w_1 === other.w_1 && this.x_1 === other.x_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return this.x_1 > 0 ? '' + this.v_1 + '..' + this.w_1 + ' step ' + this.x_1 : '' + this.v_1 + ' downTo ' + this.w_1 + ' step ' + (-this.x_1 | 0);
  }
}
class IntRange extends IntProgression {
  constructor(start, endInclusive) {
    Companion_getInstance_3();
    super(start, endInclusive, 1);
  }
  z() {
    return this.v_1 > this.w_1;
  }
  equals(other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = this.z() && other.z() || (this.v_1 === other.v_1 && this.w_1 === other.w_1);
    } else {
      tmp = false;
    }
    return tmp;
  }
  toString() {
    return '' + this.v_1 + '..' + this.w_1;
  }
}
class IntProgressionIterator extends IntIterator {
  constructor(first, last, step) {
    super();
    this.t4_1 = step;
    this.u4_1 = last;
    this.v4_1 = this.t4_1 > 0 ? first <= last : first >= last;
    this.w4_1 = this.v4_1 ? first : this.u4_1;
  }
  g() {
    return this.v4_1;
  }
  b4() {
    var value = this.w4_1;
    if (value === this.u4_1) {
      if (!this.v4_1)
        throw NoSuchElementException.l2();
      this.v4_1 = false;
    } else {
      this.w4_1 = this.w4_1 + this.t4_1 | 0;
    }
    return value;
  }
}
class Companion_4 {
  y(rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  }
}
//endregion
var Unit_instance;
function Unit_getInstance() {
  return Unit_instance;
}
function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  return joinTo(_this__u8e3s4, StringBuilder.d(), separator, prefix, postfix, limit, truncated, transform).toString();
}
function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  buffer.e(prefix);
  var count = 0;
  var inductionVariable = 0;
  var last = _this__u8e3s4.length;
  $l$loop: while (inductionVariable < last) {
    var element = _this__u8e3s4[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    count = count + 1 | 0;
    if (count > 1) {
      buffer.e(separator);
    }
    if (limit < 0 || count <= limit) {
      appendElement(buffer, element, transform);
    } else
      break $l$loop;
  }
  if (limit >= 0 && count > limit) {
    buffer.e(truncated);
  }
  buffer.e(postfix);
  return buffer;
}
function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  return joinTo_0(_this__u8e3s4, StringBuilder.d(), separator, prefix, postfix, limit, truncated, transform).toString();
}
function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
  separator = separator === VOID ? ', ' : separator;
  prefix = prefix === VOID ? '' : prefix;
  postfix = postfix === VOID ? '' : postfix;
  limit = limit === VOID ? -1 : limit;
  truncated = truncated === VOID ? '...' : truncated;
  transform = transform === VOID ? null : transform;
  buffer.e(prefix);
  var count = 0;
  var tmp0_iterator = _this__u8e3s4.f();
  $l$loop: while (tmp0_iterator.g()) {
    var element = tmp0_iterator.h();
    count = count + 1 | 0;
    if (count > 1) {
      buffer.e(separator);
    }
    if (limit < 0 || count <= limit) {
      appendElement(buffer, element, transform);
    } else
      break $l$loop;
  }
  if (limit >= 0 && count > limit) {
    buffer.e(truncated);
  }
  buffer.e(postfix);
  return buffer;
}
function plus(_this__u8e3s4, elements) {
  if (isInterface(elements, Collection)) {
    var result = ArrayList.n(_this__u8e3s4.m() + elements.m() | 0);
    result.o(_this__u8e3s4);
    result.o(elements);
    return result;
  } else {
    var result_0 = ArrayList.l(_this__u8e3s4);
    addAll(result_0, elements);
    return result_0;
  }
}
function toMutableList(_this__u8e3s4) {
  if (isInterface(_this__u8e3s4, Collection))
    return toMutableList_0(_this__u8e3s4);
  return toCollection(_this__u8e3s4, ArrayList.p());
}
function shuffle(_this__u8e3s4, random) {
  var inductionVariable = get_lastIndex(_this__u8e3s4);
  if (1 <= inductionVariable)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + -1 | 0;
      var j = random.q(i + 1 | 0);
      _this__u8e3s4.s(j, _this__u8e3s4.s(i, _this__u8e3s4.r(j)));
    }
     while (1 <= inductionVariable);
}
function toMutableList_0(_this__u8e3s4) {
  return ArrayList.l(_this__u8e3s4);
}
function toCollection(_this__u8e3s4, destination) {
  var tmp0_iterator = _this__u8e3s4.f();
  while (tmp0_iterator.g()) {
    var item = tmp0_iterator.h();
    destination.t(item);
  }
  return destination;
}
function until(_this__u8e3s4, to) {
  if (to <= -2147483648)
    return Companion_getInstance_3().u_1;
  return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
}
function step(_this__u8e3s4, step) {
  checkStepIsPositive(step > 0, step);
  return Companion_instance_4.y(_this__u8e3s4.v_1, _this__u8e3s4.w_1, _this__u8e3s4.x_1 > 0 ? step : -step | 0);
}
function _Char___init__impl__6a9atx(value) {
  return value;
}
function _get_value__a43j40($this) {
  return $this;
}
function _Char___init__impl__6a9atx_0(code) {
  // Inline function 'kotlin.UShort.toInt' call
  var tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
  return _Char___init__impl__6a9atx(tmp$ret$0);
}
function Char__compareTo_impl_ypi4mb($this, other) {
  return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
}
function Char__minus_impl_a2frrh($this, other) {
  return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
}
function Char__toInt_impl_vasixd($this) {
  return _get_value__a43j40($this);
}
function toString($this) {
  // Inline function 'kotlin.js.unsafeCast' call
  return String.fromCharCode(_get_value__a43j40($this));
}
function toString_0(_this__u8e3s4) {
  var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
  return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
}
var Companion_instance;
function Companion_getInstance() {
  if (Companion_instance === VOID)
    new Companion();
  return Companion_instance;
}
function implement(interfaces) {
  var maxSize = 1;
  var masks = [];
  var inductionVariable = 0;
  var last = interfaces.length;
  while (inductionVariable < last) {
    var i = interfaces[inductionVariable];
    inductionVariable = inductionVariable + 1 | 0;
    var currentSize = maxSize;
    var tmp1_elvis_lhs = i.prototype.$imask$;
    var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
    if (!(imask == null)) {
      masks.push(imask);
      currentSize = imask.length;
    }
    var iid = i.$metadata$.iid;
    var tmp;
    if (iid == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.js.implement.<anonymous>' call
      tmp = bitMaskWith(iid);
    }
    var iidImask = tmp;
    if (!(iidImask == null)) {
      masks.push(iidImask);
      currentSize = Math.max(currentSize, iidImask.length);
    }
    if (currentSize > maxSize) {
      maxSize = currentSize;
    }
  }
  return compositeBitMask(maxSize, masks);
}
function bitMaskWith(activeBit) {
  var numberIndex = activeBit >> 5;
  var intArray = new Int32Array(numberIndex + 1 | 0);
  var positionInNumber = activeBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
  return intArray;
}
function compositeBitMask(capacity, masks) {
  var tmp = 0;
  var tmp_0 = new Int32Array(capacity);
  while (tmp < capacity) {
    var tmp_1 = tmp;
    var result = 0;
    var inductionVariable = 0;
    var last = masks.length;
    while (inductionVariable < last) {
      var mask = masks[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (tmp_1 < mask.length) {
        result = result | mask[tmp_1];
      }
    }
    tmp_0[tmp_1] = result;
    tmp = tmp + 1 | 0;
  }
  return tmp_0;
}
function isBitSet(_this__u8e3s4, possibleActiveBit) {
  var numberIndex = possibleActiveBit >> 5;
  if (numberIndex > _this__u8e3s4.length)
    return false;
  var positionInNumber = possibleActiveBit & 31;
  var numberWithSettledBit = 1 << positionInNumber;
  return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
}
function fillArrayVal(array, initValue) {
  var inductionVariable = 0;
  var last = array.length - 1 | 0;
  if (inductionVariable <= last)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      array[i] = initValue;
    }
     while (!(i === last));
  return array;
}
function charSequenceGet(a, index) {
  var tmp;
  if (isString(a)) {
    // Inline function 'kotlin.Char' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var code = a.charCodeAt(index);
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(0);
    if (code < Char__toInt_impl_vasixd(this_0)) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(65535);
      tmp_0 = code > Char__toInt_impl_vasixd(this_1);
    }
    if (tmp_0) {
      throw IllegalArgumentException.p1('Invalid Char code: ' + code);
    }
    tmp = numberToChar(code);
  } else {
    tmp = a.b(index);
  }
  return tmp;
}
function isString(a) {
  return typeof a === 'string';
}
function charSequenceLength(a) {
  var tmp;
  if (isString(a)) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = a.length;
  } else {
    tmp = a.a();
  }
  return tmp;
}
function arrayToString(array) {
  return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
}
function arrayToString$lambda(it) {
  return toString_1(it);
}
function toString_1(o) {
  var tmp;
  if (o == null) {
    tmp = 'null';
  } else if (isArrayish(o)) {
    tmp = '[...]';
  } else if (!(typeof o.toString === 'function')) {
    tmp = anyToString(o);
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    tmp = o.toString();
  }
  return tmp;
}
function anyToString(o) {
  return Object.prototype.toString.call(o);
}
function defineProp(obj, name, getter, setter) {
  return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
}
function equals(obj1, obj2) {
  if (obj1 == null) {
    return obj2 == null;
  }
  if (obj2 == null) {
    return false;
  }
  if (typeof obj1 === 'object' && typeof obj1.equals === 'function') {
    return obj1.equals(obj2);
  }
  if (obj1 !== obj1) {
    return obj2 !== obj2;
  }
  if (typeof obj1 === 'number' && typeof obj2 === 'number') {
    var tmp;
    if (obj1 === obj2) {
      var tmp_0;
      if (obj1 !== 0) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_1 = 1 / obj1;
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = tmp_1 === 1 / obj2;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  }
  return obj1 === obj2;
}
function unboxIntrinsic(x) {
  var message = 'Should be lowered';
  throw IllegalStateException.t1(toString_1(message));
}
function captureStack(instance, constructorFunction) {
  if (Error.captureStackTrace != null) {
    Error.captureStackTrace(instance, constructorFunction);
  } else {
    // Inline function 'kotlin.js.asDynamic' call
    instance.stack = (new Error()).stack;
  }
}
function protoOf(constructor) {
  return constructor.prototype;
}
function createThis(ctor, box) {
  var self_0 = Object.create(ctor.prototype);
  boxApply(self_0, box);
  return self_0;
}
function boxApply(self_0, box) {
  if (box !== VOID)
    Object.assign(self_0, box);
}
function setPropertiesToThrowableInstance(this_, message, cause) {
  var errorInfo = calculateErrorInfo(Object.getPrototypeOf(this_));
  if ((errorInfo & 1) === 0) {
    var tmp;
    if (message == null) {
      var tmp_0;
      if (!(message === null)) {
        var tmp1_elvis_lhs = cause == null ? null : cause.toString();
        tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
      } else {
        tmp_0 = VOID;
      }
      tmp = tmp_0;
    } else {
      tmp = message;
    }
    this_.message = tmp;
  }
  if ((errorInfo & 2) === 0) {
    this_.cause = cause;
  }
  this_.name = Object.getPrototypeOf(this_).constructor.name;
}
function THROW_CCE() {
  throw ClassCastException.x1();
}
function get_ZERO() {
  _init_properties_longJs_kt__elc2w5();
  return ZERO;
}
var ZERO;
function get_ONE() {
  _init_properties_longJs_kt__elc2w5();
  return ONE;
}
var ONE;
function get_NEG_ONE() {
  _init_properties_longJs_kt__elc2w5();
  return NEG_ONE;
}
var NEG_ONE;
function get_MAX_VALUE() {
  _init_properties_longJs_kt__elc2w5();
  return MAX_VALUE;
}
var MAX_VALUE;
function get_MIN_VALUE() {
  _init_properties_longJs_kt__elc2w5();
  return MIN_VALUE;
}
var MIN_VALUE;
function get_TWO_PWR_24_() {
  _init_properties_longJs_kt__elc2w5();
  return TWO_PWR_24_;
}
var TWO_PWR_24_;
function compare(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  if (equalsLong(_this__u8e3s4, other)) {
    return 0;
  }
  var thisNeg = isNegative(_this__u8e3s4);
  var otherNeg = isNegative(other);
  return thisNeg && !otherNeg ? -1 : !thisNeg && otherNeg ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
}
function add(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  var a48 = _this__u8e3s4.f1_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.f1_1 & 65535;
  var a16 = _this__u8e3s4.e1_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.e1_1 & 65535;
  var b48 = other.f1_1 >>> 16 | 0;
  var b32 = other.f1_1 & 65535;
  var b16 = other.e1_1 >>> 16 | 0;
  var b00 = other.e1_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + (a00 + b00 | 0) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + (a16 + b16 | 0) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + (a32 + b32 | 0) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (a48 + b48 | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function subtract(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return add(_this__u8e3s4, other.i1());
}
function multiply(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  } else if (isZero(other)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = multiply(negate(_this__u8e3s4), negate(other));
    } else {
      tmp = negate(multiply(negate(_this__u8e3s4), other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(multiply(_this__u8e3s4, negate(other)));
  }
  if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) && lessThan(other, get_TWO_PWR_24_())) {
    return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
  }
  var a48 = _this__u8e3s4.f1_1 >>> 16 | 0;
  var a32 = _this__u8e3s4.f1_1 & 65535;
  var a16 = _this__u8e3s4.e1_1 >>> 16 | 0;
  var a00 = _this__u8e3s4.e1_1 & 65535;
  var b48 = other.f1_1 >>> 16 | 0;
  var b32 = other.f1_1 & 65535;
  var b16 = other.e1_1 >>> 16 | 0;
  var b00 = other.e1_1 & 65535;
  var c48 = 0;
  var c32 = 0;
  var c16 = 0;
  var c00 = 0;
  c00 = c00 + imul_0(a00, b00) | 0;
  c16 = c16 + (c00 >>> 16 | 0) | 0;
  c00 = c00 & 65535;
  c16 = c16 + imul_0(a16, b00) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c16 = c16 + imul_0(a00, b16) | 0;
  c32 = c32 + (c16 >>> 16 | 0) | 0;
  c16 = c16 & 65535;
  c32 = c32 + imul_0(a32, b00) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul_0(a16, b16) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c32 = c32 + imul_0(a00, b32) | 0;
  c48 = c48 + (c32 >>> 16 | 0) | 0;
  c32 = c32 & 65535;
  c48 = c48 + (((imul_0(a48, b00) + imul_0(a32, b16) | 0) + imul_0(a16, b32) | 0) + imul_0(a00, b48) | 0) | 0;
  c48 = c48 & 65535;
  return new Long(c16 << 16 | c00, c48 << 16 | c32);
}
function divide(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  if (isZero(other)) {
    throw Exception.z1('division by zero');
  } else if (isZero(_this__u8e3s4)) {
    return get_ZERO();
  }
  if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
    if (equalsLong(other, get_ONE()) || equalsLong(other, get_NEG_ONE())) {
      return get_MIN_VALUE();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ONE();
    } else {
      var halfThis = shiftRight(_this__u8e3s4, 1);
      var approx = shiftLeft(halfThis.h1(other), 1);
      if (equalsLong(approx, get_ZERO())) {
        return isNegative(other) ? get_ONE() : get_NEG_ONE();
      } else {
        var rem = subtract(_this__u8e3s4, multiply(other, approx));
        return add(approx, rem.h1(other));
      }
    }
  } else if (equalsLong(other, get_MIN_VALUE())) {
    return get_ZERO();
  }
  if (isNegative(_this__u8e3s4)) {
    var tmp;
    if (isNegative(other)) {
      tmp = negate(_this__u8e3s4).h1(negate(other));
    } else {
      tmp = negate(negate(_this__u8e3s4).h1(other));
    }
    return tmp;
  } else if (isNegative(other)) {
    return negate(_this__u8e3s4.h1(negate(other)));
  }
  var res = get_ZERO();
  var rem_0 = _this__u8e3s4;
  while (greaterThanOrEqual(rem_0, other)) {
    var approxDouble = toNumber(rem_0) / toNumber(other);
    var approx2 = Math.max(1.0, Math.floor(approxDouble));
    var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
    var delta = log2 <= 48 ? 1.0 : Math.pow(2.0, log2 - 48);
    var approxRes = fromNumber(approx2);
    var approxRem = multiply(approxRes, other);
    while (isNegative(approxRem) || greaterThan(approxRem, rem_0)) {
      approx2 = approx2 - delta;
      approxRes = fromNumber(approx2);
      approxRem = multiply(approxRes, other);
    }
    if (isZero(approxRes)) {
      approxRes = get_ONE();
    }
    res = add(res, approxRes);
    rem_0 = subtract(rem_0, approxRem);
  }
  return res;
}
function shiftLeft(_this__u8e3s4, numBits) {
  _init_properties_longJs_kt__elc2w5();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.e1_1 << numBits_0, _this__u8e3s4.f1_1 << numBits_0 | (_this__u8e3s4.e1_1 >>> (32 - numBits_0 | 0) | 0));
    } else {
      return new Long(0, _this__u8e3s4.e1_1 << (numBits_0 - 32 | 0));
    }
  }
}
function shiftRight(_this__u8e3s4, numBits) {
  _init_properties_longJs_kt__elc2w5();
  var numBits_0 = numBits & 63;
  if (numBits_0 === 0) {
    return _this__u8e3s4;
  } else {
    if (numBits_0 < 32) {
      return new Long(_this__u8e3s4.e1_1 >>> numBits_0 | 0 | _this__u8e3s4.f1_1 << (32 - numBits_0 | 0), _this__u8e3s4.f1_1 >> numBits_0);
    } else {
      return new Long(_this__u8e3s4.f1_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.f1_1 >= 0 ? 0 : -1);
    }
  }
}
function toNumber(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.f1_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
}
function toStringImpl(_this__u8e3s4, radix) {
  _init_properties_longJs_kt__elc2w5();
  if (radix < 2 || 36 < radix) {
    throw Exception.z1('radix out of range: ' + radix);
  }
  if (isZero(_this__u8e3s4)) {
    return '0';
  }
  if (isNegative(_this__u8e3s4)) {
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      var radixLong = fromInt(radix);
      var div = _this__u8e3s4.h1(radixLong);
      var rem = subtract(multiply(div, radixLong), _this__u8e3s4).k1();
      var tmp = toStringImpl(div, radix);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return tmp + rem.toString(radix);
    } else {
      return '-' + toStringImpl(negate(_this__u8e3s4), radix);
    }
  }
  var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
  var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
  var rem_0 = _this__u8e3s4;
  var result = '';
  while (true) {
    var remDiv = rem_0.h1(radixToPower);
    var intval = subtract(rem_0, multiply(remDiv, radixToPower)).k1();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var digits = intval.toString(radix);
    rem_0 = remDiv;
    if (isZero(rem_0)) {
      return digits + result;
    } else {
      while (digits.length < digitsPerTime) {
        digits = '0' + digits;
      }
      result = digits + result;
    }
  }
}
function equalsLong(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.f1_1 === other.f1_1 && _this__u8e3s4.e1_1 === other.e1_1;
}
function fromInt(value) {
  _init_properties_longJs_kt__elc2w5();
  return new Long(value, value < 0 ? -1 : 0);
}
function isNegative(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.f1_1 < 0;
}
function isZero(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.f1_1 === 0 && _this__u8e3s4.e1_1 === 0;
}
function isOdd(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return (_this__u8e3s4.e1_1 & 1) === 1;
}
function negate(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.i1();
}
function lessThan(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return compare(_this__u8e3s4, other) < 0;
}
function fromNumber(value) {
  _init_properties_longJs_kt__elc2w5();
  if (isNaN_0(value)) {
    return get_ZERO();
  } else if (value <= -9.223372036854776E18) {
    return get_MIN_VALUE();
  } else if (value + 1 >= 9.223372036854776E18) {
    return get_MAX_VALUE();
  } else if (value < 0) {
    return negate(fromNumber(-value));
  } else {
    var twoPwr32 = 4.294967296E9;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    var tmp = value % twoPwr32 | 0;
    // Inline function 'kotlin.js.jsBitwiseOr' call
    var tmp$ret$1 = value / twoPwr32 | 0;
    return new Long(tmp, tmp$ret$1);
  }
}
function greaterThan(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return compare(_this__u8e3s4, other) > 0;
}
function greaterThanOrEqual(_this__u8e3s4, other) {
  _init_properties_longJs_kt__elc2w5();
  return compare(_this__u8e3s4, other) >= 0;
}
function getLowBitsUnsigned(_this__u8e3s4) {
  _init_properties_longJs_kt__elc2w5();
  return _this__u8e3s4.e1_1 >= 0 ? _this__u8e3s4.e1_1 : 4.294967296E9 + _this__u8e3s4.e1_1;
}
var properties_initialized_longJs_kt_4syf89;
function _init_properties_longJs_kt__elc2w5() {
  if (!properties_initialized_longJs_kt_4syf89) {
    properties_initialized_longJs_kt_4syf89 = true;
    ZERO = fromInt(0);
    ONE = fromInt(1);
    NEG_ONE = fromInt(-1);
    MAX_VALUE = new Long(-1, 2147483647);
    MIN_VALUE = new Long(0, -2147483648);
    TWO_PWR_24_ = fromInt(16777216);
  }
}
function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
  var undef = VOID;
  var iid = kind === 'interface' ? generateInterfaceId() : VOID;
  return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
}
function generateInterfaceId() {
  if (globalInterfaceId === VOID) {
    globalInterfaceId = 0;
  }
  // Inline function 'kotlin.js.unsafeCast' call
  globalInterfaceId = globalInterfaceId + 1 | 0;
  // Inline function 'kotlin.js.unsafeCast' call
  return globalInterfaceId;
}
var globalInterfaceId;
function initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  if (!(parent == null)) {
    ctor.prototype = Object.create(parent.prototype);
    ctor.prototype.constructor = ctor;
  }
  var metadata = createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
  ctor.$metadata$ = metadata;
  if (!(interfaces == null)) {
    var receiver = !equals(metadata.iid, VOID) ? ctor : ctor.prototype;
    receiver.$imask$ = implement(interfaces);
  }
}
function initMetadataForClass(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'class';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataForObject(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'object';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataForInterface(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
  var kind = 'interface';
  initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
}
function initMetadataForLambda(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'Lambda', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForCoroutine(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'Coroutine', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForFunctionReference(ctor, parent, interfaces, suspendArity) {
  initMetadataForClass(ctor, 'FunctionReference', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function initMetadataForCompanion(ctor, parent, interfaces, suspendArity) {
  initMetadataForObject(ctor, 'Companion', VOID, parent, interfaces, suspendArity, VOID, VOID);
}
function numberToInt(a) {
  var tmp;
  if (a instanceof Long) {
    tmp = a.k1();
  } else {
    tmp = doubleToInt(a);
  }
  return tmp;
}
function doubleToInt(a) {
  var tmp;
  if (a > 2147483647) {
    tmp = 2147483647;
  } else if (a < -2147483648) {
    tmp = -2147483648;
  } else {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    tmp = a | 0;
  }
  return tmp;
}
function toShort(a) {
  // Inline function 'kotlin.js.unsafeCast' call
  return a << 16 >> 16;
}
function numberToChar(a) {
  // Inline function 'kotlin.toUShort' call
  var this_0 = numberToInt(a);
  var tmp$ret$0 = _UShort___init__impl__jigrne(toShort(this_0));
  return _Char___init__impl__6a9atx_0(tmp$ret$0);
}
function numberRangeToNumber(start, endInclusive) {
  return new IntRange(start, endInclusive);
}
function isArrayish(o) {
  return isJsArray(o) || isView(o);
}
function isJsArray(obj) {
  // Inline function 'kotlin.js.unsafeCast' call
  return Array.isArray(obj);
}
function isInterface(obj, iface) {
  return isInterfaceImpl(obj, iface.$metadata$.iid);
}
function isInterfaceImpl(obj, iface) {
  // Inline function 'kotlin.js.unsafeCast' call
  var tmp0_elvis_lhs = obj.$imask$;
  var tmp;
  if (tmp0_elvis_lhs == null) {
    return false;
  } else {
    tmp = tmp0_elvis_lhs;
  }
  var mask = tmp;
  return isBitSet(mask, iface);
}
function isCharSequence(value) {
  return typeof value === 'string' || isInterface(value, CharSequence);
}
function calculateErrorInfo(proto) {
  var tmp0_safe_receiver = proto.constructor;
  var metadata = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.$metadata$;
  var tmp2_safe_receiver = metadata == null ? null : metadata.errorInfo;
  if (tmp2_safe_receiver == null)
    null;
  else {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    return tmp2_safe_receiver;
  }
  var result = 0;
  if (hasProp(proto, 'message'))
    result = result | 1;
  if (hasProp(proto, 'cause'))
    result = result | 2;
  if (!(result === 3)) {
    var parentProto = getPrototypeOf(proto);
    if (parentProto != Error.prototype) {
      result = result | calculateErrorInfo(parentProto);
    }
  }
  if (!(metadata == null)) {
    metadata.errorInfo = result;
  }
  return result;
}
function hasProp(proto, propName) {
  return proto.hasOwnProperty(propName);
}
function getPrototypeOf(obj) {
  return Object.getPrototypeOf(obj);
}
function get_VOID() {
  _init_properties_void_kt__3zg9as();
  return VOID;
}
var VOID;
var properties_initialized_void_kt_e4ret2;
function _init_properties_void_kt__3zg9as() {
  if (!properties_initialized_void_kt_e4ret2) {
    properties_initialized_void_kt_e4ret2 = true;
    VOID = void 0;
  }
}
function asList(_this__u8e3s4) {
  // Inline function 'kotlin.js.unsafeCast' call
  // Inline function 'kotlin.js.asDynamic' call
  return ArrayList.a2(_this__u8e3s4);
}
function digitToIntImpl(_this__u8e3s4) {
  // Inline function 'kotlin.code' call
  var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
  var index = binarySearchRange(Digit_getInstance().b2_1, ch);
  var diff = ch - Digit_getInstance().b2_1[index] | 0;
  return diff < 10 ? diff : -1;
}
function binarySearchRange(array, needle) {
  var bottom = 0;
  var top = array.length - 1 | 0;
  var middle = -1;
  var value = 0;
  while (bottom <= top) {
    middle = (bottom + top | 0) / 2 | 0;
    value = array[middle];
    if (needle > value)
      bottom = middle + 1 | 0;
    else if (needle === value)
      return middle;
    else
      top = middle - 1 | 0;
  }
  return middle - (needle < value ? 1 : 0) | 0;
}
var Digit_instance;
function Digit_getInstance() {
  if (Digit_instance === VOID)
    new Digit();
  return Digit_instance;
}
function isNaN_0(_this__u8e3s4) {
  return !(_this__u8e3s4 === _this__u8e3s4);
}
function collectionToArray(collection) {
  return collectionToArrayCommonImpl(collection);
}
function shuffled(_this__u8e3s4) {
  // Inline function 'kotlin.apply' call
  var this_0 = toMutableList(_this__u8e3s4);
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.collections.shuffled.<anonymous>' call
  shuffle_0(this_0);
  return this_0;
}
function shuffle_0(_this__u8e3s4) {
  return shuffle(_this__u8e3s4, Default_getInstance());
}
function checkIndexOverflow(index) {
  if (index < 0) {
    throwIndexOverflow();
  }
  return index;
}
function copyToArray(collection) {
  var tmp;
  // Inline function 'kotlin.js.asDynamic' call
  if (collection.toArray !== undefined) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = collection.toArray();
  } else {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp = collectionToArray(collection);
  }
  return tmp;
}
var Companion_instance_0;
function Companion_getInstance_0() {
  if (Companion_instance_0 === VOID)
    new Companion_0();
  return Companion_instance_0;
}
function increaseLength($this, amount) {
  var previous = $this.m();
  // Inline function 'kotlin.js.asDynamic' call
  $this.j_1.length = $this.m() + amount | 0;
  return previous;
}
function rangeCheck($this, index) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
  Companion_instance_1.s2(index, $this.m());
  return index;
}
function insertionRangeCheck($this, index) {
  // Inline function 'kotlin.apply' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
  Companion_instance_1.t2(index, $this.m());
  return index;
}
function init_kotlin_Exception(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.y1_1);
}
function init_kotlin_IllegalArgumentException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.o1_1);
}
function init_kotlin_IndexOutOfBoundsException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.j3_1);
}
function init_kotlin_IllegalStateException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.s1_1);
}
function init_kotlin_UnsupportedOperationException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.x2_1);
}
function init_kotlin_RuntimeException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.e3_1);
}
function init_kotlin_NoSuchElementException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.k2_1);
}
function init_kotlin_NumberFormatException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.q3_1);
}
function init_kotlin_ArithmeticException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.v3_1);
}
function init_kotlin_ClassCastException(_this__u8e3s4) {
  captureStack(_this__u8e3s4, _this__u8e3s4.w1_1);
}
var INV_2_26;
var INV_2_53;
function defaultPlatformRandom() {
  _init_properties_PlatformRandom_kt__6kjv62();
  // Inline function 'kotlin.js.unsafeCast' call
  var tmp$ret$0 = Math.random() * Math.pow(2, 32) | 0;
  return Random_0(tmp$ret$0);
}
var properties_initialized_PlatformRandom_kt_uibhw8;
function _init_properties_PlatformRandom_kt__6kjv62() {
  if (!properties_initialized_PlatformRandom_kt_uibhw8) {
    properties_initialized_PlatformRandom_kt_uibhw8 = true;
    // Inline function 'kotlin.math.pow' call
    INV_2_26 = Math.pow(2.0, -26);
    // Inline function 'kotlin.math.pow' call
    INV_2_53 = Math.pow(2.0, -53);
  }
}
function checkRadix(radix) {
  if (!(2 <= radix ? radix <= 36 : false)) {
    throw IllegalArgumentException.p1('radix ' + radix + ' was not in valid range 2..36');
  }
  return radix;
}
function toInt(_this__u8e3s4, radix) {
  var tmp0_elvis_lhs = toIntOrNull(_this__u8e3s4, radix);
  var tmp;
  if (tmp0_elvis_lhs == null) {
    numberFormatError(_this__u8e3s4);
  } else {
    tmp = tmp0_elvis_lhs;
  }
  return tmp;
}
function digitOf(char, radix) {
  // Inline function 'kotlin.let' call
  // Inline function 'kotlin.contracts.contract' call
  // Inline function 'kotlin.text.digitOf.<anonymous>' call
  var it = Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(48)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(57)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(48)) : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(90)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(97)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(122)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(97)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(128)) < 0 ? -1 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65313)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65338)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65313)) + 10 | 0 : Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65345)) >= 0 && Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(65370)) <= 0 ? Char__minus_impl_a2frrh(char, _Char___init__impl__6a9atx(65345)) + 10 | 0 : digitToIntImpl(char);
  return it >= radix ? -1 : it;
}
function AbstractCollection$toString$lambda(this$0) {
  return function (it) {
    return it === this$0 ? '(this Collection)' : toString_0(it);
  };
}
var Companion_instance_1;
function Companion_getInstance_1() {
  return Companion_instance_1;
}
function collectionToArrayCommonImpl(collection) {
  if (collection.z()) {
    // Inline function 'kotlin.emptyArray' call
    return [];
  }
  // Inline function 'kotlin.arrayOfNulls' call
  var size = collection.m();
  var destination = fillArrayVal(Array(size), null);
  var iterator = collection.f();
  var index = 0;
  while (iterator.g()) {
    var tmp0 = index;
    index = tmp0 + 1 | 0;
    destination[tmp0] = iterator.h();
  }
  return destination;
}
function listOf(elements) {
  return elements.length > 0 ? asList(elements) : emptyList();
}
function emptyList() {
  return EmptyList_getInstance();
}
var EmptyList_instance;
function EmptyList_getInstance() {
  if (EmptyList_instance === VOID)
    new EmptyList();
  return EmptyList_instance;
}
var EmptyIterator_instance;
function EmptyIterator_getInstance() {
  return EmptyIterator_instance;
}
function get_lastIndex(_this__u8e3s4) {
  return _this__u8e3s4.m() - 1 | 0;
}
function throwIndexOverflow() {
  throw ArithmeticException.x3('Index overflow has happened.');
}
function addAll(_this__u8e3s4, elements) {
  if (isInterface(elements, Collection))
    return _this__u8e3s4.o(elements);
  else {
    var result = false;
    var tmp1_iterator = elements.f();
    while (tmp1_iterator.g()) {
      var item = tmp1_iterator.h();
      if (_this__u8e3s4.t(item))
        result = true;
    }
    return result;
  }
}
function getProgressionLastElement(start, end, step) {
  var tmp;
  if (step > 0) {
    tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
  } else if (step < 0) {
    tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
  } else {
    throw IllegalArgumentException.p1('Step is zero.');
  }
  return tmp;
}
function differenceModulo(a, b, c) {
  return mod(mod(a, c) - mod(b, c) | 0, c);
}
function mod(a, b) {
  var mod = a % b | 0;
  return mod >= 0 ? mod : mod + b | 0;
}
var Default_instance;
function Default_getInstance() {
  if (Default_instance === VOID)
    Default.d4();
  return Default_instance;
}
function checkRangeBounds(from, until) {
  // Inline function 'kotlin.contracts.contract' call
  var tmp;
  if (!(until > from)) {
    // Inline function 'kotlin.random.checkRangeBounds.<anonymous>' call
    var message = boundsErrorMessage(from, until);
    throw IllegalArgumentException.p1(toString_1(message));
  }
  return tmp;
}
function fastLog2(value) {
  // Inline function 'kotlin.countLeadingZeroBits' call
  return 31 - clz32(value) | 0;
}
function boundsErrorMessage(from, until) {
  return 'Random range is empty: [' + toString_1(from) + ', ' + toString_1(until) + ').';
}
function Random_0(seed) {
  return XorWowRandom.n4(seed, seed >> 31);
}
function takeUpperBits(_this__u8e3s4, bitCount) {
  return (_this__u8e3s4 >>> (32 - bitCount | 0) | 0) & (-bitCount | 0) >> 31;
}
var Companion_instance_2;
function Companion_getInstance_2() {
  if (Companion_instance_2 === VOID)
    new Companion_2();
  return Companion_instance_2;
}
var Companion_instance_3;
function Companion_getInstance_3() {
  if (Companion_instance_3 === VOID)
    new Companion_3();
  return Companion_instance_3;
}
var Companion_instance_4;
function Companion_getInstance_4() {
  return Companion_instance_4;
}
function checkStepIsPositive(isPositive, step) {
  if (!isPositive)
    throw IllegalArgumentException.p1('Step must be positive, was: ' + toString_1(step) + '.');
}
function appendElement(_this__u8e3s4, element, transform) {
  if (!(transform == null)) {
    _this__u8e3s4.e(transform(element));
  } else {
    if (element == null ? true : isCharSequence(element)) {
      _this__u8e3s4.e(element);
    } else {
      if (element instanceof Char) {
        _this__u8e3s4.z3(element.x4_1);
      } else {
        _this__u8e3s4.e(toString_0(element));
      }
    }
  }
}
function toIntOrNull(_this__u8e3s4, radix) {
  checkRadix(radix);
  var length = _this__u8e3s4.length;
  if (length === 0)
    return null;
  var start;
  var isNegative;
  var limit;
  var firstChar = charSequenceGet(_this__u8e3s4, 0);
  if (Char__compareTo_impl_ypi4mb(firstChar, _Char___init__impl__6a9atx(48)) < 0) {
    if (length === 1)
      return null;
    start = 1;
    if (firstChar === _Char___init__impl__6a9atx(45)) {
      isNegative = true;
      limit = -2147483648;
    } else if (firstChar === _Char___init__impl__6a9atx(43)) {
      isNegative = false;
      limit = -2147483647;
    } else
      return null;
  } else {
    start = 0;
    isNegative = false;
    limit = -2147483647;
  }
  var limitForMaxRadix = -59652323;
  var limitBeforeMul = limitForMaxRadix;
  var result = 0;
  var inductionVariable = start;
  if (inductionVariable < length)
    do {
      var i = inductionVariable;
      inductionVariable = inductionVariable + 1 | 0;
      var digit = digitOf(charSequenceGet(_this__u8e3s4, i), radix);
      if (digit < 0)
        return null;
      if (result < limitBeforeMul) {
        if (limitBeforeMul === limitForMaxRadix) {
          limitBeforeMul = limit / radix | 0;
          if (result < limitBeforeMul) {
            return null;
          }
        } else {
          return null;
        }
      }
      result = imul_0(result, radix);
      if (result < (limit + digit | 0))
        return null;
      result = result - digit | 0;
    }
     while (inductionVariable < length);
  return isNegative ? result : -result | 0;
}
function numberFormatError(input) {
  throw NumberFormatException.s3("Invalid number format: '" + input + "'");
}
function _UShort___init__impl__jigrne(data) {
  return data;
}
function _UShort___get_data__impl__g0245($this) {
  return $this;
}
//region block: post-declaration
initMetadataForInterface(CharSequence, 'CharSequence');
initMetadataForClass(Number_0, 'Number');
initMetadataForObject(Unit, 'Unit');
initMetadataForClass(Char, 'Char');
initMetadataForInterface(Collection, 'Collection');
initMetadataForInterface(KtList, 'List', VOID, VOID, [Collection]);
initMetadataForCompanion(Companion);
initMetadataForClass(Long, 'Long');
initMetadataForObject(Digit, 'Digit');
initMetadataForClass(AbstractCollection, 'AbstractCollection', VOID, VOID, [Collection]);
initMetadataForClass(AbstractMutableCollection, 'AbstractMutableCollection', VOID, VOID, [AbstractCollection, Collection]);
initMetadataForClass(IteratorImpl, 'IteratorImpl');
initMetadataForClass(AbstractMutableList, 'AbstractMutableList', VOID, VOID, [AbstractMutableCollection, KtList, Collection]);
initMetadataForCompanion(Companion_0);
initMetadataForClass(ArrayList, 'ArrayList', ArrayList.p, VOID, [AbstractMutableList, KtList, Collection]);
initMetadataForClass(Exception, 'Exception', Exception.z2);
initMetadataForClass(RuntimeException, 'RuntimeException', RuntimeException.f3);
initMetadataForClass(IllegalArgumentException, 'IllegalArgumentException', IllegalArgumentException.c3);
initMetadataForClass(IndexOutOfBoundsException, 'IndexOutOfBoundsException', IndexOutOfBoundsException.k3);
initMetadataForClass(IllegalStateException, 'IllegalStateException', IllegalStateException.m3);
initMetadataForClass(UnsupportedOperationException, 'UnsupportedOperationException', UnsupportedOperationException.y2);
initMetadataForClass(NoSuchElementException, 'NoSuchElementException', NoSuchElementException.l2);
initMetadataForClass(NumberFormatException, 'NumberFormatException', NumberFormatException.r3);
initMetadataForClass(ArithmeticException, 'ArithmeticException', ArithmeticException.w3);
initMetadataForClass(ClassCastException, 'ClassCastException', ClassCastException.x1);
initMetadataForClass(StringBuilder, 'StringBuilder', StringBuilder.d, VOID, [CharSequence]);
initMetadataForCompanion(Companion_1);
initMetadataForObject(EmptyList, 'EmptyList', VOID, VOID, [KtList]);
initMetadataForObject(EmptyIterator, 'EmptyIterator');
initMetadataForClass(IntIterator, 'IntIterator');
initMetadataForClass(Random, 'Random');
initMetadataForObject(Default, 'Default');
initMetadataForCompanion(Companion_2);
initMetadataForClass(XorWowRandom, 'XorWowRandom');
initMetadataForCompanion(Companion_3);
initMetadataForClass(IntProgression, 'IntProgression');
initMetadataForClass(IntRange, 'IntRange');
initMetadataForClass(IntProgressionIterator, 'IntProgressionIterator');
initMetadataForCompanion(Companion_4);
//endregion
//region block: init
Unit_instance = new Unit();
Companion_instance_1 = new Companion_1();
EmptyIterator_instance = new EmptyIterator();
Companion_instance_4 = new Companion_4();
//endregion
//region block: exports
export {
  Unit_instance as Unit_instanceat14thlj150z,
  ArrayList as ArrayList3it5z8td81qkl,
  listOf as listOf1jh22dvmctj1r,
  plus as plus310ted5e4i90h,
  shuffled as shuffled357jrbcm2hlkc,
  equals as equals2au1ep9vhcato,
  initMetadataForClass as initMetadataForClassbxx6q50dy2s7,
  numberToInt as numberToInt1ygmcfwhs2fkq,
  step as step18s9qzr5xwxat,
  until as until1jbpn0z3f8lbg,
  toInt as toInt5qdj874w69jh,
  THROW_CCE as THROW_CCE2g6jy02ryeudk,
};
//endregion

//# sourceMappingURL=kotlin-kotlin-stdlib.mjs.map
