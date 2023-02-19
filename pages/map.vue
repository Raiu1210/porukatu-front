<template>
  <v-container fluid>
    <v-card class="px-3 py-1">
      <v-radio-group inline v-model="selectedDataType" >
        <v-row justify="center" align="center">
          <v-col cols="5">
            <v-radio label="イイ道" value="road" v-on:change="resetMarker"></v-radio>
          </v-col>
          <v-col cols="5">
            <v-radio label="駐車場" value="parking" v-on:change="resetMarker"></v-radio>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" v-on:change="resetMarker">
          <v-col cols="5">
            <v-radio label="グルメ" value="gourmet" v-on:change="resetMarker"></v-radio>
          </v-col>
          <v-col cols="5">
            <v-radio label="整備工場" value="repair_shop" v-on:change="resetMarker"></v-radio>
          </v-col>
        </v-row>
      </v-radio-group>
    </v-card>

    <v-card id="map_card">
      <l-map class="mt-2" ref="map" style="z-index: 0;" :zoom=5 :center="[38.70861166023441, 136.69785256833234]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker
          v-for="(plot, index) in plots[selectedDataType]"
          :lat-lng="[plot.lat, plot.lon]"
          :key="index"
          @click="onClickMarker(index, plot)"
        >
          <l-popup>
            <div class="primary--text">{{plot.name}}</div>
          </l-popup>
        </l-marker>
      </l-map>
    </v-card>


    <v-card class="mx-auto my-4" v-if="infoWinOpen">
      <v-img
        height="300"
        :src="getTopImgPath(plot, selectedDataType)"
      ></v-img>
      <v-card-title>{{plot['name']}}</v-card-title>
      <v-card-text class="text--primary" style="white-space:pre-wrap; word-wrap:break-word;">
        {{plot['description']}}<br />
      </v-card-text>

      <v-rating
        length="3"
        readonly
        color="#FF6F00"
        class="mx-2 mb-4"
        v-model="plot['star']"
        bg-color="orange-lighten-1"
      ></v-rating>

      <a v-if="plot['link']" class="button" :href="plot['link']" target="_blank">
        <v-btn color="primary mb-3 ml-3" fab>
          <v-icon>mdi-web</v-icon>
        </v-btn>
      </a>

      <a v-if="plot['tel']" class="button" :href="`tel:${plot['tel']}`">
        <v-btn color="primary mb-3 ml-3" fab>
          <v-icon>mdi-phone-in-talk</v-icon>
        </v-btn>
      </a>
    </v-card>
  </v-container>
</template>

<script>
import {axiosInstance as Api} from '~/myModules/api'
import {baseURL as baseURL} from '~/myModules/baseURL'

export default {
  data() {
    return {
      infoWinOpen: false,
      selectedDataType: "road",
      displayData: [],
      plot: {},
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
    onClickMarker(index, plot) {
      this.infoWindowPos = {lat: plot.lat, lng: plot.lon}
      this.plot = plot
      this.infoWinOpen = true
    },
    getTopImgPath(plot, selectedDataType) {
      if (selectedDataType=="road" && plot.image_path) {
        return plot.image_path
      }
      if (selectedDataType=="parking" && plot.image_path) {
        return plot.image_path
      }
      if (selectedDataType=="gourmet" && plot.outside_img) {
        return plot.outside_img
      }
      if (selectedDataType=="repair_shop" && plot.outside_img) {
        return plot.outside_img
      }
      return "/noimage.png"
    },
    resetMarker() {
      this.plot = {}
      this.infoWinOpen = false
    }
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

.button {
  text-decoration: none;
}
</style>
