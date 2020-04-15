<template>
    <div class="fixed-bottom" :class="theme.dark ? 'svg_dark': 'svg'">
      <div class="btn">
        <button @click="home()">
          <i class="las la-home"></i>
        </button>
        <span>Home</span>
      </div>
      <div class="btn-round">
        <q-btn fab icon="attach_money" :color="theme.bottomNav.main"  @click="show(true)"/>
      </div>
      <div class="btn">
        <button @click="config()">
          <i class="las la-tools"></i>
        </button>
        <span>Config</span> 
      </div> 
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { convert } from '../utils/filters'
export default {
  name: 'BottomNavigation',
  mixins: [convert],
  data () {
    return {
      tab: 'mails'
    }
  },
  computed: {
    ...mapGetters('Conta', ['totalList']),
    ...mapState('Config', ['theme'])
  },
  methods: {
    show () {
      let total = this.currency(this.totalList || 0.00)
      this.$q.dialog({
        title: `<div style="margin: 0 auto;text-align: center;width: 100%;display: flex;flex-direction: column;">
                  <i class="icofont-food-basket" style="width: 80px;height: 80px;display: flex;justify-content: center;align-items: center;margin: 0 auto;background: #edf3f8;border-radius: 50%;"></i>
                  <span>
                    Sua cestinha
                  </span>
                </div>`,
        message: `
          <div style="display:flex;justify-content:space-between;align-items:center">
            <b style="font-size:16px;">Total</b>
            <b style="font-size:16px;">${total}</b>
          </div>
        `,
        html: true,
        ok: false,
        cancel: false,
        position: 'bottom'
      })
    },
    home () {
      this.$router.push({ name: 'criar_conta' })
    },
    config () {
      this.$router.push({ name: 'config' })
    }
  }
}
</script>

<style lang="stylus">
.svg {
  background-image: url('../assets/tab_bar.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 82px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}
.svg_dark {
  background-image: url('../assets/tab_bar_dark.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 82px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
}
.svg_dark .btn {
  display: grid;
  justify-items: center;
  align-items: center;
  color: #16cbda;
} 
.svg .btn {
  display: grid;
  justify-items: center;
  align-items: center;
  color: #000;
}
.svg .btn button {
  background: transparent;
  border: none;
  color: inherit;
}
.svg_dark .btn button {
  background: transparent;
  border: none;
  color: inherit;
}
.svg .btn-round {
  margin-top: -60px;
}
.svg_dark .btn-round {
  margin-top: -60px;
}  

.svg .btn-round .bg-accent {
  background: #021354 !important;
}
.text-teal {
  color: #6c5af8 !important;
  width: 100%;
}
.q-dialog-plugin {
  border-top-left-radius: 20px !important;
  border-top-right-radius: 20px !important; 
}
</style>
