/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Cardinality, Floor, Min, Subtract } from "../../cardinality";
import { Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

type Skip<
  TTraits extends Traits,
  TSkip extends number
> = TTraits["max"] extends undefined
  ? TTraits
  : Omit<TTraits, "max" | "min"> & {
      max: Floor<Subtract<TTraits["max"], TSkip>>;
      min: Min<TTraits["min"], Floor<Subtract<TTraits["max"], TSkip>>>;
    };

export function skip<TSource extends Observable, TCount extends Cardinality>(
  count: TCount
): Operator<
  TSource,
  Observable<
    ObservableElement<TSource>,
    Skip<ObservableTraits<TSource>, TCount>
  >
>;

export function skip<TSource extends Observable>(
  count: number
): Operator<
  TSource,
  Observable<
    ObservableElement<TSource>,
    Omit<ObservableTraits<TSource>, "max" | "min"> & {
      max: undefined;
      min: undefined;
    }
  >
>;

export function skip<TSource extends Observable>(count: number) {
  return operators.skip<ObservableElement<TSource>>(count);
}
