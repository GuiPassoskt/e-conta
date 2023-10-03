<template>
  <q-page padding>
    <q-card class="q-pa-md">
      <div class="q-gutter-y-md flex">
        <span>Versão: </span>
        <p id="version">{{ config.version }}</p>
      </div>
      <div class="q-gutter-y-md flex">
        <span>Modo Dark: </span>
        <q-toggle v-model="toggleDarkMode" />
      </div>
      <div class="q-gutter-y-md column">
        <q-btn color="primary" icon="update" @click="atualizacao()">Verificar Atualização</q-btn>
      </div>
      <br>
      <div class="q-gutter-y-md column">
        <q-btn color="primary" icon="delete" @click="modalActive">Apagar Produtos</q-btn>
      </div>
    </q-card>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="negative" text-color="white" />
          <span class="q-ml-sm">Deseja excluir todos os produtos?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="dark" v-close-popup />
          <q-btn flat label="Excluir" color="negative" @click="excluirDb()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, onMounted, ref, watch } from 'vue'
import { configStore } from '../../store/modules/configStore'
import useDatabase from '../../composables/useDatabase'
export default defineComponent({
  name: 'Atualizacao',
  setup () {
    const $q = useQuasar()
    const { db } = useDatabase()

    const { darkMode, setDarkmode } = configStore()

    const toggleDarkMode = ref(darkMode)

    const confirm = ref(false)

    const collection = 'expense'

    const config = ref({
      version: $q.version
    })

    const atualizacao = () => {
      location.reload(true)
    }

    const modalActive = () => {
      confirm.value = true
    }

    const excluirDb = async () => {
      await db.collection(collection).delete()
    }

    watch(toggleDarkMode, (val) => {
      console.log(val)
      setDarkmode(val)
      $q.dark.set(darkMode)
    })

    onMounted(() => {
      setDarkmode(toggleDarkMode.value)
      $q.dark.set(darkMode)
    })

    return {
      confirm,
      collection,
      config,
      toggleDarkMode,
      atualizacao,
      modalActive,
      excluirDb
    }
  }
})
</script>

<style lang="scss" scoped>
  .card {
    border-radius: 15px;
    box-shadow: 0px 1px 3px #808080;
    padding: 10px;
  }

  .flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

</style>
