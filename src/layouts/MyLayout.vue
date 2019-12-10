<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <i class="icofont-navigation-menu"></i>
        </q-btn>
        <q-toolbar-title class="title">
          E-Conta
        </q-toolbar-title>
        <q-btn flat dense :to="{name:'lista'}">
          <q-badge color="red" floating transparent v-if="badge !== 0">{{badge}}</q-badge>
          <i class="icofont-food-basket"></i>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 0px solid #ddd">
        <q-list padding>
          <q-item clickable tag="a" :to="{name:'tvonline'}">
            <q-item-section avatar>
             <television />
            </q-item-section>
            <q-item-section>
              <q-item-label>Tv On-line</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" :to="{name:'lista'}">
            <q-item-section avatar>
             <programation />
            </q-item-section>
            <q-item-section>
              <q-item-label>Programação Tv</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" :to="{name:'config'}">
            <q-item-section avatar>
              <journal />
            </q-item-section>
            <q-item-section>
              <q-item-label>Notícias</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" :to="{name:'redes_sociais'}">
            <q-item-section avatar>
              <social />
            </q-item-section>
            <q-item-section>
              <q-item-label>Redes Sociais</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" :to="{name:'contatos'}">
            <q-item-section avatar>
              <contacts />
            </q-item-section>
            <q-item-section>
              <q-item-label>Contatos</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable tag="a" :to="{name:'ficha_tecnica'}">
            <q-item-section avatar>
              <info />
            </q-item-section>
            <q-item-section>
              <q-item-label>Ficha Técnica</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" style='background-size: cover; background-position: 50% 50%;height: 150px'>
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="60px" class="q-mb-sm avatar">
            <img src="https://guipassoskt.github.io/wp-content/uploads/2015/09/eu.jpg">
          </q-avatar>
          <div class="text-weight-bold">Guilherme Passos</div>
          <div>decodezero.io@gmail.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
      <bottom-navigation />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import BottomNavigation from '../components/BottomNavigation'
import Television from '../components/Icons/Television'
import Programation from '../components/Icons/Programation'
import Journal from '../components/Icons/Journal'
import Social from '../components/Icons/Social'
import Contacts from '../components/Icons/Contacts'
import Info from '../components/Icons/Info'
import { mapState } from 'vuex'
import { getConta } from '../persistence/'
export default {
  name: 'MyLayout',
  components: {
    BottomNavigation,
    Television,
    Programation,
    Journal,
    Social,
    Contacts,
    Info
  },
  computed: {
    ...mapState('Conta', ['list']),
    badge () {
      return this.list.length
    }
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      count: null
    }
  },
  methods: {
    openURL
  },
  mounted () {
    const b = getConta()
    console.log('array', b)
  }
}
</script>

<style>
.avatar{
  border:1px solid #fff;
}
.q-img__image{
  background-color: #031a6b;
}
.title {
  font-weight: bold;
  font-family: 'Playball', cursive;
}
</style>
