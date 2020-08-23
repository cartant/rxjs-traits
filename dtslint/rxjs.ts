/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { of, map } from "../source/rxjs";

declare function describe(...args: unknown[]): void;
declare function it(...args: unknown[]): void;

describe("rxjs", () => {
  it("should support map", () => {
    const source = of(1);
    const result = source.pipe(map((value) => value.toString()));
  });
});
