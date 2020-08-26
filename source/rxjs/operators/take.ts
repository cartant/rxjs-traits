/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Cardinality, Min } from "../../cardinality";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

export function take<TSource extends Observable, TCount extends Cardinality>(
  count: TCount
): Operator<
  TSource,
  Observable<
    ObservableElement<TSource>,
    Omit<ObservableTraits<TSource>, "max"> & {
      max: Min<ObservableTraits<TSource>["max"], TCount>;
    }
  >
>;

export function take<TSource extends Observable>(
  count: number
): Operator<TSource, TSource>;

export function take<TSource extends Observable>(count: number) {
  return operators.take<ObservableElement<TSource>>(count);
}
