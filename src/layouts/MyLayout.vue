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
        <q-btn flat dense to="/lista">
          <q-badge color="red" floating transparent v-if="badgeCount !== 0">{{ badgeCount }}</q-badge>
          <i class="las la-shopping-basket"></i>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 0px solid #ddd">
        <q-list padding>
          <q-item clickable tag="a" to="https://github.com/GuiPassoskt">
            <q-item-section avatar>
             <i class="lab la-github"></i>
            </q-item-section>
            <q-item-section>
              <q-item-label>Github</q-item-label>
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

    <q-page-container :style="{paddingTop: '80px'}" color="secondary">
      <router-view />
    </q-page-container>
    <BottomNavigation />
  </q-layout>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref, computed, onMounted } from 'vue'
import { contaStore } from '../store/modules/contaStore'
import BottomNavigation from '../components/BottomNavigation'
export default defineComponent({
  name: 'MyLayout',
  components: {
    BottomNavigation
  },
  setup () {
    const $q = useQuasar()
    const storeConta = contaStore()

    const leftDrawerOpen = ref($q.platform.is.desktop)

    const badgeCount = computed(() => storeConta.badgeCount)

    onMounted(async () => {
      await storeConta.listConta()
    })

    return {
      leftDrawerOpen,
      badgeCount
    }
  }
})
</script>

<style>
.avatar{
  border:1px solid #fff;
}
.title {
  font-weight: 500;
  font-family: 'Playball', cursive;
}
.bg-dark-2 {
  background: #292b4d;
  border: none;
}
</style>
