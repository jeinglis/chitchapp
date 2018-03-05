<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary" >
          <md-button class="md-raised" @click="toggleMenu" v-if="!menuVisible">
              <span class="md-caption">Active Users</span>
          </md-button>
          <span class="md-headline">Welcome to ChitChapp, {{currentUser.nickname}}</span>
        </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full" class="md-scrollbar">
        <md-toolbar class="md-secondary" md-elevation="0">
          <span class="md-subheading">Active Users</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
          <md-list>
            <md-list-item>
              <UserList/>
            </md-list-item>
          </md-list>
      </md-app-drawer>

        <md-app-content class="md-scrollbar">
          <div>
            <Chat/>
          </div>
        </md-app-content>
      </md-app>
    </div>
    <div class="input">
      <Input/>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css"; // This line here
import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';
export const SocketInstance = socketio('http://localhost:3000');

Vue.use(VueMaterial, VueSocketIO, SocketInstance);

import Chat from "./components/Chat";
import UserList from "./components/UserList";
import Input from "./components/Input";

export default {
  name: "App",
  components: {
    Chat,
    UserList,
    Input
  },
  data() {
    return {
      currentUser: {
        uuid: "test-uuid",
        nickname: "James Inglis",
        textColor: "red"
      },
      menuVisible: true
    };
  },
  methods: {
    toggleMenu: function toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-app-content {
  max-height: 70vh;
  overflow: auto;
}
.md-app-drawer {
  max-height: 70vh;
  overflow: auto;
}
.input {
  max-height: 30vh;
  overflow: auto;
}
</style>
