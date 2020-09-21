<template>
 <div class="q-pa-md">
  <div class="q-pa-md card" :style="theme.card">
      <div class="q-gutter-y-md flex">
          <span>Versão: </span>
          <p id="version">{{config.version}}</p>
      </div>
      <div class="q-gutter-y-md flex">
        <span>Modo Dark: </span>
        <q-toggle v-model="config.theme" />
      </div>
      <div class="q-gutter-y-md column">
          <q-btn color="primary" id="check" @click="atualizacao()">Verificar Atualização</q-btn>
      </div>
  </div>
 </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { theme } from '../../themes/dark-theme'
const themeActive = JSON.parse(localStorage.getItem('Config')) || false
export default {
  name: 'Atualizacao',
  data () {
    return {
      config: {
        theme: themeActive.dark || false,
        version: this.$q.version
      }
    }
  },
  computed: {
    ...mapState('Config', ['theme'])
  },
  methods: {
    ...mapActions('Config', ['setDarkmode']),
    atualizacao () {
      location.reload(true)
    }
  },
  watch: {
    'config.theme': {
      handler () {
        this.setDarkmode(theme(this.config.theme))
        theme(this.config.theme)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 15px;
  box-shadow: 0px 1px 3px #808080;
  padding: 10px;
}
.card--dark {
  background: #263238;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
