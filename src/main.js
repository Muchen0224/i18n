import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import zh from './i18n/zh' 
import en from './i18n/en' 

Vue.use(VueI18n)

let locale = 'en';

Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: 'en',
  messages: {
    'zh': zh,
    'en': en
  }
});

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
