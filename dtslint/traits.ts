/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { All, AsUnion, DefaultTraits, Some } from "../source/traits";

declare function as<T>(): T;

type CombinedTraits = [
  DefaultTraits,
  {
    async: true;
    complete: true;
    error: true;
    max: 1;
    min: 1;
  }
];

describe("All", () => {
  it("should resolve to true if all true", () => {
    const a = as<All<true | true>>(); // $ExpectType true
    const b = as<All<true | false>>(); // $ExpectType false
    const c = as<All<true | undefined>>(); // $ExpectType undefined
    const d = as<All<false | false>>(); // $ExpectType false
    const e = as<All<false | undefined>>(); // $ExpectType undefined
    const f = as<All<undefined | undefined>>(); // $ExpectType undefined
  });
});

describe("AsUnion", () => {
  it("should determine the union of the specified key", () => {
    const a = as<AsUnion<CombinedTraits, "async">>(); // $ExpectType true | undefined
    const b = as<AsUnion<CombinedTraits, "complete">>(); // $ExpectType true | undefined
    const c = as<AsUnion<CombinedTraits, "error">>(); // $ExpectType true | undefined
    const d = as<AsUnion<CombinedTraits, "max">>(); // $ExpectType 1 | undefined
    const e = as<AsUnion<CombinedTraits, "max">>(); // $ExpectType 1 | undefined
  });
});

describe("Some", () => {
  it("should resolve to true if some true", () => {
    const a = as<Some<true | true>>(); // $ExpectType true
    const b = as<Some<true | false>>(); // $ExpectType true
    const c = as<Some<true | undefined>>(); // $ExpectType true
    const d = as<Some<false | false>>(); // $ExpectType false
    const e = as<Some<false | undefined>>(); // $ExpectType undefined
    const f = as<Some<undefined | undefined>>(); // $ExpectType undefined
  });
});
