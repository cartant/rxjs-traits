/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Element, Length } from "../../cardinality";
import { Observable } from "../Observable";

export function from<O extends readonly unknown[]>(
  input: O
): Observable<
  Element<O>,
  {
    async: false;
    complete: true;
    error: undefined;
    max: Length<O>;
    min: Length<O>;
  }
>;
export function from<T>(
  input: Promise<T>
): Observable<
  T,
  {
    async: true;
    complete: undefined;
    error: undefined;
    max: 1;
    min: 1;
  }
>;
export function from<O extends root.ObservableInput<unknown>>(
  input: O
): Observable<
  root.ObservedValueOf<O>,
  {
    async: undefined;
    complete: undefined;
    error: undefined;
    max: undefined;
    min: 0;
  }
>;
export function from<O extends root.ObservableInput<unknown>>(input: O) {
  return root.from(input);
}
