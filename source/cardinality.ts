/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

export type Cardinality = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type N = number;

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

// prettier-ignore
export type Drop<TCount extends number, T extends readonly unknown[]> = Less<
  T["length"],
  TCount
> extends true
  ? []
  : TCount extends 0
  ? T
  : TCount extends 1
  ? Func<T> extends (a: any, ...args: infer R) => void ? R : never
  : TCount extends 2
  ? Func<T> extends (a: any, b: any, ...args: infer R) => void ? R : never
  : TCount extends 3
  ? Func<T> extends (a: any, b: any, c: any, ...args: infer R) => void ? R : never
  : TCount extends 4
  ? Func<T> extends (a: any, b: any, c: any, d: any, ...args: infer R) => void ? R : never
  : TCount extends 5
  ? Func<T> extends (a: any, b: any, c: any, d: any, e:any, ...args: infer R) => void ? R : never
  : TCount extends 6
  ? Func<T> extends (a: any, b: any, c: any, d: any, e:any, f: any, ...args: infer R) => void ? R : never
  : TCount extends 7
  ? Func<T> extends (a: any, b: any, c: any, d: any, e:any, f: any, g: any, ...args: infer R) => void ? R : never
  : TCount extends 8
  ? Func<T> extends (a: any, b: any, c: any, d: any, e:any, f: any, g: any, h: any, ...args: infer R) => void ? R : never
  : TCount extends 9
  ? Func<T> extends (a: any, b: any, c: any, d: any, e:any, f: any, g: any, h: any, i: any, ...args: infer R) => void ? R : never
  : T[number][];

export type Element<TArrayLike> = TArrayLike extends readonly (infer TElement)[]
  ? TElement
  : never;

export type Fill<TCount extends number, T> = TCount extends 0
  ? []
  : TCount extends 1
  ? [T]
  : TCount extends 2
  ? [T, T]
  : TCount extends 3
  ? [T, T, T]
  : TCount extends 4
  ? [T, T, T, T]
  : TCount extends 5
  ? [T, T, T, T, T]
  : TCount extends 6
  ? [T, T, T, T, T, T]
  : TCount extends 7
  ? [T, T, T, T, T, T, T]
  : TCount extends 8
  ? [T, T, T, T, T, T, T, T]
  : TCount extends 9
  ? [T, T, T, T, T, T, T, T, T]
  : T[];

type Func<TArgs extends readonly unknown[]> = (...args: TArgs) => void;

export type Less<
  TLeft extends number,
  TRight extends number
> = TLeft extends Cardinality
  ? TRight extends Cardinality
    ? N extends Subtract<TLeft, TRight>
      ? true
      : false
    : false
  : false;

export type Shift<TCount extends number, T extends readonly unknown[]> = Less<
  T["length"],
  TCount
> extends true
  ? T
  : TCount extends 0
  ? []
  : TCount extends 1
  ? [T[0]]
  : TCount extends 2
  ? [T[0], T[1]]
  : TCount extends 3
  ? [T[0], T[1], T[2]]
  : TCount extends 4
  ? [T[0], T[1], T[2], T[3]]
  : TCount extends 5
  ? [T[0], T[1], T[2], T[3], T[4]]
  : TCount extends 6
  ? [T[0], T[1], T[2], T[3], T[4], T[5]]
  : TCount extends 7
  ? [T[0], T[1], T[2], T[3], T[4], T[5], T[6]]
  : TCount extends 8
  ? [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]]
  : TCount extends 9
  ? [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]]
  : T[number][];

export type Subtract<
  TLeft extends number,
  TRight extends number
> = TLeft extends Cardinality
  ? TRight extends Cardinality
    ? Subtractions[TLeft][TRight]
    : N
  : N;

export type Unshift<
  TElements extends readonly unknown[],
  TArrayLike extends readonly unknown[]
> = [...TElements, ...TArrayLike];
