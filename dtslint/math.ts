/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */
/* eslint etc/no-unused-declaration: 0 */

import { Add, Length, Max, Min, Subtract } from "../source/math";

declare function describe(...args: unknown[]): void;
declare function it(...args: unknown[]): void;
declare function as<T>(): T;

describe("Add", () => {
  it("should add in-range cardinalities", () => {
    const a = as<Add<0, 0>>(); // $ExpectType 0
    const b = as<Add<0, 1>>(); // $ExpectType 1
    const c = as<Add<1, 1>>(); // $ExpectType 2
    const d = as<Add<1, 8>>(); // $ExpectType 9
  });

  it("should resolve as undefined for out-of-range cardinalities", () => {
    const a = as<Add<1, -1>>(); // $ExpectType undefined
    const b = as<Add<1, 9>>(); // $ExpectType undefined
  });
});

describe("Length", () => {
  it("should determine the length of tuple types", () => {
    const a = as<Length<[]>>(); // $ExpectType 0
    const b = as<Length<[1]>>(); // $ExpectType 1
    const c = as<Length<[1, 2]>>(); // $ExpectType 2
  });

  it("should resolve as undefined for non-tuple types", () => {
    const a = as<Length<number[]>>(); // $ExpectType undefined
  });
});

describe("Max", () => {
  it("should determine the max of in-range cardinalities", () => {
    const a = as<Max<0, 1>>(); // $ExpectType 1
    const b = as<Max<1, 8>>(); // $ExpectType 8
    const c = as<Max<8, 1>>(); // $ExpectType 8
  });

  it("should resolve as undefined for out-of-range cardinalities", () => {
    const a = as<Max<1, 9>>(); // $ExpectType undefined
    const b = as<Max<9, 1>>(); // $ExpectType undefined
  });
});

describe("Min", () => {
  it("should determine the min of in-range cardinalities", () => {
    const a = as<Min<0, 1>>(); // $ExpectType 0
    const b = as<Min<1, 8>>(); // $ExpectType 1
    const c = as<Min<8, 1>>(); // $ExpectType 1
  });

  it("should resolve as undefined for out-of-range cardinalities", () => {
    const a = as<Min<1, 9>>(); // $ExpectType undefined
    const b = as<Min<9, 1>>(); // $ExpectType undefined
  });
});

describe("Subtract", () => {
  it("should subtract in-range cardinalities", () => {
    const a = as<Subtract<1, 0>>(); // $ExpectType 1
    const b = as<Subtract<1, 1>>(); // $ExpectType 0
  });

  it("should resolve as undefined for out-of-range cardinalities", () => {
    const a = as<Subtract<1, 2>>(); // $ExpectType undefined
    const b = as<Subtract<9, 1>>(); // $ExpectType undefined
  });
});