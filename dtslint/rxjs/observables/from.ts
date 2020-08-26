/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { EMPTY, from } from "../../../source/rxjs";
import { as } from "../as";

describe("from", () => {
  it("should support from", () => {
    const source = from(EMPTY);
    const async = as(source, "async"); // $ExpectType undefined
    const complete = as(source, "complete"); // $ExpectType undefined
    const max = as(source, "max"); // $ExpectType number
    const min = as(source, "min"); // $ExpectType number
  });

  it("should support from with array", () => {
    const source = from([1, 2, 3] as const);
    const async = as(source, "async"); // $ExpectType false
    const complete = as(source, "complete"); // $ExpectType true
    const max = as(source, "max"); // $ExpectType 3
    const min = as(source, "min"); // $ExpectType 3
  });

  it("should support from with promise", () => {
    const source = from(Promise.resolve("alice"));
    const async = as(source, "async"); // $ExpectType true
    const complete = as(source, "complete"); // $ExpectType undefined
    const max = as(source, "max"); // $ExpectType number
    const min = as(source, "min"); // $ExpectType number
  });

  it("should support from with root observable", () => {
    const source = from(root.of("alice"));
    const async = as(source, "async"); // $ExpectType undefined
    const complete = as(source, "complete"); // $ExpectType undefined
    const max = as(source, "max"); // $ExpectType number
    const min = as(source, "min"); // $ExpectType number
  });
});
