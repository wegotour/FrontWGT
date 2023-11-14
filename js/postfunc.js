import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  let target_url =
    "https://asia-southeast2-wegotour-403712.cloudfunctions.net/wegotourlogin";
  let tokenkey = "token";
  let tokenvalue =
    "34984c89d5553bd07ced0b9ed6306cc010418a1758fae39e92bfce521ee7b44e";
  let datainjson = {
    username: getValue("username"),
    password: getValue("password"),
  }

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}
function responseData(result) {
  setInner("pesan", result.message);
  setCookieWithExpireHour("token", result.token, 2);

  if (result.message === "Selamat Datang") {
    // Jika pesan adalah "Selamat Datang", arahkan ke halaman dashboard.
    window.location.href = "dashboarduser.html"; // Gantilah "error.html" dengan halaman error yang sesuai.
  } else if (result.message === "Password Salah") {
    // Jika pesan kesalahan adalah "Password salah", arahkan ke halaman error.
    window.location.href = "404.html";
  } else {
    // Penanganan lainnya (pesan kesalahan lainnya)
    window.location.href = "index.html";
  }
}
