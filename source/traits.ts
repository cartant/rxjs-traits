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
