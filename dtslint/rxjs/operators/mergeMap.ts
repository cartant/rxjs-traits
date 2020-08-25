/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { of } from "../../../source/rxjs";
import { mergeMap } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("mergeMap", () => {
  it("should support map()", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(mergeMap((value) => of(value)));
    const async = as(result, "async"); // $ExpectType undefined
    const complete = as(result, "complete"); // $ExpectType undefined
    const error = as(result, "error"); // $ExpectType undefined
    const max = as(result, "max"); // $ExpectType undefined
    const min = as(result, "min"); // $ExpectType undefined
  });
});
