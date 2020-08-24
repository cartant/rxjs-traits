/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Observable, ObservableTraits, Operator } from "../Observable";

export function ignoreElements<TSource extends Observable>() {
  return operators.ignoreElements() as Operator<
    TSource,
    Observable<
      never,
      Omit<ObservableTraits<TSource>, "max" | "min"> & {
        max: 0;
        min: 0;
      }
    >
  >;
}
