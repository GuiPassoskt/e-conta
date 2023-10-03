<template>
  <q-dialog ref="activeTotal" full-width>
    <q-card>
      <q-card-section class="column items-center">
        <q-avatar icon="shopping_cart"
        :color="isDarkActive ? 'dark' : 'white'"
        :text-color="isDarkActive ? 'white' : 'dark'"
        />
        <b class="q-mt-sm">Sua cestinha</b>
      </q-card-section>

      <q-card-section class="row justify-around">
        <b style="font-size:16px;">Total</b>
        <b style="font-size:16px;">{{ total }}</b>
      </q-card-section>

    </q-card>
  </q-dialog>
</template>

<script>
import { ref } from 'vue'
import { configStore } from '../../store/modules/configStore'
export default {
  setup () {
    const activeTotal = ref(true)

    const total = ref(0)

    const storeConfig = configStore()
    const isDarkActive = ref(storeConfig.darkMode)

    const show = (totalValue) => {
      activeTotal.value.show()
      total.value = totalValue
    }

    const hide = () => {
      activeTotal.value.hide()
    }

    return {
      total,
      activeTotal,
      isDarkActive,
      show,
      hide
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
