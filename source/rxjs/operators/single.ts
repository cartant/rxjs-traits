/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Shift } from "../../cardinality";
import { Either, Not, Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";
import { Takeable } from "./take";

type Single<TTraits extends Traits<any>> = {
  async: TTraits["async"];
  complete: Either<TTraits["complete"], Takeable<TTraits, 1>>;
  error: Either<TTraits["error"], Not<Takeable<TTraits, 1>>>;
  max: Shift<1, TTraits["max"]>;
  min: Shift<1, TTraits["min"]>;
};

export function single<TSource extends Observable>(
  predicate?: (value: ObservableElement<TSource>) => boolean
) {
  return (operators.single(predicate) as unknown) as Operator<
    TSource,
    Observable<ObservableElement<TSource>, Single<ObservableTraits<TSource>>>
  >;
}
