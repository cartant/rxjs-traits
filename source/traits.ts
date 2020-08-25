/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { Cardinality } from "./cardinality";

export type Traits = {
  async: true | false | undefined;
  complete: true | false | undefined;
  error: true | false | undefined;
  max: Cardinality | undefined;
  min: Cardinality | undefined;
};

export type DefaultTraits = {
  async: undefined;
  complete: undefined;
  error: undefined;
  max: undefined;
  min: 0;
};

export type All<TUnion extends true | false | undefined> = Exclude<
  TUnion,
  true
> extends never
  ? true
  : Exclude<TUnion, true | false> extends never
  ? false
  : undefined;

export type AsUnion<
  TTraits extends Traits[],
  TKey extends keyof Traits
> = TTraits[number][TKey];

export type Some<TUnion extends true | false | undefined> = Exclude<
  TUnion,
  false | undefined
> extends never
  ? Exclude<TUnion, false> extends false
    ? false
    : undefined
  : true;
