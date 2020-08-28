/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { EMPTY, from, of } from "../../../source/rxjs";
import { map } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("map", () => {
  it("should support map()", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(map((value) => JSON.stringify(value)));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType [string, string, string]
    const min = as(result, "min"); // $ExpectType [string, string, string]
  });

  it("should support map() from EMPTY", () => {
    const source = EMPTY;
    const result = source.pipe(map((value) => JSON.stringify(value)));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType []
    const min = as(result, "min"); // $ExpectType []
  });

  it("should support map with root observable", () => {
    const source = from(root.of(1, 2, 3));
    const result = source.pipe(map((value) => JSON.stringify(value)));
    const async = as(result, "async"); // $ExpectType boolean
    const complete = as(result, "complete"); // $ExpectType boolean
    const max = as(result, "max"); // $ExpectType string[]
    const min = as(result, "min"); // $ExpectType string[]
  });
});
