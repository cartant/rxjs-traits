/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Cardinality, Drop } from "../../cardinality";
import { Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

type Skip<TTraits extends Traits<any>, TCount extends number> = {
  async: TTraits["async"];
  complete: TTraits["complete"];
  error: TTraits["error"];
  max: Drop<TCount, TTraits["max"]>;
  min: Drop<TCount, TTraits["min"]>;
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
    Skip<ObservableTraits<TSource>, number>
  >
>;

export function skip<TSource extends Observable>(count: number) {
  return operators.skip<ObservableElement<TSource>>(count);
}
