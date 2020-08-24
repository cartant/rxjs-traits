/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

export type Cardinality = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type N = undefined;
type Argument = number | N;

type Additions = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, N],
  [2, 3, 4, 5, 6, 7, 8, 9, N, N],
  [3, 4, 5, 6, 7, 8, 9, N, N, N],
  [4, 5, 6, 7, 8, 9, N, N, N, N],
  [5, 6, 7, 8, 9, N, N, N, N, N],
  [6, 7, 8, 9, N, N, N, N, N, N],
  [7, 8, 9, N, N, N, N, N, N, N],
  [8, 9, N, N, N, N, N, N, N, N],
  [9, N, N, N, N, N, N, N, N, N]
];

type Subtractions = [
  [0, N, N, N, N, N, N, N, N, N],
  [1, 0, N, N, N, N, N, N, N, N],
  [2, 1, 0, N, N, N, N, N, N, N],
  [3, 2, 1, 0, N, N, N, N, N, N],
  [4, 3, 2, 1, 0, N, N, N, N, N],
  [5, 4, 3, 2, 1, 0, N, N, N, N],
  [6, 5, 4, 3, 2, 1, 0, N, N, N],
  [7, 6, 5, 4, 3, 2, 1, 0, N, N],
  [8, 7, 6, 5, 4, 3, 2, 1, 0, N],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

export type Add<
  TLeft extends Argument,
  TRight extends Argument
> = TLeft extends Cardinality
  ? TRight extends Cardinality
    ? Additions[TLeft][TRight]
    : N
  : N;

export type Subtract<
  TLeft extends Argument,
  TRight extends Argument
> = TLeft extends Cardinality
  ? TRight extends Cardinality
    ? Subtractions[TLeft][TRight]
    : N
  : N;

export type Max<
  TLeft extends Argument,
  TRight extends Argument
> = TLeft extends Cardinality
  ? TRight extends Cardinality
    ? Subtract<TLeft, TRight> extends N
      ? TRight
      : TLeft
    : N
  : N;

export type Min<
  TLeft extends Argument,
  TRight extends Argument
> = TLeft extends Cardinality
  ? TRight extends Cardinality
    ? Subtract<TLeft, TRight> extends N
      ? TLeft
      : TRight
    : N
  : N;

export type Element<TArrayLike> = TArrayLike extends readonly (infer TElement)[]
  ? TElement
  : never;

export type Length<TArrayLike> = TArrayLike extends readonly unknown[]
  ? number extends TArrayLike["length"]
    ? N
    : TArrayLike["length"]
  : N;
