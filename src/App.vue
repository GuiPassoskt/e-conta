<template>
  <div id="q-app" :style="{background: theme.q_app}">
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState('Config', ['theme'])
  },
  created () {
    this.$q.addressbarColor.set('#021354')
  }
}
</script>

<style>
/* #q-app{
  background: #edf3f8;
} */
</style>
