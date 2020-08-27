/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Observable } from "../Observable";

export function throwError(error: any, scheduler?: root.SchedulerLike) {
  return root.throwError(error, scheduler) as Observable<
    never,
    {
      async: false;
      complete: false;
      error: true;
      max: [];
      min: [];
    }
  >;
}
