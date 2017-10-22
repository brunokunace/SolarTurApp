<template>
  <gmap-map
    :center="{lat: options.initialLat, lng: options.initialLng}"
    :zoom="options.initialZoom"
    style="height: 100%; width: 100%; position: absolute; top: 0; left: 0;"
    :options="{disableDefaultUI: true}"
  >
    <gmap-marker
      :position="{lat: options.initialLat, lng: options.initialLng}"
      :clickable="false"
      :draggable="false"
      :icon="options.initialIcon"
    ></gmap-marker>
    <template v-for="(category, index) in categories">
      <gmap-marker :key="index"v-for="(establishment, index) in category.establishments"
                   :position="{lat: parseFloat(establishment.lat), lng: parseFloat(establishment.lng)}"
                   :clickable="true"
                   :draggable="false"
                   :icon="category.marker"
                   @click="$router.push({ path: `/establishment/${establishment.id}`})"></gmap-marker>
    </template>



  </gmap-map>
</template>
<script>
export default {
  data () {
    return {
      options: {},
      categories: []
    }
  },
  mounted: function () {
    this.getCurrentPosition()
    this.getCategoriesMenu()
  },
  methods: {
    getCategoriesMenu () {
      this.$http.get('api/category/listwithestablishments')
        .then((response) => {
          this.categories = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getCurrentPosition () {
      this.$http.get('api/options/list')
        .then((response) => {
          this.options = this.objectOptions(response.data)
          this.options.initialZoom = Number(this.options.initialZoom)
          this.options.initialLat = Number(this.options.initialLat)
          this.options.initialLng = Number(this.options.initialLng)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    objectOptions (obj) {
      return obj.reduce(function (result, item) {
        result[item.name] = item.value
        return result
      }, {})
    }
  }
}
</script>
<style>
</style>
