import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { createApp } from "vue";
import App from "./App.vue";
import store from "../src/store/index"

// import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
// app.use(router);
app.use(store)
app.mount("#app");
