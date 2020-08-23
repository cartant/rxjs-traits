/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import { Element, Length } from "./cardinality";
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

export function from<O extends readonly unknown[]>(
  input: O
): ObservableWithTraits<
  Element<O>,
  {
    async: false;
    complete: true;
    error: undefined;
    max: Length<O>;
    min: Length<O>;
  }
>;
export function from<O extends root.ObservableInput<unknown>>(
  input: O
): ObservableWithTraits<
  root.ObservedValueOf<O>,
  {
    async: false;
    complete: true;
    error: undefined;
    max: undefined;
    min: 0;
  }
>;
export function from<O extends root.ObservableInput<unknown>>(input: O) {
  return root.from(input);
}

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

export function of<A extends unknown[]>(...args: A) {
  return root.of(...args) as ObservableWithTraits<
    Element<A>,
    {
      async: false;
      complete: true;
      error: undefined;
      max: Length<A>;
      min: Length<A>;
    }
  >;
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
