/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Element, Length } from "../../cardinality";
import { Observable } from "../Observable";

export function from<TInput extends readonly unknown[]>(
  input: TInput
): Observable<
  Element<TInput>,
  {
    async: false;
    complete: true;
    error: undefined;
    max: Length<TInput>;
    min: Length<TInput>;
  }
>;

export function from<TElement>(
  input: Promise<TElement>
): Observable<
  TElement,
  {
    async: true;
    complete: undefined;
    error: undefined;
    max: 1;
    min: 1;
  }
>;

export function from<TInput extends root.ObservableInput<unknown>>(
  input: TInput
): Observable<
  root.ObservedValueOf<TInput>,
  {
    async: undefined;
    complete: undefined;
    error: undefined;
    max: undefined;
    min: undefined;
  }
>;

export function from<TInput extends root.ObservableInput<unknown>>(
  input: TInput
) {
  return root.from(input);
}
