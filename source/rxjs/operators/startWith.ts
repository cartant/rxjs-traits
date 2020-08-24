/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Add } from "../../cardinality";
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
      Omit<ObservableTraits<TSource>, "max" | "min"> & {
        max: Add<ObservableTraits<TSource>["max"], 1>;
        min: Add<ObservableTraits<TSource>["min"], 1>;
      }
    >
  >;
}
