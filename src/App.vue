<template>
  <div id="app">
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-primary" >
          <span class="md-title">Welcome to ChitChapp</span>
        </md-app-toolbar>

        <md-app-drawer md-permanent="clipped">
            <h1>User List</h1>
            <UserList/>
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

Vue.use(VueMaterial);

import Chat from "./components/Chat";
import UserList from "./components/UserList";
import Input from "./components/Input";

export default {
  name: "App",
  components: {
    Chat,
    UserList,
    Input
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.md-app-content {
  max-height: 70vh;
  overflow: auto;
}
.input {
    max-height: 30vh;
  overflow: auto;
}
</style>
