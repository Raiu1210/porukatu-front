<template>
  <div id="map-wrap" style="height: 100vh">
    <v-card class="px-3 py-1">
      <v-radio-group inline v-model="selectedData">
        <v-row justify="center" align="center">
          <v-col cols="5">
            <v-radio label="イイ道" value="road"></v-radio>
          </v-col>
          <v-col cols="5">
            <v-radio label="駐車場" value="parking"></v-radio>
          </v-col>
        </v-row>
        <v-row justify="center" align="center">
          <v-col cols="5">
            <v-radio label="グルメ" value="gourmet"></v-radio>
          </v-col>
          <v-col cols="5">
            <v-radio label="整備工場" value="repair_shop"></v-radio>
          </v-col>
        </v-row>
      </v-radio-group>
    </v-card>

    <v-card id="map_card">
      <l-map class="mt-2" ref="map" :zoom=5 :center="[38.70861166023441, 136.69785256833234]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker
          v-for="(plot, index) in plots[selectedData]"
          :lat-lng="[plot.lat, plot.lon]"
          :key="index"
        >
          <l-popup>
            <div class="primary--text">{{plot.name}}</div>
          </l-popup>
        </l-marker>
    </l-map>
    </v-card>

   {{plots[selectedData]}}
  </div>
</template>

<script>
import {axiosInstance as Api} from '~/myModules/api'

export default {
  data() {
    return {
      selectedData: "road",
      displayData: [],
      plots: {}
    }
  },
  async created() {
    const res = await Api.get('/plot/all_plot')
    this.plots = res['data']
  },
  methods: {
    doSomethingOnReady() {
      this.map = this.$refs.map.mapObject
    },
  },
};
</script>

<style scoped>
#map_card{
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 400px;
}
</style>
