/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { of } from "../../../source/rxjs";
import { observeOn } from "../../../source/rxjs/operators";
import { as } from "../as";

describe("observeOn", () => {
  it("should support observeOn", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(observeOn(root.asapScheduler));
    const async = as(result, "async"); // $ExpectType true
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 3
    const min = as(result, "min"); // $ExpectType 3
  });
});
