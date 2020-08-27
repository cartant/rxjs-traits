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

type Last<TTraits extends Traits<any>> = Omit<TTraits, "max" | "min"> & {
  max: [TTraits["max"][number]];
  min: [TTraits["min"][number]];
};

export function last<TSource extends Observable>() {
  return (operators.last() as unknown) as Operator<
    TSource,
    Observable<ObservableElement<TSource>, Last<ObservableTraits<TSource>>>
  >;
}
