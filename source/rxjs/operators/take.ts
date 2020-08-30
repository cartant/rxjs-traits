/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Cardinality, Less, Shift } from "../../cardinality";
import { Either, Not, Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

export type Takeable<TTraits extends Traits<any>, TCount extends number> =
  | Not<Less<TTraits["max"]["length"], TCount, boolean>>
  | Not<Less<TTraits["min"]["length"], TCount, boolean>>;

type Take<TTraits extends Traits<any>, TCount extends number> = {
  async: TTraits["async"];
  complete: Either<TTraits["complete"], Takeable<TTraits, TCount>>;
  error: TTraits["error"];
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
