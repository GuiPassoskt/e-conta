<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    this.$q.addressbarColor.set('#021354')
  }
}
</script>

<style>
#q-app{
  background: #edf3f8;
}
</style>
