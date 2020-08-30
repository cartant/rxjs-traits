/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Pop } from "../../cardinality";
import { Either, Not, Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";
import { Takeable } from "./take";

type Last<TTraits extends Traits<any>> = {
  async: TTraits["async"];
  complete: TTraits["complete"];
  error: Either<TTraits["error"], Not<Takeable<TTraits, 1>>>;
  max: Pop<TTraits["max"]>;
  min: Pop<TTraits["min"]>;
};

export function last<TSource extends Observable>() {
  return (operators.last() as unknown) as Operator<
    TSource,
    Observable<ObservableElement<TSource>, Last<ObservableTraits<TSource>>>
  >;
}
