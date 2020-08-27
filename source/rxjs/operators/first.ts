/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

type First<TTraits extends Traits<any>> = Omit<TTraits, "max" | "min"> & {
  max: [TTraits["max"][0]];
  min: [TTraits["min"][1]];
};

export function first<TSource extends Observable>() {
  return (operators.first() as unknown) as Operator<
    TSource,
    Observable<ObservableElement<TSource>, First<ObservableTraits<TSource>>>
  >;
}
