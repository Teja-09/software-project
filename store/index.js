import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";
import createPersistedState from "vuex-persistedstate";
import { fireDb } from "@/services/firebase";

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    if (process.server && process.static) return;
    if (!req.headers.cookie) return;

    const parsed = cookieparser.parse(req.headers.cookie);
    const accessTokenCookie = parsed.access_token;

    if (!accessTokenCookie) return;

    const decoded = JWTDecode(accessTokenCookie);

    if (decoded) {
      commit("SET_UID", decoded.user_id);
      fireDb
        .collection(users)
        .doc(decoded.user_id)
        .get()
        .then(function(doc) {
          if (doc.exists) {
            commit("SET_USER_DETAILS", doc.data());
          } else {
            commit("SET_USER_DETAILS", null);
          }
        });
    }
  }
};

export const plugins = [
  createPersistedState({
    paths: ["users", "course"]
  })
];
