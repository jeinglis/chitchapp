<template>
  <div class="chat">
    <md-list class="md-double-line" >
      <md-list-item v-for="message in messages" :key="message.dateTime">
        <md-avatar>
          <md-icon v-if="message.type === 'system'"  v-bind:style="{ color: message.nickColor }">info</md-icon>
          <md-icon v-else-if="message.nickId === currentnickId"  class="md-primary">person</md-icon>
          <md-icon v-else v-bind:style="{ color: 'white' }">person</md-icon>
        </md-avatar>
        <div class="md-list-item-text">
          <md-field>
            <b v-bind:style="{ color: message.nickColor}">{{message.nick}} </b>
            <i>{{message.dateTime}}</i>
          </md-field>
          <span v-if="message.type === 'system'" v-bind:style="{ color: message.nickColor}">{{message.message}}</span>
          <span v-else v-bind:style="{ color: 'white'}">{{message.message}}</span>
        </div>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      currentnickId: "test-me",
      messages: [
        {
          type:"user",
          nick: "James Inglis",
          nickColor: "white",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you",
          nickId: "test-me"
        },
        {
          type:"system",
          nick: "Notification",
          nickColor: "#BDBDBD",
          dateTime: "March 1st 3:25pm",
          message: "beep boop this is a system message",
          nickId: ""
        },
        {
          type:"user",
          nick: "Jessica Inglis",
          nickColor: "#4DD0E1",
          dateTime: "March 1st 3:25pm",
          message: "I'm great",
          nickId: "test-not-me"
        },
        {
          type:"user",
          nick: "Julia Inglis",
          nickColor: "#F06292",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          type:"user",
          nick: "James Inglis",
          nickColor: "white",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you",
          nickId: "test-me"        
        },
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style-type: none;
}
</style>