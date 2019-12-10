<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column  card">
      <q-input rounded outlined placeholder="Nome" v-model="expense.name">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="insert_comment" />
          </q-avatar>
        </template>
      </q-input>
      <q-input rounded outlined placeholder="R$" type="tel" v-model="expense.amount">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="monetization_on" />
          </q-avatar>
        </template>
      </q-input>
      <q-input rounded outlined placeholder="Quantidade" type="tel" v-model="expense.quantity">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="add_circle" />
          </q-avatar>
        </template>
      </q-input>
      <q-input rounded outlined placeholder="DD/MM/YYYY" v-model="expense.date">
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
import products from '../../services/products'
import { addStorage } from '../../persistence/localStorage'
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
        date: ''
      }
    }
  },
  computed: {
    ...mapState('Conta', ['list']),
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
    save () {
      addStorage('Conta', this.expense)
      this.setConta(this.expense)
      const cloned = JSON.parse(JSON.stringify(this.expense))
      this.store(cloned)
      this.reset()
    },
    async store (data) {
      await products.create(data).then(res => {
        console.log(res)
      })
    },
    reset () {
      this.expense.name = ''
      this.expense.amount = ''
      this.expense.quantity = ''
      this.expense.date = ''
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
