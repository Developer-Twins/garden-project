import { createStore } from "vuex";

import rootMutations from "./mutations";
import rootGetters from "./getters";
import rootActions from "./actions";

const store = createStore({
  modules: {},
  state() {
    return {
      triggerPoint: (window.innerHeight / 5) * 4,
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
});
export default store;
