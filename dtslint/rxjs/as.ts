/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { Observable } from "../../source/rxjs";
import { Traits } from "../../source/traits";

type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export declare function as<
  T extends Traits<unknown>,
  K extends keyof Traits<unknown>
>(observable: Observable<unknown, T>, key: K): Writeable<T[K]>;
