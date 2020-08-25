/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Traits } from "../traits";

const traits = Symbol("traits");

export interface Observable<TElement = unknown, TTraits extends Traits = Traits>
  extends root.Observable<TElement> {
  readonly [traits]: TTraits;
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

export type ObservableElement<TObservable> = TObservable extends Observable<
  infer TElement,
  Traits
>
  ? TElement
  : never;

export type ObservableTraits<TObservable> = TObservable extends Observable<
  unknown,
  infer TTraits
>
  ? TTraits
  : never;

export type Operator<TSource extends Observable, TResult extends Observable> = (
  source: TSource
) => TResult;
