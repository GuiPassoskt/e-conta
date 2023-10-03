<template>
  <div id="q-app">
    <router-view />
    <ModalTotal ref="modalTotal" />
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, onMounted, watchEffect, getCurrentInstance, provide } from 'vue'
import { configStore } from './store/modules/configStore'
import ModalTotal from '@/components/modal/ModalTotal'
export default defineComponent({
  name: 'App',
  components: {
    ModalTotal
  },
  setup () {
    const app = getCurrentInstance()

    const $q = useQuasar()
    const { darkMode } = configStore()

    watchEffect(() => {
      $q.dark.set(darkMode)
    })

    provide('$root', app.root)

    onMounted(() => {
      $q.addressbarColor.set('#021354')
    })
    return {

    }
  }
})
</script>

<style>
/* #q-app{
  background: #edf3f8;
} */
</style>
