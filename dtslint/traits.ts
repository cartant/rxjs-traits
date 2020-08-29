/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { Both, Either, Not, Union } from "../source/traits";

declare function as<T>(): T;

type CombinedTraits = [
  {
    async: true;
    complete: true;
    error: true;
    max: string[];
    min: string[];
  },
  {
    async: false;
    complete: true;
    error: false;
    max: [number];
    min: [number];
  }
];

describe("Both", () => {
  it("should resolve to true only if both are true", () => {
    const a = as<Both<true, true>>(); // $ExpectType true
    const b = as<Both<true, false>>(); // $ExpectType false
    const c = as<Both<true, boolean>>(); // $ExpectType boolean
    const d = as<Both<false, true>>(); // $ExpectType false
    const e = as<Both<false, false>>(); // $ExpectType false
    const f = as<Both<false, boolean>>(); // $ExpectType false
  });

  it("should support maybe", () => {
    const a = as<Both<true, boolean, true>>(); // $ExpectType true
    const b = as<Both<false, boolean, true>>(); // $ExpectType false
    const c = as<Both<boolean, boolean, true>>(); // $ExpectType true
    const d = as<Both<true, boolean, false>>(); // $ExpectType false
    const e = as<Both<false, boolean, false>>(); // $ExpectType false
    const f = as<Both<boolean, boolean, false>>(); // $ExpectType false
  });
});

describe("Either", () => {
  it("should resolve to true only if either is true", () => {
    const a = as<Either<true, true>>(); // $ExpectType true
    const b = as<Either<true, false>>(); // $ExpectType true
    const c = as<Either<true, boolean>>(); // $ExpectType true
    const d = as<Either<false, true>>(); // $ExpectType true
    const e = as<Either<false, false>>(); // $ExpectType false
    const f = as<Either<false, boolean>>(); // $ExpectType boolean
  });

  it("should support maybe", () => {
    const a = as<Either<true, boolean, true>>(); // $ExpectType true
    const b = as<Either<false, boolean, true>>(); // $ExpectType true
    const c = as<Either<boolean, boolean, true>>(); // $ExpectType true
    const d = as<Either<true, boolean, false>>(); // $ExpectType true
    const e = as<Either<false, boolean, false>>(); // $ExpectType false
    const f = as<Either<boolean, boolean, false>>(); // $ExpectType false
  });
});

describe("Not", () => {
  it("should resolve to the logical negation", () => {
    const a = as<Not<true>>(); // $ExpectType false
    const b = as<Not<false>>(); // $ExpectType true
    const c = as<Not<boolean>>(); // $ExpectType boolean
  });
});

describe("Union", () => {
  it("should determine the union of the specified key", () => {
    const a = as<Union<CombinedTraits, "async">>(); // $ExpectType boolean
    const b = as<Union<CombinedTraits, "complete">>(); // $ExpectType true
    const c = as<Union<CombinedTraits, "error">>(); // $ExpectType boolean
  });
});
