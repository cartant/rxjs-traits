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

export function map<TSource extends Observable, TProjectElement>(
  project: (
    value: ObservableElement<TSource>,
    index: number
  ) => TProjectElement,
  thisArg?: any
) {
  return (operators.map(project, thisArg) as unknown) as Operator<
    TSource,
    Observable<TProjectElement, ObservableTraits<TSource>>
  >;
}
