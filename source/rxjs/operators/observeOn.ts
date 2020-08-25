/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

export function observeOn<TSource extends Observable>(
  scheduler: root.SchedulerLike
) {
  return operators.observeOn(scheduler) as Operator<
    TSource,
    Observable<
      ObservableElement<TSource>,
      Omit<ObservableTraits<TSource>, "async"> & {
        async: true;
      }
    >
  >;
}
