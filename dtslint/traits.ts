/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { Union } from "../source/traits";

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

describe("Union", () => {
  it("should determine the union of the specified key", () => {
    const a = as<Union<CombinedTraits, "async">>(); // $ExpectType boolean
    const b = as<Union<CombinedTraits, "complete">>(); // $ExpectType true
    const c = as<Union<CombinedTraits, "error">>(); // $ExpectType boolean
  });
});
