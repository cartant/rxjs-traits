/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";
import { MergeTraits } from "./mergeMap";

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
    MergeTraits<ObservableTraits<TSource>, ObservableTraits<TInner>>
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
    MergeTraits<
      ObservableTraits<TSource>,
      {
        async: true;
        complete: undefined;
        error: undefined;
        max: undefined;
        min: undefined;
      }
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
    MergeTraits<
      ObservableTraits<TSource>,
      {
        async: undefined;
        complete: undefined;
        error: undefined;
        max: undefined;
        min: undefined;
      }
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
