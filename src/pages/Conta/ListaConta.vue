<template>
  <div class="q-pa-md" style="350px">
    <q-list v-for="l in expenses" :key="l.id">
      <q-item :style="theme.card">
        <q-item-section>
          <q-item-label>Produto: {{l.name}}</q-item-label>
          <q-item-label>Valor: R$ {{l.amount | monetize}}</q-item-label>
          <q-item-label :style="{color:theme.card.color}" caption lines="2">Quantidade: {{l.quantity}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label :style="{color:theme.card.color}" caption>{{l.date | repl_data}}</q-item-label>
          <q-btn flat dense class="q-mt-sm" color="red" @click.prevent="ativarModal(l)">
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
          <q-btn flat label="Excluir" color="negative" @click="deleteExpense()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { convert } from '../../utils/filters'
export default {
  mixins: [convert],
  data () {
    return {
      count: 0,
      confirm: false,
      itemSelecionado: {},
      expenses: [],
      collection: 'expense'
    }
  },
  computed: {
    ...mapState('Config', ['theme'])
  },
  methods: {
    async getExpenses () {
      try {
        const expensesDB = await this.$db.collection(this.collection).get({ keys: true })
        this.expenses = expensesDB.map((expense) => {
          return {
            ...expense.data,
            id: expense.key
          }
        })
      } catch (error) {
        console.error(error)
      }
    },
    ativarModal (item) {
      this.itemSelecionado = item
      this.confirm = true
    },
    async deleteExpense () {
      try {
        let { id } = this.itemSelecionado
        await this.$db.collection(this.collection).doc(id).delete()
        this.$q.notify({
          message: 'Produto excluido com sucesso!',
          color: 'positive',
          icon: 'delete'
        })
        this.getExpenses()
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted () {
    this.getExpenses()
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
