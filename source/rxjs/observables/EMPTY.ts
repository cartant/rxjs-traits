/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Observable } from "../Observable";

export const EMPTY = root.EMPTY as Observable<
  never,
  {
    async: false;
    complete: true;
    error: false;
    max: 0;
    min: 0;
  }
>;
