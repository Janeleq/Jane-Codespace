import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/router'
import VueTyperPlugin from 'vue-typer'
// import views 
import Home from "./views/Home"
// import Calendar from './views/Calendar';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueTyperPlugin)