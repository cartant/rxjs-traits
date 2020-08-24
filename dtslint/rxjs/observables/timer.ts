/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { timer } from "../../../source/rxjs";
import { as } from "../as";

describe("timer", () => {
  it("should support timer", () => {
    const source = timer(1e3);
    const async = as(source, "async"); // $ExpectType true
    const complete = as(source, "complete"); // $ExpectType true
    const max = as(source, "max"); // $ExpectType 1
    const min = as(source, "min"); // $ExpectType 1
  });

  it("should support timer with period", () => {
    const source = timer(1e3, 1e3);
    const async = as(source, "async"); // $ExpectType true
    const complete = as(source, "complete"); // $ExpectType false
    const max = as(source, "max"); // $ExpectType undefined
    const min = as(source, "min"); // $ExpectType undefined
  });
});
