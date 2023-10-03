<template>
  <q-input outlined label="Buscar..." v-model.trim="expenseName" class="q-pa-md">
    <template v-slot:append>
      <q-avatar>
        <q-icon name="search" />
      </q-avatar>
    </template>
  </q-input>
  <q-select outlined v-model="model" :options="options" label="Categoria" class="q-pa-md" />
  <div class="q-pa-md" style="350px">
    <q-list v-for="l in expenses" :key="l.id">
      <q-item>
        <q-item-section>
          <q-item-label>Produto: {{l.name}}</q-item-label>
          <q-item-label>Valor: R$ {{ setMonetize(l.amount) }}</q-item-label>
          <q-item-label caption lines="2">Quantidade: {{l.quantity}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-badge :color="setColor(l.quantity, l.amount)" rounded />
        </q-item-section>
        <q-item-section avatar>
          <q-btn icon="tune" no-caps  outline @click="show(null, l)"/>
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
import { useQuasar } from 'quasar'
import { defineComponent, ref, onMounted, watchEffect, watch } from 'vue'
import { useRouter } from 'vue-router'
import useFilters from '../../composables/useFilters'
import useDatabase from '../../composables/useDatabase'
import { contaStore } from '../../store/modules/contaStore'
export default defineComponent({
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const { monetize } = useFilters()
    const { excluir } = useDatabase()
    const storeConta = contaStore()

    const expenses = ref([])
    const expenseName = ref()
    const collection = 'expense'
    const expense = ref({})
    const confirm = ref(false)
    const model = ref('Todos')

    const getExpenses = async () => {
      try {
        await storeConta.listConta()
        expenses.value = storeConta.list
      } catch (error) {
        $q.notify({
          message: error,
          color: 'negative',
          icon: 'close'
        })
      }
    }

    const show = (grid = false, item) => {
      $q.bottomSheet({
        message: 'Selecione uma opção',
        grid,
        actions: [
          {
            label: 'Editar',
            icon: 'edit',
            color: 'positive',
            size: 'sm',
            id: 'edit',
            item
          },
          {
            label: 'Deletar',
            icon: 'delete',
            color: 'negative',
            id: 'delete',
            item
          }
        ]
      }).onOk(action => {
        if (action.id === 'delete' && action.item.id) {
          expense.value = action.item
          modalActive()
        } else if (action.id === 'edit' && action.item.id) {
          router.push({ name: 'editar', params: { id: action.item.id } })
        }
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }

    const modalActive = () => { confirm.value = true }

    const deleteExpense = () => {
      const { id } = expense.value
      excluir(collection, id).then(() => {
        $q.notify({
          message: 'Produto excluida com sucesso!',
          color: 'positive',
          icon: 'delete'
        })
        getExpenses()
      }).catch((error) => {
        $q.notify({
          message: error,
          color: 'negative',
          icon: 'close'
        })
      })
    }

    const setMonetize = (val) => monetize(val)

    const searchExpenses = () => {
      setTimeout(() => {
        const filter = expenses.value.filter(
          item => item.name.startsWith(expenseName.value)
        )
        expenses.value = filter
      }, 500)
    }

    const setColor = (quantidade, valor) => {
      return quantidade !== 0 && valor > 0 ? 'positive' : 'negative'
    }

    watchEffect(async () => {
      if (expenseName.value) {
        searchExpenses()
      }
    })

    watch(model, async (val) => {
      if (val !== 'Todos') {
        await storeConta.getByCategoria(val)
        expenses.value = storeConta.list
      } else {
        getExpenses()
      }
    })

    onMounted(() => {
      getExpenses()
    })

    return {
      expenses,
      expenseName,
      collection,
      expense,
      confirm,
      getExpenses,
      show,
      modalActive,
      deleteExpense,
      setMonetize,
      setColor,
      model,
      options: [
        'Acougue', 'Alimentos', 'Cerveja', 'Limpeza', 'Sacolao', 'Outros', 'Todos'
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.q-item {
  border-radius: 6px;
}
</style>
