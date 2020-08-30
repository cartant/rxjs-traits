/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { EMPTY, NEVER, Observable, of } from "../../../source/rxjs";
import { take } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("take", () => {
  it("should support take(1)", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(take(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType [number]
    const min = as(result, "min"); // $ExpectType [number]
  });

  it("should support take(1) from EMPTY", () => {
    const source = EMPTY;
    const result = source.pipe(take(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType []
    const min = as(result, "min"); // $ExpectType []
  });

  it("should support take(1) from NEVER", () => {
    const source = NEVER;
    const result = source.pipe(take(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType false
    const max = as(result, "max"); // $ExpectType []
    const min = as(result, "min"); // $ExpectType []
  });

  it("should support take(1) with zero min", () => {
    let source!: Observable<
      number,
      {
        async: true;
        complete: false;
        error: false;
        max: [number];
        min: [];
      }
    >;
    const result = source.pipe(take(1));
    const async = as(result, "async"); // $ExpectType true
    const complete = as(result, "complete"); // $ExpectType boolean
    const max = as(result, "max"); // $ExpectType [number]
    const min = as(result, "min"); // $ExpectType []
  });
});
