<template>
  <div class="Input">
    <md-field>
      <md-textarea v-model="textarea" placeholder="Type a Message  ***Other Commands: /nick <new nickname>,  /nickcolor <RRGGBB>***"></md-textarea>
    </md-field>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
    }
  }
}
</script>
