/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { from, of } from "../../../source/rxjs";
import { filter } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("filter", () => {
  it("should support filter", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(filter((value) => Boolean(value)));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType [number, number, number]
    const min = as(result, "min"); // $ExpectType []
  });

  it("should support filter with root observable", () => {
    const source = from(root.of(1, 2, 3));
    const result = source.pipe(filter((value) => Boolean(value)));
    const async = as(result, "async"); // $ExpectType boolean
    const complete = as(result, "complete"); // $ExpectType boolean
    const max = as(result, "max"); // $ExpectType number[]
    const min = as(result, "min"); // $ExpectType []
  });
});
