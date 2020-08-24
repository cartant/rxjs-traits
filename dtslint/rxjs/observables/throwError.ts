/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { throwError } from "../../../source/rxjs";
import { as } from "../as";

describe("throwError", () => {
  it("should support throwError", () => {
    const source = throwError(new Error("Kaboom!"));
    const async = as(source, "async"); // $ExpectType false
    const complete = as(source, "complete"); // $ExpectType false
    const error = as(source, "error"); // $ExpectType true
    const max = as(source, "max"); // $ExpectType 0
    const min = as(source, "min"); // $ExpectType 0
  });
});
