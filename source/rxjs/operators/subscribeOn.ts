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

type SubscribeOn<TTraits extends Traits<any>> = {
  async: true;
  complete: TTraits["complete"];
  error: TTraits["error"];
  max: TTraits["max"];
  min: TTraits["min"];
};

export function subscribeOn<TSource extends Observable>(
  scheduler: root.SchedulerLike
) {
  return (operators.subscribeOn(scheduler) as unknown) as Operator<
    TSource,
    Observable<
      ObservableElement<TSource>,
      SubscribeOn<ObservableTraits<TSource>>
    >
  >;
}
