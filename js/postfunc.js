import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url =
    "https://asia-southeast2-fahad-402509.cloudfunctions.net/gcfproyekdp";
  let tokenkey = "token";
  let tokenvalue =
    "719af54ce9b1fe49ce67e44600dcc7a496be9b5fc243e1e26a2fd36fb355c0490cdc615519e70986f9821233fabe8e91ba3cc36486242a19801581d7c83fda5e";
  let datainjson = {
    username: getValue("username"),
    password: getValue("password"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}
function responseData(result) {
  setInner("pesan", result.message);
  setCookieWithExpireHour("token", result.token, 2);
}
