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

export function mergeMap<
  TSource extends Observable,
  TProjectInput extends root.ObservableInput<unknown>
>(
  project: (value: ObservableElement<TSource>, index: number) => TProjectInput,
  concurrent?: number
) {
  return operators.mergeMap(project, concurrent) as Operator<
    TSource,
    Observable<
      root.ObservedValueOf<TProjectInput>,
      {
        async: undefined;
        complete: undefined;
        error: undefined;
        max: undefined;
        min: undefined;
      }
    >
  >;
}
