/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Cardinality, Fill } from "../../cardinality";
import { Observable } from "../Observable";

export function range<TCount extends Cardinality>(
  start: number,
  count?: undefined,
  scheduler?: root.SchedulerLike
): Observable<
  number,
  {
    async: false;
    complete: false;
    error: false;
    max: number[];
    min: number[];
  }
>;

export function range<TCount extends Cardinality>(
  start: number,
  count: TCount,
  scheduler?: root.SchedulerLike
): Observable<
  number,
  {
    async: false;
    complete: true;
    error: false;
    max: Fill<TCount, number>;
    min: Fill<TCount, number>;
  }
>;

export function range(
  start?: number,
  count?: number,
  scheduler?: root.SchedulerLike
): Observable<
  number,
  {
    async: false;
    complete: boolean;
    error: false;
    max: number[];
    min: number[];
  }
>;

export function range(
  start = 0,
  count?: number,
  scheduler?: root.SchedulerLike
) {
  return root.range(start, count, scheduler);
}
