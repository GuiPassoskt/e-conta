<template>
  <div class="q-pa-md" style="350px">
    <q-list v-for="l in list" :key="l.id">
      <q-item :style="theme.card">
        <q-item-section>
          <q-item-label>Produto: {{l.name}}</q-item-label>
          <q-item-label>Valor: R$ {{l.amount | monetize}}</q-item-label>
          <q-item-label :style="{color:theme.card.color}" caption lines="2">Quantidade: {{l.quantity}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label :style="{color: theme.card.color}" caption>{{l.date | repl_data}}</q-item-label>
          <q-btn flat dense class="q-mt-sm" color="red" @click.prevent="remove(l)">
            <i class="las la-trash" :style="{color: theme.card.icons}"></i>
          </q-btn>
        </q-item-section>
      </q-item>

      <q-separator spaced inset />

    </q-list>
    <div style="height:100px"></div>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="negative" text-color="white" />
          <span class="q-ml-sm">Deseja excluir este item?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="dark" v-close-popup />
          <q-btn flat label="Excluir" color="negative" @click="removeConfirm()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { convert } from '../../utils/filters'
export default {
  mixins: [convert],
  data () {
    return {
      count: 0,
      confirm: false,
      itemSelecionado: {}
    }
  },
  computed: {
    ...mapState('Conta', ['list']),
    ...mapState('Config', ['theme'])
  },
  methods: {
    ...mapActions('Conta', ['dropConta']),
    remove (item) {
      this.itemSelecionado = item
      this.confirm = true
    },
    async removeConfirm () {
      await this.dropConta(this.itemSelecionado)
    }
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
