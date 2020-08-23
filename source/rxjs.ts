/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import { Element, Length, Subtract } from "./cardinality";
import { Traits, WithMax } from "./traits";

export type ObservableWithTraits<TElement, TTraits extends Traits> = {
  pipe<TResultElement, TResultTraits extends Traits>(
    operator: OperatorFunctionWithTraits<
      TElement,
      TTraits,
      TResultElement,
      TResultTraits
    >
  ): ObservableWithTraits<TResultElement, TResultTraits>;
} & TTraits;

export type OperatorFunctionWithTraits<
  TSourceElement,
  TSourceTraits extends Traits,
  TResultElement,
  TResultTraits extends Traits
> = (
  source: ObservableWithTraits<TSourceElement, TSourceTraits>
) => ObservableWithTraits<TResultElement, TResultTraits>;

export const EMPTY = (root.EMPTY as unknown) as ObservableWithTraits<
  never,
  {
    async: false;
    complete: true;
    error: undefined;
    max: 0;
    min: 0;
  }
>;

export const NEVER = (root.NEVER as unknown) as ObservableWithTraits<
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
  return root.from(input) as unknown;
}

export function interval(
  period = 0,
  scheduler: root.SchedulerLike = root.asyncScheduler
) {
  return (root.interval(period, scheduler) as unknown) as ObservableWithTraits<
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

export function map<
  TSourceElement,
  TResultElement,
  TSourceTraits extends Traits
>(
  project: (value: TSourceElement, index: number) => TResultElement,
  thisArg?: any
) {
  return (operators.map(
    project,
    thisArg
  ) as unknown) as OperatorFunctionWithTraits<
    TSourceElement,
    TSourceTraits,
    TResultElement,
    TSourceTraits
  >;
}

export function of<A extends unknown[]>(...args: A) {
  return (root.of(...args) as unknown) as ObservableWithTraits<
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

export function skip<TSourceElement, TSourceTraits extends Traits>(
  count: 1
): OperatorFunctionWithTraits<
  TSourceElement,
  TSourceTraits,
  TSourceElement,
  WithMax<TSourceTraits, Subtract<TSourceTraits["max"], 1>>
>;
export function skip<TSourceElement, TSourceTraits extends Traits>(
  count: number
): OperatorFunctionWithTraits<
  TSourceElement,
  TSourceTraits,
  TSourceElement,
  TSourceTraits
>;
export function skip<TSourceElement, TSourceTraits extends Traits>(
  count: number
) {
  return operators.skip<TSourceElement>(count) as unknown;
}

export function take<TSourceElement, TSourceTraits extends Traits>(
  count: 1
): OperatorFunctionWithTraits<
  TSourceElement,
  TSourceTraits,
  TSourceElement,
  WithMax<TSourceTraits, 1>
>;
export function take<TSourceElement, TSourceTraits extends Traits>(
  count: number
): OperatorFunctionWithTraits<
  TSourceElement,
  TSourceTraits,
  TSourceElement,
  TSourceTraits
>;
export function take<TSourceElement, TSourceTraits extends Traits>(
  count: number
) {
  return operators.take<TSourceElement>(count) as unknown;
}

export function throwError(error: any, scheduler?: root.SchedulerLike) {
  return (root.throwError(error, scheduler) as unknown) as ObservableWithTraits<
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
) {
  return root.timer(dueTime, periodOrScheduler, scheduler) as unknown;
}
