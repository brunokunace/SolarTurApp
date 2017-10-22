<template>
  <div id="imgBack" :style="{ backgroundImage: 'url(http://' + establishment.photo + ')' }">
    <div id="left">
      <div id="topTitle" :style="{'backgroundColor': categoryColor()}"></div>
    </div>
    <p id="category">{{ categoryName() }}</p>
    <h6 id="title">{{ establishment.name }}</h6>
    <div id="description" v-html="establishment.description"></div>

    <q-fab v-if="!(establishment.facebook === null &
                 establishment.instagram === null &
                 establishment.site === null &
                 establishment.phone === null) "
      class="fixed"
      style="right: 18px; bottom: 18px"
      color="primary"
      icon="info_outline"
      direction="up"
    >
      <q-fab-action v-if="establishment.facebook !== null"
                    color="secondary"
                    @click="setHref(establishment.facebook)"
                    icon="ion-social-facebook"
      />
      <q-fab-action v-if="establishment.instagram !== null"
                    color="tertiary"
                    @click="setHref(establishment.instagram)"
                    icon="ion-social-instagram"
      />
      <q-fab-action v-if="establishment.site !== null"
                    color="positive"
                    @click="setHref(establishment.site)"
                    icon="ion-earth"
      />
      <q-fab-action v-if="establishment.phone !== null"
                    color="negative"
                    @click="setTel(establishment.phone)"
                    icon="ion-ios-telephone"
      />
    </q-fab>

  </div>
</template>
<script>
  import {QFab, QFabAction} from 'quasar-framework'
  export default {
    components: {
      QFab, QFabAction
    },
    data () {
      return {
        establishment: ''
      }
    },
    methods: {
      getEstablishment () {
        this.$http.get('api/establishment/' + this.$route.params.id)
          .then((response) => {
            this.establishment = response.data
          })
          .catch((error) => {
            console.log(error)
          })
      },
      categoryColor () {
        return this.establishment.category.color
      },
      categoryName () {
        return this.establishment.category.name
      },
      setHref (url) {
        window.location = url
      },
      setTel (tel) {
        window.location = 'tel:' + tel
      }
    },
    mounted () {
      this.getEstablishment()
    }
  }
</script>
<style scoped>
  #imgBack{
    width: 100%;
    height: 338px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
  }
  #left{
    width: 150%;
    height: 200%;
    background-color: #fff;
    border-radius: 100%;
    top: -50%;
    left: -100%;
    position: relative;
  }
  #topTitle{
    width: 34%;
    height: 25%;
    border-radius: 100%;
    left: 60%;
    position: relative;
    top: 8%;
  }
  #category {
    font-family: bethanie;
    top: -196%;
    position: relative;
    width: 35%;
    text-align: center;
    color: #fff;
    font-size: 2rem;
  }
  #title {
    top: -190%;
    position: relative;
    width: 45%;
    text-align: center;
  }
  #description {
    width: 40%;
    top: -190%;
    left: 5%;
    position: relative;
    font-size: 0.6rem;
    line-height: 2;
  }
</style>
