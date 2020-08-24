/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Observable } from "../Observable";

export function interval(
  period = 0,
  scheduler: root.SchedulerLike = root.asyncScheduler
) {
  return root.interval(period, scheduler) as Observable<
    number,
    {
      async: true;
      complete: false;
      error: undefined;
      max: undefined;
      min: undefined;
    }
  >;
}
