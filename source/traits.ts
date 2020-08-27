/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

export type Traits<T> = {
  async: boolean | undefined;
  complete: boolean | undefined;
  error: boolean | undefined;
  max: readonly T[];
  min: readonly T[];
};

export type DefaultTraits<T> = {
  async: undefined;
  complete: undefined;
  error: undefined;
  max: T[];
  min: T[];
};

export type PromiseTraits<T> = {
  async: true;
  complete: undefined;
  error: undefined;
  max: [T];
  min: [T];
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
  TTraits extends readonly Traits<unknown>[],
  TKey extends keyof Traits<unknown>
> = TTraits[number][TKey];
