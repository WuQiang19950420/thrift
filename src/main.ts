import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css/normalize.css';
import { vantRegister } from '@/globalRegister';
import Vconsole from 'vconsole';
new Vconsole();
const app = createApp(App);
vantRegister(app);
app.use(store);
app.use(router);
app.mount('#app');
// document.body.addEventListener(
//   'touchmove',
//   function (e) {
//     e.preventDefault();
//   },
//   { passive: false }
// );
