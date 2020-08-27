/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Observable } from "../Observable";

export function timer(
  dueTime: number | Date,
  scheduler?: root.SchedulerLike
): Observable<
  number,
  {
    async: true;
    complete: true;
    error: undefined;
    max: [number];
    min: [number];
  }
>;

export function timer(
  dueTime: number | Date,
  period: number,
  scheduler?: root.SchedulerLike
): Observable<
  number,
  {
    async: true;
    complete: false;
    error: undefined;
    max: number[];
    min: number[];
  }
>;

export function timer(
  dueTime: number | Date = 0,
  periodOrScheduler?: number | root.SchedulerLike,
  scheduler?: root.SchedulerLike
) {
  return root.timer(dueTime, periodOrScheduler, scheduler);
}
