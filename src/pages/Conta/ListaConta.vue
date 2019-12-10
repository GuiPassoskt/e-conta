<template>
  <div class="q-pa-md" style="350px">
    <q-list v-for="l in lista" :key="l.id">
      <q-item>
        <q-item-section>
          <q-item-label>Produto: {{l.name}}</q-item-label>
          <q-item-label>Valor: R$ {{l.amount | monetize}}</q-item-label>
          <q-item-label caption lines="2">Quantidade: {{l.quantity}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{l.date | repl_data}}</q-item-label>
          <q-btn flat dense class="q-mt-sm" color="red" @click.prevent="remove(l)">
            <i class="icofont-trash"></i>
          </q-btn>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

    </q-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getConta, removeConta } from '../../persistence/'
import { convert } from '../../utils/filters'
export default {
  mixins: [convert],
  data () {
    return {
      lista: null
    }
  },
  computed: {
    ...mapState('Conta', ['list'])
  },
  methods: {
    ...mapActions('Conta', ['dropConta']),
    async remove (item) {
      await removeConta(item)
      await this.dropConta(item)
      this.lista = await getConta()
    }
  },
  mounted () {
    const listx = getConta()
    this.lista = listx
  }
}
</script>

<style lang="scss" scoped>
.q-item {
  background:#fff;
  border-radius: 6px;
  box-shadow: 0px 1px 3px #808080;
}
</style>
