/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

export type Traits<T> = {
  async: boolean;
  complete: boolean;
  error: boolean;
  max: readonly T[];
  min: readonly T[];
};

export type PromiseTraits<T> = {
  async: true;
  complete: boolean;
  error: boolean;
  max: [T];
  min: [T];
};

export type Both<
  TLeft extends boolean,
  TRight extends boolean,
  TMaybe = boolean
> = [TLeft] extends [false]
  ? false
  : [TRight] extends [false]
  ? false
  : [TLeft | TRight] extends [true]
  ? true
  : TMaybe;

export type Either<
  TLeft extends boolean,
  TRight extends boolean,
  TMaybe = boolean
> = [TLeft] extends [true]
  ? true
  : [TRight] extends [true]
  ? true
  : [TLeft | TRight] extends [false]
  ? false
  : TMaybe;

export type Not<TUnion extends boolean> = TUnion extends true ? false : true;

export type Union<
  TTraits extends readonly Traits<unknown>[],
  TKey extends keyof Traits<unknown>
> = TTraits[number][TKey];
