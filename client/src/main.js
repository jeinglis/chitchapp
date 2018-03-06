// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import logoutService from '@/services/logoutService';
import loginService from '@/services/loginService';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  data: {
    currentUser: {
      uuid: 'initial',
      nickname: '',
      textColor: 'black'
    }
  },
  el: '#app',
  components: {
    App
  },
  template: '<App v-bind:currentUser="currentUser"/>',
  mounted() {
    this.login();
  },
  methods: {
    leaving() {
      logoutService.logout(currentUser);
      console.log('leaving');
    },
    async login() {
      const response = await loginService.login()
      console.log(response.data);
      this.currentUser.uuid = response.data.uuid;
      this.currentUser.nickname = response.data.nickname;
    }
  },
})
