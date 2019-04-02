import { defineCustomElements as defineGravatarWc } from "gravatar-wc/dist/loader";
import vue from "vue";

import AppVue from "./App.vue";

defineGravatarWc(window);

vue.config.productionTip = false;
vue.config.ignoredElements = ["gravatar-wc"];

new vue({
  render: h => h(AppVue),
}).$mount("#app");
