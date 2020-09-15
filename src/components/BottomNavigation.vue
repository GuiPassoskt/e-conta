<template>
    <q-layout-footer class="flex">
        <q-tabs class="text-teal" indicator-color="transparent">
            <q-route-tab name="home" :to="{name:'criar_conta'}">
              <i class="icofont-home"></i>
              Home
            </q-route-tab>
            <q-tab name="menu" @click="show(true)">
              <q-btn fab icon="attach_money" color="accent"/>
            </q-tab>
            <q-route-tab name="config" :to="{name: 'config'}">
              <i class="icofont-ui-settings"></i>
              Config
            </q-route-tab>
        </q-tabs>
    </q-layout-footer>
</template>

<script>
import { QTabs, QTab, QRouteTab } from 'quasar'
export default {
  name: 'BottomNavigation',
  data () {
    return {
      tab: 'mails'
    }
  },
  components: {
    QTabs,
    QTab,
    QRouteTab
  },
  methods: {
    show (grid) {
      this.$q.bottomSheet({
        message: '\n',
        grid,
        actions: [
          {
            label: 'Drive',
            icon: 'share',
            id: 'drive'
          },
          {
            label: 'Keep',
            img: 'https://cdn.quasar.dev/img/logo_keep_128px.png',
            id: 'keep'
          },
          {
            label: 'Google Hangouts',
            img: 'https://cdn.quasar.dev/img/logo_hangouts_128px.png',
            id: 'calendar'
          },
          {
            label: 'Calendar',
            img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png',
            id: 'calendar'
          }
        ]
      }).onOk(action => {

      }).onCancel(() => {

      }).onDismiss(() => {

      })
    }
  }
}
</script>

<style lang="stylus">
.flex {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.text-teal {
  background-color: #fff;
  box-shadow: 0px 1px 3px #808080;
  border-radius: 15px;
  color: #6c5af8 !important;
  position: absolute;
  bottom: 0;
  width: 328px;
  margin-bottom: 10px;
}
.bg-accent {
  background: #6c5af8 !important;
}
.q-bottom-sheet {
    border-radius: 30px 30px 0px 0px !important;
}
.q-card__section .q-dialog__message .scroll {
    text-align: center !important;
}

.q-dialog__message {
    text-align: center;
}

.q-dialog__message::after{
    content: '';
    border: 2px solid #000;
    border-radius: 6px;
    display: flex;
    width: 80px;
    margin: 0 auto;
}
</style>
