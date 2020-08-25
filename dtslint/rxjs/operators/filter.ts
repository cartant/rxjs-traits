/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { of } from "../../../source/rxjs";
import { filter } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("filter", () => {
  it("should support filter", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(filter((value) => Boolean(value)));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 3
    const min = as(result, "min"); // $ExpectType 0
  });
});
