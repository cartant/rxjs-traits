/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/rxjs-traits
 */

import * as root from "rxjs";
import { Element } from "../../cardinality";
import { Observable } from "../Observable";

export function of<A extends any[]>(...args: A) {
  return root.of(...args) as Observable<
    Element<A>,
    {
      async: false;
      complete: true;
      error: undefined;
      max: A;
      min: A;
    }
  >;
}
