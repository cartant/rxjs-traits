/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import { Add, Element, Length, Min, Subtract } from "./cardinality";
import { Traits, WithMax, WithMin } from "./traits";

export interface ObservableWithTraits<TElement, TTraits extends Traits>
  extends root.Observable<TElement> {
  pipe(): ObservableWithTraits<TElement, TTraits>;
  pipe<TResultElement, TResultTraits extends Traits>(
    operator1: OperatorFunctionWithTraits<
      TElement,
      TTraits,
      TResultElement,
      TResultTraits
    >
  ): ObservableWithTraits<TResultElement, TResultTraits>;
  pipe<
    T1Element,
    T1Traits extends Traits,
    TResultElement,
    TResultTraits extends Traits
  >(
    operator1: OperatorFunctionWithTraits<
      TElement,
      TTraits,
      T1Element,
      T1Traits
    >,
    operator2: OperatorFunctionWithTraits<
      T1Element,
      T1Traits,
      TResultElement,
      TResultTraits
    >
  ): ObservableWithTraits<TResultElement, TResultTraits>;
  pipe<
    T1Element,
    T1Traits extends Traits,
    T2Element,
    T2Traits extends Traits,
    TResultElement,
    TResultTraits extends Traits
  >(
    operator1: OperatorFunctionWithTraits<
      TElement,
      TTraits,
      T1Element,
      T1Traits
    >,
    operator2: OperatorFunctionWithTraits<
      T1Element,
      T1Traits,
      T2Element,
      T2Traits
    >,
    operator3: OperatorFunctionWithTraits<
      T2Element,
      T2Traits,
      TResultElement,
      TResultTraits
    >
  ): ObservableWithTraits<TResultElement, TResultTraits>;
  pipe<
    T1Element,
    T1Traits extends Traits,
    T2Element,
    T2Traits extends Traits,
    T3Element,
    T3Traits extends Traits,
    TResultElement,
    TResultTraits extends Traits
  >(
    operator1: OperatorFunctionWithTraits<
      TElement,
      TTraits,
      T1Element,
      T1Traits
    >,
    operator2: OperatorFunctionWithTraits<
      T1Element,
      T1Traits,
      T2Element,
      T2Traits
    >,
    operator3: OperatorFunctionWithTraits<
      T2Element,
      T2Traits,
      T3Element,
      T3Traits
    >,
    operator4: OperatorFunctionWithTraits<
      T3Element,
      T3Traits,
      TResultElement,
      TResultTraits
    >
  ): ObservableWithTraits<TResultElement, TResultTraits>;
}

export type OperatorFunctionWithTraits<
  TSourceElement,
  TSourceTraits extends Traits,
  TResultElement,
  TResultTraits extends Traits
> = (
  source: ObservableWithTraits<TSourceElement, TSourceTraits>
) => ObservableWithTraits<TResultElement, TResultTraits>;

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
export function from<T>(
  input: Promise<T>
): ObservableWithTraits<
  T,
  {
    async: true;
    complete: undefined;
    error: undefined;
    max: 1;
    min: 0;
  }
>;
export function from<O extends root.ObservableInput<unknown>>(
  input: O
): ObservableWithTraits<
  root.ObservedValueOf<O>,
  {
    async: undefined;
    complete: undefined;
    error: undefined;
    max: undefined;
    min: 0;
  }
>;
export function from<O extends root.ObservableInput<unknown>>(input: O) {
  return root.from(input);
}

export function ignoreElements<TSourceElement, TSourceTraits extends Traits>() {
  return operators.ignoreElements() as OperatorFunctionWithTraits<
    TSourceElement,
    TSourceTraits,
    TSourceElement,
    WithMax<WithMin<TSourceTraits, 0>, 0>
  >;
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

export function map<
  TSourceElement,
  TSourceTraits extends Traits,
  TResultElement
>(
  project: (value: TSourceElement, index: number) => TResultElement,
  thisArg?: any
) {
  return operators.map(project, thisArg) as OperatorFunctionWithTraits<
    TSourceElement,
    TSourceTraits,
    TResultElement,
    TSourceTraits
  >;
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
  return operators.skip<TSourceElement>(count);
}

export function startWith<
  TSourceElement,
  TSourceTraits extends Traits,
  TValueElement
>(value: TValueElement) {
  return operators.startWith(value) as OperatorFunctionWithTraits<
    TSourceElement,
    TSourceTraits,
    TSourceElement | TValueElement,
    WithMax<TSourceTraits, Add<TSourceTraits["max"], 1>>
  >;
}

export function take<TSourceElement, TSourceTraits extends Traits>(
  count: 1
): OperatorFunctionWithTraits<
  TSourceElement,
  TSourceTraits,
  TSourceElement,
  WithMax<TSourceTraits, Min<TSourceTraits["max"], 1>>
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
  return operators.take<TSourceElement>(count);
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
) {
  return root.timer(dueTime, periodOrScheduler, scheduler);
}
