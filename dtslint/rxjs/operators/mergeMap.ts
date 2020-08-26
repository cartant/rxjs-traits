/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { of } from "../../../source/rxjs";
import { mergeMap } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("mergeMap", () => {
  it("should support mergeMap()", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(mergeMap((value) => of(value)));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const error = as(result, "error"); // $ExpectType undefined
    const max = as(result, "max"); // $ExpectType number
    const min = as(result, "min"); // $ExpectType number
  });

  it("should support mergeMap() with promise", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(mergeMap((value) => Promise.resolve(value)));
    const async = as(result, "async"); // $ExpectType true
    const complete = as(result, "complete"); // $ExpectType undefined
    const error = as(result, "error"); // $ExpectType undefined
    const max = as(result, "max"); // $ExpectType number
    const min = as(result, "min"); // $ExpectType number
  });

  it("should support mergeMap() with root observable", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(mergeMap((value) => root.of(value)));
    const async = as(result, "async"); // $ExpectType undefined
    const complete = as(result, "complete"); // $ExpectType undefined
    const error = as(result, "error"); // $ExpectType undefined
    const max = as(result, "max"); // $ExpectType number
    const min = as(result, "min"); // $ExpectType number
  });
});
