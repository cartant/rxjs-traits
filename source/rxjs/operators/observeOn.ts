/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import * as operators from "rxjs/operators";
import { Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

type ObserveOn<TTraits extends Traits<any>> = Omit<TTraits, "async"> & {
  async: true;
};

export function observeOn<TSource extends Observable>(
  scheduler: root.SchedulerLike
) {
  return (operators.observeOn(scheduler) as unknown) as Operator<
    TSource,
    Observable<ObservableElement<TSource>, ObserveOn<ObservableTraits<TSource>>>
  >;
}
