import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/index.scss';
import registerBaseComponent from '@/utils/registerBaseComponent';

registerBaseComponent(Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
