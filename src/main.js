import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon } from "oh-vue-icons";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import "./assets/styles/main.scss";

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.component("VueDatePicker", VueDatePicker);
app.use(router);
app.mount("#app");
