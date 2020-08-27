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

type Filter<TTraits extends Traits<any>> = Omit<TTraits, "min"> & {
  min: [];
};

export function filter<TSource extends Observable>(
  predicate: (value: ObservableElement<TSource>) => boolean
) {
  return (operators.filter(predicate) as unknown) as Operator<
    TSource,
    Observable<ObservableElement<TSource>, Filter<ObservableTraits<TSource>>>
  >;
}
