/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as operators from "rxjs/operators";
import { Traits } from "../../traits";
import {
  Observable,
  ObservableElement,
  ObservableTraits,
  Operator,
} from "../Observable";

// For some reason, this conditional type effects an error:
// Property '[Symbol.iterator]' is missing in type
// Seems related to this issue: https://github.com/microsoft/TypeScript/issues/36012
// type Project<T extends readonly any[], TProjectElement> = { [K in keyof T]: TProjectElement };

type Project<T extends readonly any[], P> = T["length"] extends 0
  ? []
  : T["length"] extends 1
  ? [P]
  : T["length"] extends 2
  ? [P, P]
  : T["length"] extends 3
  ? [P, P, P]
  : T["length"] extends 4
  ? [P, P, P, P]
  : T["length"] extends 5
  ? [P, P, P, P, P]
  : T["length"] extends 6
  ? [P, P, P, P, P, P]
  : T["length"] extends 7
  ? [P, P, P, P, P, P, P]
  : T["length"] extends 8
  ? [P, P, P, P, P, P, P, P]
  : P[];

type Map<TTraits extends Traits<any>, TProjectElement> = Omit<
  TTraits,
  "max" | "min"
> & {
  max: Project<TTraits["max"], TProjectElement>;
  min: Project<TTraits["min"], TProjectElement>;
};

export function map<TSource extends Observable, TProjectElement>(
  project: (
    value: ObservableElement<TSource>,
    index: number
  ) => TProjectElement,
  thisArg?: any
) {
  return (operators.map(project, thisArg) as unknown) as Operator<
    TSource,
    Observable<TProjectElement, Map<ObservableTraits<TSource>, TProjectElement>>
  >;
}
