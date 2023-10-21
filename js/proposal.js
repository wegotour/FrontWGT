import data from "../json/isi.json" assert { type: "json" };
import { setInner } from "https://jscroot.github.io/element/croot.js";

setInner("deskripsi", data.deskripsi);
setInner("isideskripsi", data.isideskripsi);
setInner("latarbelakang", data.latarbelakang);
setInner("isilatarbelakang", data.isilatarbelakang);
setInner("tujuan", data.tujuan);
setInner("isitujuan", data.isitujuan);
setInner("manfaat", data.manfaat);
setInner("isimanfaat", data.isimanfaat);