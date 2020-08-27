/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Unshift } from "../../cardinality";
import { Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

type StartWith<TTraits extends Traits<any>, TValueElement> = Omit<
  TTraits,
  "max" | "min"
> & {
  max: Unshift<[TValueElement], TTraits["max"]>;
  min: Unshift<[TValueElement], TTraits["min"]>;
};

export function startWith<TSource extends Observable, TValueElement>(
  value: TValueElement
) {
  return (operators.startWith(value) as unknown) as Operator<
    TSource,
    Observable<
      ObservableElement<TSource> | TValueElement,
      StartWith<ObservableTraits<TSource>, TValueElement>
    >
  >;
}
