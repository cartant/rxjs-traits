/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import { Cardinality } from "./cardinality";

export type Traits = {
  async: true | false | undefined;
  complete: true | false | undefined;
  error: true | undefined;
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

export type WithAsync<
  TTraits extends Traits,
  TAsync extends Traits["async"]
> = Omit<TTraits, "async"> & { async: TAsync };

export type WithComplete<
  TTraits extends Traits,
  TComplete extends Traits["complete"]
> = Omit<TTraits, "complete"> & { complete: TComplete };

export type WithError<
  TTraits extends Traits,
  TError extends Traits["error"]
> = Omit<TTraits, "error"> & { error: TError };

export type WithMax<TTraits extends Traits, TMax extends Traits["max"]> = Omit<
  TTraits,
  "max"
> & { max: TMax };

export type WithMin<TTraits extends Traits, TMin extends Traits["min"]> = Omit<
  TTraits,
  "min"
> & { min: TMin };
