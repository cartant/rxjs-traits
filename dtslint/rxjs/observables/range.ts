/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { range } from "../../../source/rxjs";
import { as } from "../as";

describe("of", () => {
  it("should support range without a count", () => {
    const source = range(1);
    const async = as(source, "async"); // $ExpectType false
    const complete = as(source, "complete"); // $ExpectType false
    const max = as(source, "max"); // $ExpectType number[]
    const min = as(source, "min"); // $ExpectType number[]
  });

  it("should support range with an in-range count", () => {
    const source = range(1, 3);
    const async = as(source, "async"); // $ExpectType false
    const complete = as(source, "complete"); // $ExpectType true
    const max = as(source, "max"); // $ExpectType [number, number, number]
    const min = as(source, "min"); // $ExpectType [number, number, number]
  });

  it("should support range with an out-range count", () => {
    const source = range(1, 10);
    const async = as(source, "async"); // $ExpectType false
    const complete = as(source, "complete"); // $ExpectType boolean
    const max = as(source, "max"); // $ExpectType number[]
    const min = as(source, "min"); // $ExpectType number[]
  });
});
