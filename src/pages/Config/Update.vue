<template>
 <div class="q-pa-md">
  <div class="q-pa-md card" :style="theme.card">
      <div class="q-gutter-y-md column">
          <span>Versão: </span>
          <p id="version">{{config.version}}</p>
      </div>
      <div class="q-gutter-y-md">
        <span>Modo Dark: </span>
        <q-toggle v-model="config.theme" />
      </div>
      <div class="q-gutter-y-md column">
          <q-btn color="primary" id="check" @click="atualizacao()">Verificar Atualização</q-btn>
      </div>
      <div class="q-gutter-y-md column">
        <a href="https://whsntq.bn.files.1drv.com/y4mQklOXInG0E6HUSgpKIbDxJOUkpy7rEhF1HzYUhVIx6bmNPyUviU7x5Va_62-KT-2wH6xXqOYHb4u2lxGiYWk6-S62xmgwJ9ijpAaudDVJ6iAQBzp_8TaUuyaJ2XWYqMAM-ug6ZrVz4Jr_-NDt5Ab5DiUZOJ3YN7X2_GR0kCJqnmGdSQL9G7mfGkY9yAYQ-r7" ref="download" download></a>
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
      this.$refs.download.click()
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
</style>
