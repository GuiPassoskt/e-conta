<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated :style="theme.header">
      <q-toolbar>
        <q-btn flat dense @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <i class="icofont-navigation-menu"></i>
        </q-btn>
        <q-toolbar-title class="title">
          E-Conta
        </q-toolbar-title>
        <q-btn flat dense :to="{name:'lista'}">
          <q-badge color="red" floating transparent v-if="badge !== 0">{{badge}}</q-badge>
          <i class="las la-shopping-basket"></i>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      :content-class="theme.dark ? 'bg-dark-2' : 'bg-grey-2'"
    >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 0px solid #ddd">
        <q-list padding>
          <q-item clickable tag="a" :to="{name:''}">
            <q-item-section avatar>
             <i class="las la-tv"></i>
            </q-item-section>
            <q-item-section>
              <q-item-label>Tv On-line</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <q-img class="absolute-top" style='background-size: cover; background-position: 50% 50%;height: 150px'>
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="60px" class="q-mb-sm avatar">
            <img src="~/assets/eu.jpg" style="object-fit:cover;">
          </q-avatar>
          <div class="text-weight-bold">Guilherme Passos</div>
          <div>decodezero.io@gmail.com</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container :style="{paddingTop: '80px'}">
      <router-view />
    </q-page-container>
    <bottom-navigation />
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import BottomNavigation from '../components/BottomNavigationSvg'
import { mapState } from 'vuex'
export default {
  name: 'MyLayout',
  components: {
    BottomNavigation
  },
  computed: {
    ...mapState('Conta', ['list']),
    ...mapState('Config', ['theme']),
    badge () {
      return this.list.length
    }
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
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
.bg-dark-2 {
  background: #292b4d;
  border: none;
}
.q-drawer {
  background: transparent;
}
</style>
