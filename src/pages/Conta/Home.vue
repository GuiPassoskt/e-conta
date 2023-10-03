<template>
  <q-page padding class="items-start q-gutter-md grid">
    <template v-for="item in categorias" :key="item.id">
      <q-item :to="item.categoria" class="my-card">
        <q-item-section class="itens-center align-center">
          <q-avatar
          :icon="item.icon"
          color="primary"
          text-color="white"
          size=""
          rounded
          />
          <b>{{ item.nome }}</b>
        </q-item-section>
      </q-item>
    </template>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Home',
  setup () {
    const categorias = ref([
      { id: 1, nome: 'Açougue', categoria: 'Acougue', icon: 'las la-fish' },
      { id: 2, nome: 'Alimentos', categoria: 'Alimentos', icon: 'las la-utensils' },
      { id: 3, nome: 'Cerveja', categoria: 'Cerveja', icon: 'las la-beer' },
      { id: 4, nome: 'Limpeza', categoria: 'Limpeza', icon: 'las la-broom' },
      { id: 5, nome: 'Sacolão', categoria: 'Sacolao', icon: 'las la-apple-alt' },
      { id: 6, nome: 'Outros', categoria: 'Outros', icon: 'las la-box' }
    ])
    return {
      categorias
    }
  }
})
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.my-card {
  border: 1px solid #333;
  border-radius: 5px;
  text-align: center;
}
.column {
  align-items: center;
}
</style>
