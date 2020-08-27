/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { of } from "../../../source/rxjs";
import { ignoreElements } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("ignoreElements", () => {
  it("should support ignoreElements", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(ignoreElements());
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType []
    const min = as(result, "min"); // $ExpectType []
  });
});
