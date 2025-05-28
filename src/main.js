import { createApp } from 'vue';
import {
  defineRule, Field, Form, ErrorMessage, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App).use(router);
app.component('FormComp', Form);
app.component('FieldComp', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
