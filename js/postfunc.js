import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url =
    "https://us-central1-fahad-402509.cloudfunctions.net/gcf1214015";
  let tokenkey = "token";
  let tokenvalue =
    "f54f4d0a47b0508a70a76ca2111a475226419ea28ff2cb35b5e05add6688da5f0f37c774331dbb57b2fc6d838847d4cb108b1af250162cd28767530a61622b1c";
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
