/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Shift } from "../../cardinality";
import { Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

type First<TTraits extends Traits<any>> = {
  async: TTraits["async"];
  complete: TTraits["complete"];
  error: TTraits["error"];
  max: Shift<1, TTraits["max"]>;
  min: Shift<1, TTraits["min"]>;
};

export function first<TSource extends Observable>() {
  return (operators.first() as unknown) as Operator<
    TSource,
    Observable<ObservableElement<TSource>, First<ObservableTraits<TSource>>>
  >;
}
