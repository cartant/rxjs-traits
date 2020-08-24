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
    const max = as(result, "max"); // $ExpectType 2
    const min = as(result, "min"); // $ExpectType 2
  });

  it("should support skip(2)", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(skip(2));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 1
    const min = as(result, "min"); // $ExpectType 1
  });

  it("should support skip(1) from EMPTY", () => {
    const source = EMPTY;
    const result = source.pipe(skip(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 0
    const min = as(result, "min"); // $ExpectType 0
  });

  it("should support skip(1) with interval", () => {
    const source = interval(1e3);
    const result = source.pipe(skip(1));
    const async = as(result, "async"); // $ExpectType true
    const complete = as(result, "complete"); // $ExpectType false
    const max = as(result, "max"); // $ExpectType undefined
    const min = as(result, "min"); // $ExpectType undefined
  });
});
