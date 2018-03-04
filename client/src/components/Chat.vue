<template>
  <div class="chat">
    <md-list class="md-double-line" v-for="message in messages" :key="message.dateTime">
      <md-list-item>
        <md-avatar>
          <md-icon>person</md-icon>
        </md-avatar>
        <div class="md-list-item-text">
          <md-field>
            <b>{{message.user}} </b>
            <i>{{message.dateTime}}</i>
          </md-field>
          <p>{{message.message}}</p>
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
      msg: "Messages",
      messages: [
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        },
        {
          user: "James Inglis",
          textColor: "red",
          dateTime: "March 1st 3:25pm",
          message: "Hey how are you"
        },
        {
          user: "Jessica Inglis",
          textColor: "blue",
          dateTime: "March 1st 3:25pm",
          message: "I'm great"
        },
        {
          user: "Julia Inglis",
          textColor: "green",
          dateTime: "March 1st 3:25pm",
          message: "aklfilankjer"
        }
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