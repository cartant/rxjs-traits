/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { of, skip } from "../source/rxjs";

declare function describe(...args: unknown[]): void;
declare function it(...args: unknown[]): void;

describe("rxjs", () => {
  it("should support skip", () => {
    const source = of(1, 2, 3);
    const skipped = source.pipe(skip(1));
    const max = skipped.max; // $ExpectType 2
  });
});
