/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import { DefaultTraits, PromiseTraits, Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";
import { MergeMap } from "./mergeMap";

type ConcatMap<
  TSourceTraits extends Traits<any>,
  TInnerTraits extends Traits<any>
> = MergeMap<TSourceTraits, TInnerTraits>;

export function concatMap<
  TSource extends Observable,
  TInner extends Observable
>(
  project: (value: ObservableElement<TSource>, index: number) => TInner,
  concurrent?: number
): Operator<
  TSource,
  Observable<
    ObservableElement<TInner>,
    ConcatMap<ObservableTraits<TSource>, ObservableTraits<TInner>>
  >
>;

export function concatMap<
  TSource extends Observable,
  TInner extends Promise<unknown>
>(
  project: (value: ObservableElement<TSource>, index: number) => TInner,
  concurrent?: number
): Operator<
  TSource,
  Observable<
    root.ObservedValueOf<TInner>,
    ConcatMap<
      ObservableTraits<TSource>,
      PromiseTraits<root.ObservedValueOf<TInner>>
    >
  >
>;

export function concatMap<
  TSource extends Observable,
  TInner extends root.ObservableInput<unknown>
>(
  project: (value: ObservableElement<TSource>, index: number) => TInner,
  concurrent?: number
): Operator<
  TSource,
  Observable<
    root.ObservedValueOf<TInner>,
    ConcatMap<
      ObservableTraits<TSource>,
      DefaultTraits<root.ObservedValueOf<TInner>>
    >
  >
>;

export function concatMap<
  TSource extends Observable,
  TInner extends root.ObservableInput<unknown>
>(
  project: (value: ObservableElement<TSource>, index: number) => TInner,
  concurrent?: number
) {
  return operators.concatMap(project);
}
