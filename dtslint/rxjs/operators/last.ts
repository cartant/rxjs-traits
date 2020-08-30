/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { NEVER, of } from "../../../source/rxjs";
import { last } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("last", () => {
  it("should support last()", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(last());
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType [number]
    const min = as(result, "min"); // $ExpectType [number]
  });

  it("should support last() from NEVER", () => {
    const source = NEVER;
    const result = source.pipe(last());
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType false
    const error = as(result, "error"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType []
    const min = as(result, "min"); // $ExpectType []
  });
});
