/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import {
  EMPTY,
  ObservableWithTraits,
  map,
  of,
  skip,
  take,
} from "../source/rxjs";
import { Traits } from "../source/traits";

declare function describe(...args: unknown[]): void;
declare function it(...args: unknown[]): void;
declare function as<T extends Traits, K extends keyof Traits>(
  observable: ObservableWithTraits<unknown, T>,
  key: K
): T[K];

describe("map", () => {
  it("should support map()", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(map((value) => JSON.stringify(value)));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 3
    const min = as(result, "min"); // $ExpectType 3
  });

  it("should support map() from EMPTY", () => {
    const source = EMPTY;
    const result = source.pipe(map((value) => JSON.stringify(value)));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 0
    const min = as(result, "min"); // $ExpectType 0
  });
});

describe("skip", () => {
  it("should support skip(1)", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(skip(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 2
  });

  it("should support skip(1) from EMPTY", () => {
    const source = EMPTY;
    const result = source.pipe(skip(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType undefined
  });
});

describe("take", () => {
  it("should support take(1)", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(take(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 1
  });

  it("should support take(1) from EMPTY", () => {
    const source = EMPTY;
    const result = source.pipe(take(1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 0
  });
});
