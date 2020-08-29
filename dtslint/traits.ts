/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { All, Some, Union } from "../source/traits";

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

describe("All", () => {
  it("should resolve to true only if true", () => {
    const a = as<All<true>>(); // $ExpectType true
    const b = as<All<false>>(); // $ExpectType false
    const c = as<All<boolean>>(); // $ExpectType false
  });
});

describe("Some", () => {
  it("should resolve to true only not false", () => {
    const a = as<Some<true>>(); // $ExpectType true
    const b = as<Some<false>>(); // $ExpectType false
    const c = as<Some<boolean>>(); // $ExpectType true
  });
});

describe("Union", () => {
  it("should determine the union of the specified key", () => {
    const a = as<Union<CombinedTraits, "async">>(); // $ExpectType boolean
    const b = as<Union<CombinedTraits, "complete">>(); // $ExpectType true
    const c = as<Union<CombinedTraits, "error">>(); // $ExpectType boolean
  });
});
