<template>
 <div class="q-pa-md">
     <div class="q-gutter-y-md column">
        <span>Version Code: </span>
        <p id="version"></p>
     </div>
     <div class="q-gutter-y-md">
        <span>Update URL:</span>
        <p id="updateurl"></p>
     </div>
     <div class="q-gutter-y-md column">
         <q-btn color="primary" id="check" @click="atualizacao()">Verificar Atualização</q-btn>
     </div>
 </div>
</template>

<script>
export default {
  name: 'Atualizacao',
  methods: {
    atualizacao () {
     
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
