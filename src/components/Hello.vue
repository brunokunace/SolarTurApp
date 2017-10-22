<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        Mapa Interativo de Salinópolis
      </q-toolbar-title>
    </q-toolbar>
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Links Úteis</q-list-header>
        <a :href="itemMenu.value" v-for="(itemMenu, index) in leftMenu" :key="index">
        <q-item >
          <q-item-main :label="itemMenu.name"/>
        </q-item>
        </a>
      </q-list>
      <q-list link inset-delimiter>
       <q-item>
         <q-side-link tag="a" to="/about">Sobre</q-side-link>
       </q-item>
      </q-list>
    </div>

    <router-view></router-view>

  </q-layout>
</template>

<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink
} from 'quasar'
import MapInitial from './map.vue'

export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    MapInitial,
    QSideLink
  },
  data () {
    return {
      leftMenu: {}
    }
  },
  methods: {
    getLeftMenu () {
      this.$http.get('api/leftmenu/list')
        .then((response) => {
          this.leftMenu = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getLeftMenu()
  }
}
</script>

<style lang="stylus" scoped>
  a {
    color: #000
  }
</style>
