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

export function filter<TSource extends Observable>(
  predicate: (value: ObservableElement<TSource>) => boolean
) {
  return operators.filter(predicate) as Operator<
    TSource,
    Observable<
      ObservableElement<TSource>,
      Omit<ObservableTraits<TSource>, "min"> & {
        min: 0;
      }
    >
  >;
}
