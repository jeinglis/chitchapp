<template>
  <div class="userList">
    <md-list>
      <md-list-item v-for="user in users" :key="user.name">
        <span class="md-subheading">{{ user.name }}</span>
      </md-list-item>
    </md-list>
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
        {name:"Willow Inglis", textColor:"black"},
        ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style-type: none;
}
</style>