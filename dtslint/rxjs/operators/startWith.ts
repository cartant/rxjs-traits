/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { of } from "../../../source/rxjs";
import { startWith } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("startWith", () => {
  it("should support startWith", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(startWith(-1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType [number, number, number, number]
    const min = as(result, "min"); // $ExpectType [number, number, number, number]
  });
});
