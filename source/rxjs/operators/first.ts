/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

export function first<TSource extends Observable>() {
  return (operators.first() as unknown) as Operator<
    TSource,
    Observable<
      ObservableElement<TSource>,
      Omit<ObservableTraits<TSource>, "max" | "min"> & {
        max: 1;
        min: 1;
      }
    >
  >;
}
