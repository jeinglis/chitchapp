<template>
  <div class="Input">
    <md-field>
      <md-textarea 
        v-model="message" 
        placeholder="Type a Message  ***Other Commands: /nick <new nickname>,  /nickcolor <RRGGBB>***">
      </md-textarea>
      <md-button class="md-fab md-fab-bottom-right md-primary" @click="sendMessage">
        
        <md-icon>send</md-icon>
      </md-button>
    </md-field>

  </div>
</template>

<script>
import newMessageService from "@/services/newMessageService";
import moment from "moment";
export default {
  name: "Input",
  props: ["currentUser"],
  data() {
    return {
      message: ""
    };
  },
  methods: {
    async sendMessage() {
      if (this.message.startsWith("/nickcolor")) {
        this.currentUser.nicknameColor = this.message.substr(11);
        console.log(`in /nickcolor:${this.currentUser.nicknameColor}|`)
        this.message = "";
      } else if (this.message.startsWith("/nick")) {
        console.log('in /nick')
        this.currentUser.nickname = this.message.substr(6);
        this.message = "";
      } else {
        const response = await newMessageService.newMessage({
          message: {
            type: "user",
            nickname: this.currentUser.nickname,
            nicknameColor: this.currentUser.nicknameColor,
            dateTime: moment()
              .local()
              .format(" h:mm:ss a - MMMM Do YYYY"),
            message: this.message,
            userId: this.currentUser.uuid
          }
        });
      }
      this.message = "";
    }
  }
};
</script>
