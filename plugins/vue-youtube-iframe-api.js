import Vue from "vue";
import VuePlayerPlugin, { Player } from "vue-youtube-iframe-api";

Vue.use(VuePlayerPlugin);
Vue.component("my-custom-name", Player);
