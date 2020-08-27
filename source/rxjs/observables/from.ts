/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Element } from "../../cardinality";
import { DefaultTraits, PromiseTraits } from "../../traits";
import { Observable } from "../Observable";

export function from<TInput extends readonly any[]>(
  input: TInput
): Observable<
  Element<TInput>,
  {
    async: false;
    complete: true;
    error: undefined;
    max: TInput;
    min: TInput;
  }
>;

export function from<TElement>(
  input: Promise<TElement>
): Observable<TElement, PromiseTraits<TElement>>;

export function from<TInput extends root.ObservableInput<unknown>>(
  input: TInput
): Observable<
  root.ObservedValueOf<TInput>,
  DefaultTraits<root.ObservedValueOf<TInput>>
>;

export function from<TInput extends root.ObservableInput<unknown>>(
  input: TInput
) {
  return root.from(input);
}
