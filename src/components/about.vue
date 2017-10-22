<template>
  <div class="error-page window-height window-width bg-light column items-center no-wrap text-center">

    <img src="statics/logo/big.png" width="30%">
    <p class="version">Versão do App 1.0.0</p>
    <p><a href="https://hotelsolar.tur.br/">Website</a></p>
    <p><b>Contato:</b> contato@hotelsolar.tur.br</p>

    <p class="text-center group fixed-bottom">
      <q-btn
        v-if="canGoBack"
        color="primary"
        push
        @click="goBack"
        icon="keyboard_arrow_left"
      >
        Voltar
      </q-btn>
    </p>
  </div>
</template>

<script>
import { QBtn, QIcon } from 'quasar'

export default {
  components: {
    QBtn,
    QIcon
  },
  data () {
    return {
      canGoBack: window.history.length > 1
    }
  },
  methods: {
    goBack () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="stylus">
.error-page
  .error-code
    height 50vh
    width 100%
    padding-top 15vh
    font-size 30vmax
    color rgba(255, 255, 255, .2)
    overflow hidden
  .error-card
    border-radius 2px
    margin-top -50px
    width 80vw
    max-width 600px
    padding 25px
    > i
      font-size 5rem
  .version
    margin-top 5%
</style>
