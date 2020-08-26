/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

export type Traits = {
  async: boolean | undefined;
  complete: boolean | undefined;
  error: boolean | undefined;
  max: number;
  min: number;
};

export type DefaultTraits = {
  async: undefined;
  complete: undefined;
  error: undefined;
  max: number;
  min: number;
};

export type PromiseTraits = {
  async: true;
  complete: undefined;
  error: undefined;
  max: number;
  min: number;
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
