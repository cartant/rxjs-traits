/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Traits } from "../../traits";
import { Observable, ObservableTraits, Operator } from "../Observable";

type IgnoreElements<TTraits extends Traits<any>> = Omit<
  TTraits,
  "max" | "min"
> & {
  max: [];
  min: [];
};

export function ignoreElements<TSource extends Observable>() {
  return (operators.ignoreElements() as unknown) as Operator<
    TSource,
    Observable<never, IgnoreElements<ObservableTraits<TSource>>>
  >;
}
