/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Subtract } from "../../cardinality";
import { WithMax } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

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
