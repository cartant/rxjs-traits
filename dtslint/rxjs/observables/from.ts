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
    const async = as(source, "async"); // $ExpectType boolean
    const complete = as(source, "complete"); // $ExpectType boolean
    const max = as(source, "max"); // $ExpectType never[]
    const min = as(source, "min"); // $ExpectType never[]
  });

  it("should support from with array", () => {
    const source = from([1, 2, 3] as const);
    const async = as(source, "async"); // $ExpectType false
    const complete = as(source, "complete"); // $ExpectType true
    const max = as(source, "max"); // $ExpectType [1, 2, 3]
    const min = as(source, "min"); // $ExpectType [1, 2, 3]
  });

  it("should support from with promise", () => {
    const source = from(Promise.resolve("alice"));
    const async = as(source, "async"); // $ExpectType true
    const complete = as(source, "complete"); // $ExpectType boolean
    const max = as(source, "max"); // $ExpectType [string]
    const min = as(source, "min"); // $ExpectType [string]
  });

  it("should support from with root observable", () => {
    const source = from(root.of("alice"));
    const async = as(source, "async"); // $ExpectType boolean
    const complete = as(source, "complete"); // $ExpectType boolean
    const max = as(source, "max"); // $ExpectType string[]
    const min = as(source, "min"); // $ExpectType string[]
  });
});
