/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import {
  Element,
  Equal,
  Fill,
  Drop,
  Less,
  Pop,
  Shift,
  Subtract,
  Unshift,
} from "../source/cardinality";

declare function as<T>(): T;

describe("Drop", () => {
  it("should drop from an empty tuple", () => {
    const a = as<Drop<0, []>>(); // $ExpectType []
    const b = as<Drop<1, []>>(); // $ExpectType []
    const c = as<Drop<2, []>>(); // $ExpectType []
  });

  it("should drop from a non-empty tuple", () => {
    const a = as<Drop<0, [1, 2]>>(); // $ExpectType [1, 2]
    const b = as<Drop<1, [1, 2]>>(); // $ExpectType [2]
    const c = as<Drop<2, [1, 2]>>(); // $ExpectType []
    const d = as<Drop<3, [1, 2]>>(); // $ExpectType []
  });

  it("should drop from an array", () => {
    const a = as<Drop<0, number[]>>(); // $ExpectType number[]
    const b = as<Drop<1, number[]>>(); // $ExpectType number[]
    const c = as<Drop<2, number[]>>(); // $ExpectType number[]
  });
});

describe("Element", () => {
  it("should infer elements of a single type", () => {
    const a = as<Element<1[]>>(); // $ExpectType 1
    const b = as<Element<[1, 1]>>(); // $ExpectType 1
  });

  it("should infer elements of many types", () => {
    const a = as<Element<[1, 2]>>(); // $ExpectType 1 | 2
  });

  it("should resolve as never for non-array like types", () => {
    const a = as<Element<1>>(); // $ExpectType never
  });
});

describe("Equal", () => {
  it("should support in-range cardinalities", () => {
    const a = as<Equal<1, 1>>(); // $ExpectType true
    const b = as<Equal<1, 9>>(); // $ExpectType false
    const c = as<Equal<9, 1>>(); // $ExpectType false
    const d = as<Equal<9, 9>>(); // $ExpectType true
  });

  it("should support out-of-range cardinalities", () => {
    const a = as<Equal<number, number>>(); // $ExpectType false
    const b = as<Equal<1, number>>(); // $ExpectType false
    const c = as<Equal<number, 1>>(); // $ExpectType false
    const d = as<Equal<9, number>>(); // $ExpectType false
    const e = as<Equal<number, 9>>(); // $ExpectType false
  });

  it("should support maybe", () => {
    const a = as<Equal<number, number, boolean>>(); // $ExpectType boolean
    const b = as<Equal<1, number, boolean>>(); // $ExpectType boolean
    const c = as<Equal<number, 1, boolean>>(); // $ExpectType boolean
    const d = as<Equal<9, number, boolean>>(); // $ExpectType boolean
    const e = as<Equal<number, 9, boolean>>(); // $ExpectType boolean
  });
});

describe("Fill", () => {
  it("should create a zero-length tuple", () => {
    const a = as<Fill<0, number>>(); // $ExpectType []
  });

  it("should create a tuple for an in-range cardinality", () => {
    const a = as<Fill<1, number>>(); // $ExpectType [number]
    const b = as<Fill<9, number>>(); // $ExpectType [number, number, number, number, number, number, number, number, number]
  });

  it("should create an array for an out-of-range cardinality", () => {
    const a = as<Fill<10, number>>(); // $ExpectType number[]
  });
});

describe("Less", () => {
  it("should support in-range cardinalities", () => {
    const a = as<Less<1, 1>>(); // $ExpectType false
    const b = as<Less<1, 9>>(); // $ExpectType true
    const c = as<Less<9, 1>>(); // $ExpectType false
    const d = as<Less<9, 9>>(); // $ExpectType false
  });

  it("should support out-of-range cardinalities", () => {
    const a = as<Less<number, number>>(); // $ExpectType false
    const b = as<Less<1, number>>(); // $ExpectType false
    const c = as<Less<number, 1>>(); // $ExpectType false
    const d = as<Less<9, number>>(); // $ExpectType false
    const e = as<Less<number, 9>>(); // $ExpectType false
  });

  it("should support maybe", () => {
    const a = as<Less<number, number, boolean>>(); // $ExpectType boolean
    const b = as<Less<1, number, boolean>>(); // $ExpectType boolean
    const c = as<Less<number, 1, boolean>>(); // $ExpectType boolean
    const d = as<Less<9, number, boolean>>(); // $ExpectType boolean
    const e = as<Less<number, 9, boolean>>(); // $ExpectType boolean
  });
});

describe("Pop", () => {
  it("should pop from an empty tuple", () => {
    const a = as<Pop<[]>>(); // $ExpectType []
  });

  it("should pop from a non-empty tuple", () => {
    const a = as<Pop<[1, 2]>>(); // $ExpectType [1 | 2]
  });

  it("should pop from an array", () => {
    const a = as<Pop<number[]>>(); // $ExpectType [number]
  });
});

describe("Shift", () => {
  it("should shift from an empty tuple", () => {
    const a = as<Shift<0, []>>(); // $ExpectType []
    const b = as<Shift<1, []>>(); // $ExpectType []
    const c = as<Shift<2, []>>(); // $ExpectType []
  });

  it("should shift from a non-empty tuple", () => {
    const a = as<Shift<0, [1, 2]>>(); // $ExpectType []
    const b = as<Shift<1, [1, 2]>>(); // $ExpectType [1]
    const c = as<Shift<2, [1, 2]>>(); // $ExpectType [1, 2]
    const d = as<Shift<3, [1, 2]>>(); // $ExpectType [1, 2]
  });

  it("should shift from an array", () => {
    const a = as<Shift<0, number[]>>(); // $ExpectType []
    const b = as<Shift<1, number[]>>(); // $ExpectType [number]
    const c = as<Shift<2, number[]>>(); // $ExpectType [number, number]
  });
});

describe("Subtract", () => {
  it("should subtract in-range cardinalities", () => {
    const a = as<Subtract<1, 0>>(); // $ExpectType 1
    const b = as<Subtract<1, 1>>(); // $ExpectType 0
  });

  it("should resolve as undefined for out-of-range cardinalities", () => {
    const a = as<Subtract<1, 2>>(); // $ExpectType number
    const b = as<Subtract<1, 10>>(); // $ExpectType number
    const c = as<Subtract<10, 1>>(); // $ExpectType number
  });

  it("should resolve as undefined for undefined arguments", () => {
    const a = as<Subtract<1, number>>(); // $ExpectType number
    const b = as<Subtract<number, 1>>(); // $ExpectType number
  });
});

describe("Unshift", () => {
  it("should unshift an empty tuple", () => {
    const a = as<Unshift<[], []>>(); // $ExpectType []
    const b = as<Unshift<[], [1, 2, 3]>>(); // $ExpectType [1, 2, 3]
    const c = as<Unshift<[], number[]>>(); // $ExpectType number[]
  });

  it("should unshift a non-empty tuple", () => {
    const a = as<Unshift<["x", "y"], []>>(); // $ExpectType ["x", "y"]
    const b = as<Unshift<["x", "y"], [1, 2, 3]>>(); // $ExpectType ["x", "y", 1, 2, 3]
    const c = as<Unshift<["x", "y"], number[]>>(); // $ExpectType ["x", "y", ...number[]]
  });

  it("should unshift an array", () => {
    const a = as<Unshift<string[], []>>(); // $ExpectType string[]
    const b = as<Unshift<string[], [1, 2, 3]>>(); // $ExpectType (string | 1 | 2 | 3)[]
    const c = as<Unshift<string[], number[]>>(); // $ExpectType (string | number)[]
  });
});
