/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import {
  EMPTY,
  from,
  ignoreElements,
  interval,
  Observable,
  map,
  of,
  skip,
  startWith,
  take,
  throwError,
  timer,
} from "../source/rxjs";
import { Traits } from "../source/traits";

declare function describe(...args: unknown[]): void;
declare function it(...args: unknown[]): void;
declare function as<T extends Traits, K extends keyof Traits>(
  observable: Observable<unknown, T>,
  key: K
): T[K];

describe("from", () => {
  it("should support from", () => {
    const source = from(EMPTY);
    const async = as(source, "async"); // $ExpectType undefined
    const complete = as(source, "complete"); // $ExpectType undefined
    const max = as(source, "max"); // $ExpectType undefined
    const min = as(source, "min"); // $ExpectType 0
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
    const max = as(source, "max"); // $ExpectType 1
    const min = as(source, "min"); // $ExpectType 1
  });
});

describe("ignoreElements", () => {
  it("should support ignoreElements", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(ignoreElements());
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 0
    const min = as(result, "min"); // $ExpectType 0
  });
});

describe("interval", () => {
  it("should support interval", () => {
    const source = interval(1e3);
    const async = as(source, "async"); // $ExpectType true
    const complete = as(source, "complete"); // $ExpectType false
    const max = as(source, "max"); // $ExpectType undefined
    const min = as(source, "min"); // $ExpectType 1
  });
});

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

describe("of", () => {
  it("should support of", () => {
    const source = of(1, 2, 3);
    const async = as(source, "async"); // $ExpectType false
    const complete = as(source, "complete"); // $ExpectType true
    const max = as(source, "max"); // $ExpectType 3
    const min = as(source, "min"); // $ExpectType 3
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

describe("startWith", () => {
  it("should support startWith", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(startWith(-1));
    const async = as(result, "async"); // $ExpectType false
    const complete = as(result, "complete"); // $ExpectType true
    const max = as(result, "max"); // $ExpectType 4
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
    const min = as(source, "min"); // $ExpectType 1
  });
});
