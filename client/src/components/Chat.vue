<template>
  <div class="chat">
    <md-list class="md-double-line" >
      <md-list-item v-for="message in messages" :key="message.dateTime">
        <md-avatar>
          <md-icon v-if="message.type === 'system'"  v-bind:style="{ color: message.nicknameColor }">info</md-icon>
          <md-icon v-else-if="message.userId === currentUser.uuid"  class="md-primary">person</md-icon>
          <md-icon v-else v-bind:style="{ color: 'white' }">person</md-icon>
        </md-avatar>
        <div class="md-list-item-text">
          <md-field>
            <b v-bind:style="{ color: message.nicknameColor}">{{message.nickname}} </b>
            <i>{{message.dateTime}}</i>
          </md-field>
          <span v-if="message.type === 'system'" v-bind:style="{ color: message.nicknameColor}">{{message.message}}</span>
          <span v-else v-bind:style="{ color: 'white'}">{{message.message}}</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import getMessagesService from '@/services/getMessagesService';
export default {
  name: "Chat",
  props: ['currentUser'],
  data() {
    return {
      messages: []
    };
  },
  mounted() {
    this.getMessages();

    setInterval(function () {
      this.getMessages();
    }.bind(this), 1000);  
  },
  methods: {
    async getMessages () {
      const response = await getMessagesService.getMessages()
      this.messages = response.data.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style-type: none;
}
</style>