<template>
  <q-page padding>
    <q-form @submit.prevent="tipoAcao" @reset="reset">
      <q-input outlined label="Descrição" v-model.trim="expense.name"
        :rules="[val => val && val.length > 0 || 'Descrição Obrigatória']">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="insert_comment" />
          </q-avatar>
        </template>
      </q-input>
      <q-input outlined label="Categoria" v-model.trim="expense.category"
        :rules="[val => val && val.length > 0 || 'Categoria Obrigatória']"
        disable>
        <template v-slot:append>
          <q-avatar>
            <q-icon name="sell" />
          </q-avatar>
        </template>
      </q-input>
      <q-input outlined placeholder="R$" type="tel" mask="#.##" fill-mask="0" reverse-fill-mask v-model="expense.amount"
        label="R$" class="q-mt-md" hint="O valor do produto pode ser cadastrado depois">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="monetization_on" />
          </q-avatar>
        </template>
      </q-input>
      <q-input outlined label="Quantidade" type="tel" v-model="expense.quantity"
        :rules="[val => val && val.length > 0 || 'Quantidade Obrigatória']" class="q-mt-md">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="add_circle" />
          </q-avatar>
        </template>
      </q-input>
      <q-btn unelevated type="submit" color="primary" label="Salvar" icon="save" class="full-width q-mt-md" />
      <q-btn type="reset" id="cancel" icon="delete" class="full-width q-mt-md" style="display:none"/>
    </q-form>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useDatabase from '../../composables/useDatabase'
import { contaStore } from '../../store/modules/contaStore'
export default defineComponent({
  name: 'PageIndex',
  setup () {
    const $q = useQuasar()
    const route = useRoute()
    const router = useRouter()

    const { buscar, adicionar, atualizar } = useDatabase()
    const { addConta } = contaStore()

    const expense = ref({
      name: '',
      category: '',
      amount: 0.00,
      quantity: 0
    })

    const editar = ref(false)
    const collection = 'expense'

    const tipoAcao = () => editar.value ? atualizarProduto() : salvarProduto()

    const salvarProduto = () => {
      adicionar(collection, expense.value).then((response) => {
        $q.notify({
          message: 'Produto salvo com sucesso!',
          color: 'positive',
          icon: 'check'
        })
        addConta(expense.value)
        document.querySelector('#cancel').click()
        // reset()
      }).catch((error) => {
        $q.notify({
          message: error,
          color: 'negative',
          icon: 'close'
        })
      })
    }
    const atualizarProduto = () => {
      const { id } = route.params
      atualizar(collection, id, expense.value).then(() => {
        $q.notify({
          message: 'Produto atualizada com sucesso!',
          color: 'positive',
          icon: 'check'
        })
        router.push({ name: 'lista' })
      }).catch((error) => {
        $q.notify({
          message: error,
          color: 'negative',
          icon: 'close'
        })
      })
    }

    const reset = () => {
      expense.value = {
        name: '',
        category: route.params.category,
        amount: 0.00,
        quantity: 0
      }
    }

    onMounted(async () => {
      expense.value.category = route.params.category || ''
      if (route.params && route.params.id) {
        editar.value = true
        expense.value = await buscar(collection, route.params.id)
      }
    })

    return {
      expense,
      collection,
      editar,
      tipoAcao,
      salvarProduto,
      atualizarProduto,
      reset
    }
  }
})
</script>
<style lang="scss">
  .card {
    background: #fff !important;
    border-radius: 15px;
    box-shadow: 0px 1px 3px #808080;
    padding: 10px;
  }

</style>
