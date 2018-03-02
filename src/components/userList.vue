<template>
  <div class="userList">
    <ul>
      <li v-for="user in users" :key="user.name">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      users:[
        {name:"James Inglis", textColor:"red"},
        {name:"Jessica Inglis", textColor:"blue"},
        {name:"Julia Inglis", textColor:"pink"},
        {name:"Finn Inglis", textColor:"green"},
        {name:"Willow Inglis", textColor:"black"}
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userList {
  align-content: center;
  flex:1;
}
p {
  align-content: center;
}
</style>