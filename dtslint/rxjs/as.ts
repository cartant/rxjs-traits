/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { Observable } from "../../source/rxjs";
import { Traits } from "../../source/traits";

export declare function as<T extends Traits, K extends keyof Traits>(
  observable: Observable<unknown, T>,
  key: K
): T[K];
