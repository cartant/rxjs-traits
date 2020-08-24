/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Add } from "../../cardinality";
import { WithMax } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

export function startWith<TSource extends Observable, TValueElement>(
  value: TValueElement
) {
  return operators.startWith(value) as Operator<
    TSource,
    Observable<
      ObservableElement<TSource> | TValueElement,
      WithMax<
        ObservableTraits<TSource>,
        Add<ObservableTraits<TSource>["max"], 1>
      >
    >
  >;
}
