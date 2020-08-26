/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import {
  All,
  DefaultTraits,
  PromiseTraits,
  Some,
  Traits,
  Union,
} from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

export type MergeTraits<
  TSourceTraits extends Traits,
  TInnerTraits extends Traits
> = {
  async: Some<Union<[TSourceTraits, TInnerTraits], "async">>;
  complete: All<Union<[TSourceTraits, TInnerTraits], "complete">>;
  error: Some<Union<[TSourceTraits, TInnerTraits], "error">>;
  max: number;
  min: number;
};

export function mergeMap<TSource extends Observable, TInner extends Observable>(
  project: (value: ObservableElement<TSource>, index: number) => TInner,
  concurrent?: number
): Operator<
  TSource,
  Observable<
    ObservableElement<TInner>,
    MergeTraits<ObservableTraits<TSource>, ObservableTraits<TInner>>
  >
>;

export function mergeMap<
  TSource extends Observable,
  TInner extends Promise<unknown>
>(
  project: (value: ObservableElement<TSource>, index: number) => TInner,
  concurrent?: number
): Operator<
  TSource,
  Observable<
    root.ObservedValueOf<TInner>,
    MergeTraits<ObservableTraits<TSource>, PromiseTraits>
  >
>;

export function mergeMap<
  TSource extends Observable,
  TInner extends root.ObservableInput<unknown>
>(
  project: (value: ObservableElement<TSource>, index: number) => TInner,
  concurrent?: number
): Operator<
  TSource,
  Observable<
    root.ObservedValueOf<TInner>,
    MergeTraits<ObservableTraits<TSource>, DefaultTraits>
  >
>;

export function mergeMap<
  TSource extends Observable,
  TInner extends root.ObservableInput<unknown>
>(
  project: (value: ObservableElement<TSource>, index: number) => TInner,
  concurrent?: number
) {
  return operators.mergeMap(project, concurrent);
}
