/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import {
  DefaultTraits,
  WithAsync,
  WithComplete,
  WithError,
  WithMax,
  WithMin,
} from "../source/traits";

declare function describe(...args: unknown[]): void;
declare function it(...args: unknown[]): void;
declare function as<T>(): T;

describe("WithAsync", () => {
  it("should set the async property", () => {
    const property = as<WithAsync<DefaultTraits, true>>().async; // $ExpectType true
  });
});

describe("WithComplete", () => {
  it("should set the complete property", () => {
    const property = as<WithComplete<DefaultTraits, true>>().complete; // $ExpectType true
  });
});

describe("WithError", () => {
  it("should set the error property", () => {
    const property = as<WithError<DefaultTraits, true>>().error; // $ExpectType true
  });
});

describe("WithMax", () => {
  it("should set the max property", () => {
    const property = as<WithMax<DefaultTraits, 1>>().max; // $ExpectType 1
  });
});

describe("WithMin", () => {
  it("should set the min property", () => {
    const property = as<WithMin<DefaultTraits, 1>>().min; // $ExpectType 1
  });
});
