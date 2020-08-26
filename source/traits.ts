/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { Cardinality } from "./cardinality";

export type Traits = {
  async: boolean | undefined;
  complete: boolean | undefined;
  error: boolean | undefined;
  max: Cardinality | undefined;
  min: Cardinality | undefined;
};

export type DefaultTraits = {
  async: undefined;
  complete: undefined;
  error: undefined;
  max: undefined;
  min: undefined;
};

export type PromiseTraits = {
  async: true;
  complete: undefined;
  error: undefined;
  max: undefined;
  min: undefined;
};

export type All<TUnion extends boolean | undefined> = undefined extends TUnion
  ? undefined
  : false extends TUnion
  ? false
  : true;

export type Some<TUnion extends boolean | undefined> = true extends TUnion
  ? true
  : undefined extends TUnion
  ? undefined
  : false;

export type Union<
  TTraits extends Traits[],
  TKey extends keyof Traits
> = TTraits[number][TKey];
