/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Observable } from "../Observable";

export const NEVER = root.NEVER as Observable<
  never,
  {
    async: false;
    complete: false;
    error: false;
    max: [];
    min: [];
  }
>;
