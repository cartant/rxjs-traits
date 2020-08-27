/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { of } from "../../../source/rxjs";
import { as } from "../as";

describe("of", () => {
  it("should support of", () => {
    const source = of(1, 2, 3);
    const async = as(source, "async"); // $ExpectType false
    const complete = as(source, "complete"); // $ExpectType true
    const max = as(source, "max"); // $ExpectType [number, number, number]
    const min = as(source, "min"); // $ExpectType [number, number, number]
  });
});
