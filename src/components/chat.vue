<template>
  <div class="chat">
    <ol>
      <li v-for="message in messages" :key="message.dateTime">
        {{message.user}} - {{message.message}}&nbsp&nbsp&nbsp&nbsp&nbsp{{ message.dateTime }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  data () {
    return {
      msg: 'Messages',
      messages:[
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.01", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.02", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.03", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.04", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.05", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.06", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.07", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.08", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.09", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.00", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.15", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.20", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.01", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.02", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.03", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.04", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.05", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.06", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.07", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.08", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.09", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.00", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.15", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.20", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.01", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.02", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.03", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.04", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.05", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.06", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.07", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.08", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.09", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.00", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.15", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.20", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.01", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.02", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.03", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.04", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.05", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.06", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.07", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.08", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.09", message: "aklfilankjer"},
        {user:"James Inglis", textColor:"red", dateTime: "01/01/2018 16:24.00", message: "Hey how are you"},
        {user:"Jessica Inglis", textColor:"blue", dateTime: "01/01/2018 16:24.15", message: "I'm great"},
        {user:"Julia Inglis", textColor:"green", dateTime: "01/01/2018 16:24.20", message: "aklfilankjer"},
        ]
    }
  }
}
</script>
