import cover from "../json/cover.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

console.log(`${cover.title}`);

setInner("title", cover.title);

setInner("subtitle", cover.subtitle);
