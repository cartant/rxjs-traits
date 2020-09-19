# rxjs-traits

This repo contains the RxJS Traits proof-of-concept that [Moshe Kolodny](https://github.com/kolodny) and I have developed - and about which we spoke at RxJS Live London 2020 ([slides](https://2020-09-18-rxjs-traits.vercel.app/)).

The repo contains a subset of the RxJS API with the intention that the subset be imported from `"rxjs-traits"` instead of `"rxjs"`. For example:

```ts
import { of } from "rxjs-traits";
import { take } from "rxjs-traits/operators";

const source = of("a", "b", "c");
const taken = source.pipe(take(1));
```

The package is intended to be used in conjunction with the ESLint rules in [`eslint-plugin-rxjs-traits`](https://github.com/cartant/eslint-plugin-rxjs-traits).