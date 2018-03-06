<template>
  <div class="userList">
    <md-list>
      <md-list-item v-for="user in users" :key="user.uuid">
        <span class="md-subheading">{{ user.nickname }}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import getUserListService from '@/services/getUserListService';
export default {
  name: 'UserList',
  props: ['currentUser'],
  data () {
    return {
      users:[]
    }
  },
  mounted() {
    this.getUserList();

    setInterval(function () {
      this.getUserList();
    }.bind(this), 1000);  
  },
  methods: {
    async getUserList () {
      const response = await getUserListService.getUserList(this.currentUser);
      this.users = response.data;
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