<template>
  <div id="map-wrap" style="height: 100vh">
    <!-- <l-map ref="myMap" :zoom=13 :center="[55.9464418,8.1277591]">
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
   </l-map> -->

   {{roads}}
   {{parkings}}
   {{gourmets}}
   {{repair_shops}}
  </div>
</template>

<script>
import {axiosInstance as Api} from '~/myModules/api'

export default {
  data() {
    return {
      roads : [],
      parkings : [],
      gourmets : [],
      repair_shops : [],
    }
  },
  async created() {
    let roads = await Api.get('/plot/roads')
    let parkings = await Api.get('/plot/parkings')
    let gourmets = await Api.get('/plot/gourmets')
    let repair_shops = await Api.get('/plot/repair_shops')['data']
    this.roads = roads
    this.parkings = parkings
    this.gourmets = gourmets
    this.repair_shops = repair_shops
  },
  methods: {
    doSomethingOnReady() {
      this.map = this.$refs.myMap.mapObject
    },
  },
};
</script>
