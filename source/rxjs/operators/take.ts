/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Cardinality, Shift } from "../../cardinality";
import { Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

type Take<TTraits extends Traits<any>, TCount extends number> = Omit<
  TTraits,
  "max" | "min"
> & {
  max: Shift<TCount, TTraits["max"]>;
  min: Shift<TCount, TTraits["min"]>;
};

export function take<TSource extends Observable, TCount extends Cardinality>(
  count: TCount
): Operator<
  TSource,
  Observable<
    ObservableElement<TSource>,
    Take<ObservableTraits<TSource>, TCount>
  >
>;

export function take<TSource extends Observable>(
  count: number
): Operator<
  TSource,
  Observable<
    ObservableElement<TSource>,
    Take<ObservableTraits<TSource>, number>
  >
>;

export function take<TSource extends Observable>(count: number) {
  return operators.take<ObservableElement<TSource>>(count);
}
