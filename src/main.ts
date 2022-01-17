import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';
import { vantRegister } from '@/globalRegister';
// import Vconsole from 'vconsole';
// new Vconsole();
const app = createApp(App);
vantRegister(app);
app.use(store);
app.use(router);
app.mount('#app');
document.body.addEventListener(
  'touchmove',
  function (e) {
    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  },
  { passive: false }
); //passive 参数不能省略，用来兼容ios和android
