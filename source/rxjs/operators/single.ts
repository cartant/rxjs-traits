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

type Single<TTraits extends Traits<any>> = Omit<TTraits, "max" | "min"> & {
  max: [TTraits["max"][number]];
  min: [TTraits["min"][number]];
};

export function single<TSource extends Observable>(
  predicate?: (value: ObservableElement<TSource>) => boolean
) {
  return (operators.single(predicate) as unknown) as Operator<
    TSource,
    Observable<ObservableElement<TSource>, Single<ObservableTraits<TSource>>>
  >;
}
