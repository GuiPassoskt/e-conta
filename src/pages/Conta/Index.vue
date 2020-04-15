<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column card" :style="theme.card">
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
      <q-btn unelevated rounded  
      style="background: #FF0080;color:#fff" 
      size="lg" label="Salvar" :disable="statusButton" @click.prevent="save()"/>
    </div>
  </div>
</template>

<style>
</style>

<script>
import { mapState, mapActions } from 'vuex'
import { convert } from '../../utils/filters'
export default {
  name: 'PageIndex',
  mixins: [convert],
  data () {
    return {
      expense: {
        id: '',
        name: '',
        amount: '',
        quantity: '',
        date: this.hoje()
      }
    }
  },
  computed: {
    ...mapState('Conta', ['list']),
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
    ...mapActions('Conta', ['setConta']),
    async save () {
      this.setConta(this.expense)
      this.reset()
    },
    reset () {
      setTimeout(function () {
        this.expense.name = ''
        this.expense.amount = ''
        this.expense.quantity = ''
        this.expense.date = ''
      }, 500)
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
