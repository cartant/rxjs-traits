/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import { Traits } from "./traits";

type ObservableWithTraits<T, TTraits extends Traits> = root.Observable<T> &
  TTraits;

export const EMPTY = root.EMPTY as ObservableWithTraits<
  never,
  {
    async: false;
    complete: true;
    error: undefined;
    max: 0;
    min: 0;
  }
>;

export const NEVER = root.NEVER as ObservableWithTraits<
  never,
  {
    async: false;
    complete: false;
    error: undefined;
    max: 0;
    min: 0;
  }
>;

export function interval(
  period = 0,
  scheduler: root.SchedulerLike = root.asyncScheduler
) {
  return root.interval(period, scheduler) as ObservableWithTraits<
    number,
    {
      async: true;
      complete: false;
      error: undefined;
      max: undefined;
      min: 0;
    }
  >;
}

export function map<T, R>(
  project: (value: T, index: number) => R,
  thisArg?: any
) {
  return operators.map(project, thisArg);
}

export function skip<T>(count: number) {
  return operators.skip<T>(count);
}

export function take<T>(count: number) {
  return operators.take<T>(count);
}

export function throwError(error: any, scheduler?: root.SchedulerLike) {
  return root.throwError(error, scheduler) as ObservableWithTraits<
    never,
    {
      async: false;
      complete: false;
      error: true;
      max: 0;
      min: 0;
    }
  >;
}

export function timer(
  dueTime: number | Date,
  scheduler?: root.SchedulerLike
): ObservableWithTraits<
  number,
  {
    async: true;
    complete: true;
    error: undefined;
    max: 1;
    min: 0;
  }
>;
export function timer(
  dueTime: number | Date,
  period: number,
  scheduler?: root.SchedulerLike
): ObservableWithTraits<
  number,
  {
    async: true;
    complete: false;
    error: undefined;
    max: undefined;
    min: 0;
  }
>;
export function timer(
  dueTime: number | Date = 0,
  periodOrScheduler?: number | root.SchedulerLike,
  scheduler?: root.SchedulerLike
): root.Observable<number> {
  return root.timer(dueTime, periodOrScheduler, scheduler);
}
