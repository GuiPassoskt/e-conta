<template>
  <div class="q-pa-md">
    <q-form class="q-gutter-y-md column card" @submit.prevent="save()" :style="theme.card">
      <q-input :dark="theme.dark" :color="theme.dark ? 'cyan-14' : ''" rounded outlined label="Nome" v-model="expense.name">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="insert_comment" />
          </q-avatar>
        </template>
      </q-input>
      <q-input :dark="theme.dark" :color="theme.dark ? 'cyan-14' : ''" rounded outlined placeholder="R$" type="tel" mask="#.##"
        fill-mask="0" reverse-fill-mask v-model="expense.amount"
        label="R$">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="monetization_on" />
          </q-avatar>
        </template>
      </q-input>
      <q-input :dark="theme.dark" :color="theme.dark ? 'cyan-14' : ''" rounded outlined label="Quantidade" type="tel" v-model="expense.quantity">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="add_circle" />
          </q-avatar>
        </template>
      </q-input>
      <q-input :dark="theme.dark" :color="theme.dark ? 'cyan-14' : ''" rounded outlined label="DD/MM/YYYY" v-model="expense.date">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="insert_invitation" />
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="expense.date" mask="DD/MM/YYYY" @input="() => $refs.qDateProxy.hide()"/>
            </q-popup-proxy>
          </q-avatar>
        </template>
      </q-input>
      <q-btn unelevated rounded type="submit" 
      style="background: #FF0080;color:#fff" 
      size="lg" label="Salvar" :disable="statusButton" />
    </q-form>
  </div>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'
import { convert } from '../../utils/filters'
export default {
  name: 'PageIndex',
  mixins: [convert],
  data () {
    return {
      expense: {
        name: '',
        amount: '',
        quantity: '',
        date: this.hoje()
      },
      collection: 'expense'
    }
  },
  computed: {
    ...mapState('Config', ['theme']),
    statusButton () {
      if (
        this.expense.name === '' ||
        this.expense.amount === '' ||
        this.expense.quantity === '' ||
        this.expense.date === ''
      ) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    async save () {
      try {
        await this.$db.collection(this.collection).add(this.expense)
        await this.reset()
        this.$q.notify({
          message: 'Produto salvo com sucesso!',
          color: 'positive',
          icon: 'check'
        })
      } catch (error) {
        console.error(error)
      }
    },
    async reset () {
      this.expense.name = ''
      this.expense.amount = ''
      this.expense.quantity = ''
      this.expense.date = ''
    },
    hoje () {
      const hoje = new Date()
      return hoje.toLocaleDateString()
    }
  }
}
</script>
<style lang="scss">
.card {
  background: #fff !important;
  border-radius: 15px;
  box-shadow: 0px 1px 3px #808080;
  padding: 10px;
}
</style>
