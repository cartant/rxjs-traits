/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { EMPTY, interval, of } from "../../../source/rxjs";
import { skip } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("skip", () => {
  it("should support skip(1)", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(skip(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType [number, number]
    const min = as(result, "min"); // $ExpectType [number, number]
  });

  it("should support skip(2)", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(skip(2));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType [number]
    const min = as(result, "min"); // $ExpectType [number]
  });

  it("should support skip(number)", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(skip(1 as number));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType number[]
    const min = as(result, "min"); // $ExpectType number[]
  });

  it("should support skip(1) from EMPTY", () => {
    const source = EMPTY;
    const result = source.pipe(skip(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType []
    const min = as(result, "min"); // $ExpectType []
  });

  it("should support skip(1) with interval", () => {
    const source = interval(1e3);
    const result = source.pipe(skip(1));
    const async = as(result, "async"); // $ExpectType true
    const complete = as(result, "complete"); // $ExpectType false
    const max = as(result, "max"); // $ExpectType number[]
    const min = as(result, "min"); // $ExpectType number[]
  });
});
