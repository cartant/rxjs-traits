/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import { Add, Element, Length, Min, Subtract } from "./cardinality";
import { Traits, WithMax, WithMin } from "./traits";

export interface Observable<
  TElement = unknown,
  TTraits extends Traits = Traits
> extends root.Observable<TElement> {
  pipe(): Observable<TElement, TTraits>;
  pipe<T1 extends Observable>(
    operator1: Operator<Observable<TElement, TTraits>, T1>
  ): T1;
  pipe<T1 extends Observable, T2 extends Observable>(
    operator1: Operator<Observable<TElement, TTraits>, T1>,
    operator2: Operator<T1, T2>
  ): T2;
  pipe<T1 extends Observable, T2 extends Observable, T3 extends Observable>(
    operator1: Operator<Observable<TElement, TTraits>, T1>,
    operator2: Operator<T1, T2>,
    operator3: Operator<T2, T3>
  ): T3;
  pipe<
    T1 extends Observable,
    T2 extends Observable,
    T3 extends Observable,
    T4 extends Observable
  >(
    operator1: Operator<Observable<TElement, TTraits>, T1>,
    operator2: Operator<T1, T2>,
    operator3: Operator<T2, T3>,
    operator4: Operator<T3, T4>
  ): T4;
  pipe<
    T1 extends Observable,
    T2 extends Observable,
    T3 extends Observable,
    T4 extends Observable,
    T5 extends Observable
  >(
    operator1: Operator<Observable<TElement, TTraits>, T1>,
    operator2: Operator<T1, T2>,
    operator3: Operator<T2, T3>,
    operator4: Operator<T3, T4>,
    operator5: Operator<T4, T5>
  ): T5;
  pipe<
    T1 extends Observable,
    T2 extends Observable,
    T3 extends Observable,
    T4 extends Observable,
    T5 extends Observable,
    T6 extends Observable
  >(
    operator1: Operator<Observable<TElement, TTraits>, T1>,
    operator2: Operator<T1, T2>,
    operator3: Operator<T2, T3>,
    operator4: Operator<T3, T4>,
    operator5: Operator<T4, T5>,
    operator6: Operator<T5, T6>
  ): T6;
  pipe<
    T1 extends Observable,
    T2 extends Observable,
    T3 extends Observable,
    T4 extends Observable,
    T5 extends Observable,
    T6 extends Observable,
    T7 extends Observable
  >(
    operator1: Operator<Observable<TElement, TTraits>, T1>,
    operator2: Operator<T1, T2>,
    operator3: Operator<T2, T3>,
    operator4: Operator<T3, T4>,
    operator5: Operator<T4, T5>,
    operator6: Operator<T5, T6>,
    operator7: Operator<T6, T7>
  ): T7;
  pipe<
    T1 extends Observable,
    T2 extends Observable,
    T3 extends Observable,
    T4 extends Observable,
    T5 extends Observable,
    T6 extends Observable,
    T7 extends Observable,
    T8 extends Observable
  >(
    operator1: Operator<Observable<TElement, TTraits>, T1>,
    operator2: Operator<T1, T2>,
    operator3: Operator<T2, T3>,
    operator4: Operator<T3, T4>,
    operator5: Operator<T4, T5>,
    operator6: Operator<T5, T6>,
    operator7: Operator<T6, T7>,
    operator8: Operator<T7, T8>
  ): T8;
}

type ObservableElement<TObservable> = TObservable extends Observable<
  infer TElement,
  Traits
>
  ? TElement
  : never;
type ObservableTraits<TObservable> = TObservable extends Observable<
  unknown,
  infer TTraits
>
  ? TTraits
  : never;

export type Operator<TSource extends Observable, TResult extends Observable> = (
  source: TSource
) => TResult;

export const EMPTY = root.EMPTY as Observable<
  never,
  {
    async: false;
    complete: true;
    error: undefined;
    max: 0;
    min: 0;
  }
>;

export const NEVER = root.NEVER as Observable<
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
): Observable<
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
): Observable<
  T,
  {
    async: true;
    complete: undefined;
    error: undefined;
    max: 1;
    min: 1;
  }
>;
export function from<O extends root.ObservableInput<unknown>>(
  input: O
): Observable<
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

export function ignoreElements<TSource extends Observable>() {
  return operators.ignoreElements() as Operator<
    TSource,
    Observable<never, WithMax<WithMin<ObservableTraits<TSource>, 0>, 0>>
  >;
}

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
      min: 1;
    }
  >;
}

export function map<TSource extends Observable, TProjectElement>(
  project: (
    value: ObservableElement<TSource>,
    index: number
  ) => TProjectElement,
  thisArg?: any
) {
  return operators.map(project, thisArg) as Operator<
    TSource,
    Observable<TProjectElement, ObservableTraits<TSource>>
  >;
}

export function of<A extends unknown[]>(...args: A) {
  return root.of(...args) as Observable<
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

export function skip<TSource extends Observable>(
  count: 1
): Operator<
  TSource,
  Observable<
    ObservableElement<TSource>,
    WithMax<
      ObservableTraits<TSource>,
      Subtract<ObservableTraits<TSource>["max"], 1>
    >
  >
>;
export function skip<TSource extends Observable>(
  count: number
): Operator<TSource, TSource>;
export function skip<TSource extends Observable>(count: number) {
  return operators.skip<ObservableElement<TSource>>(count);
}

export function startWith<TSource extends Observable, TValueElement>(
  value: TValueElement
) {
  return operators.startWith(value) as Operator<
    TSource,
    Observable<
      ObservableElement<TSource> | TValueElement,
      WithMax<
        ObservableTraits<TSource>,
        Add<ObservableTraits<TSource>["max"], 1>
      >
    >
  >;
}

export function take<TSource extends Observable>(
  count: 1
): Operator<
  TSource,
  Observable<
    ObservableElement<TSource>,
    WithMax<ObservableTraits<TSource>, Min<ObservableTraits<TSource>["max"], 1>>
  >
>;
export function take<TSource extends Observable>(
  count: number
): Operator<TSource, TSource>;
export function take<TSource extends Observable>(count: number) {
  return operators.take<ObservableElement<TSource>>(count);
}

export function throwError(error: any, scheduler?: root.SchedulerLike) {
  return root.throwError(error, scheduler) as Observable<
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
): Observable<
  number,
  {
    async: true;
    complete: true;
    error: undefined;
    max: 1;
    min: 1;
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
    max: undefined;
    min: 1;
  }
>;
export function timer(
  dueTime: number | Date = 0,
  periodOrScheduler?: number | root.SchedulerLike,
  scheduler?: root.SchedulerLike
) {
  return root.timer(dueTime, periodOrScheduler, scheduler);
}
