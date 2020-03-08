import Vue from "vue";
import Axios from "axios";
import App from "./App.vue";
import store from "./store";
import vSelect from "vue-select";
import ToggleButton from "vue-js-toggle-button";
import JsonViewer from "vue-json-viewer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFilter, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueNativeNotification from "vue-native-notification";

Vue.use(JsonViewer);
Vue.use(VueNativeNotification, {
  requestOnNotify: true
});
library.add(faFilter, faEye);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(ToggleButton);
Vue.component("v-select", vSelect);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
