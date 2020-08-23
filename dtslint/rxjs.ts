/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { of, skip, take } from "../source/rxjs";

declare function describe(...args: unknown[]): void;
declare function it(...args: unknown[]): void;

describe("rxjs", () => {
  it("should support skip", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(skip(1));
    const max = result.max; // $ExpectType 2
  });

  it("should support take", () => {
    const source = of(1, 2, 3);
    const result = source.pipe(take(1));
    const max = result.max; // $ExpectType 1
  });
});
