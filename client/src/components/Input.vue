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
import newMessageService from '@/services/newMessageService';
export default {
  name: 'Input',
  data () {
    return {
      message: '',
    }
  },
  methods: {
    async sendMessage () {
      const response = await newMessageService.newMessage({
        message:{
          type: 'user',
          nick: 'test',
          nickColor: '#BDBDBD',
          dateTime: 'March 1st 3:25pm',
          message: this.message,
          userId: 'this-is-me',
        }
      })
      console.log(response.data);
      console.log('sendMessage was clicked', this.message)
    }
  }
}
</script>
