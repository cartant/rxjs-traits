/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { interval } from "../../../source/rxjs";
import { as } from "../as";

describe("interval", () => {
  it("should support interval", () => {
    const source = interval(1e3);
    const async = as(source, "async"); // $ExpectType true
    const complete = as(source, "complete"); // $ExpectType false
    const max = as(source, "max"); // $ExpectType undefined
    const min = as(source, "min"); // $ExpectType undefined
  });
});
