<template>
  <q-footer class="flex fixed-bottom" :class="isDarkActive ? 'q-footer-dark' : 'q-footer'">
    <q-tabs :class="!isDarkActive ? 'text-dark' : 'text-white'" indicator-color="transparent">
      <q-route-tab name="home" to="/" exact>
        <i class="las la-home"></i>
        Home
      </q-route-tab>
      <q-tab name="menu" @click="show(true)">
        <q-btn fab icon="attach_money" color="accent"/>
      </q-tab>
      <q-route-tab name="config" to="/config" exact>
        <i class="las la-tools"></i>
        Config
      </q-route-tab>
    </q-tabs>
  </q-footer>
</template>

<script>
import { QTabs, QTab, QRouteTab, QFooter } from 'quasar'
import { defineComponent, ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import { configStore } from '../store/modules/configStore'
import { contaStore } from '../store/modules/contaStore'
import useFilters from '../composables/useFilters'
export default defineComponent({
  name: 'BottomNavigation',
  components: {
    QTabs,
    QTab,
    QRouteTab,
    QFooter
  },
  setup () {
    const $root = inject('$root')

    const router = useRouter()

    const { darkMode } = configStore()
    const storeConta = contaStore()

    const isDarkActive = ref(darkMode)

    const tab = ref('home')

    const { currency } = useFilters()

    const show = () => {
      const total = currency(parseFloat(storeConta.totalList) || 0.00)
      $root.refs.modalTotal.show(total)
    }

    const irPara = (rota) => {
      router.push({ name: rota })
    }

    return {
      tab,
      isDarkActive,
      show,
      irPara
    }
  }
})
</script>

<style lang="scss" scoped>
.q-footer {
    background: #fff;
    border-top: 1px solid #ccc;
}
.q-footer-dark {
    background: var(--q-dark) !important;
    border-top: 1px solid #ccc;
}
.text-dark {
  color: var(--q-dark) !important;
  width: 100%;
}
.text-white {
  color: var(--q-white) !important;
  width: 100%;
}
.q-dialog-plugin {
  border-top-left-radius: 20px !important;
  border-top-right-radius: 20px !important;
}
</style>
