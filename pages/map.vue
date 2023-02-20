<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-select
          :items="displayData"
          item-text="label"
          item-value="value"
          v-model="selectedDataType"
          v-on:change="resetMarker"
          variant="solo"
        ></v-select>
      </v-col>
    </v-row>

    <v-card id="map_card">
      <l-map class="mt-2" ref="map" style="z-index: 0;" :zoom=5 :center="[38.70861166023441, 136.69785256833234]">
        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker
          v-for="(plot, index) in plots[selectedDataType]"
          :lat-lng="[plot.lat, plot.lon]"
          :key="index"
          @click="onClickMarker(index, plot)"
        >
          <!-- <l-popup>
            <div class="primary--text">{{plot.name}}</div>
          </l-popup> -->
        </l-marker>
      </l-map>
    </v-card>


    <v-card class="mx-auto my-4" v-if="infoWinOpen">
      <v-card-title>{{plot['name']}}</v-card-title>
      <v-img
        height="200"
        :src="getTopImgPath(plot, selectedDataType)"
      ></v-img>

      <v-card-text class="text--primary" style="white-space:pre-wrap; word-wrap:break-word;">
        {{plot['description']}}<br />
      </v-card-text>

      <v-rating
        v-if="plot['star'] != 0"
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

      <v-row justify="center" align="center" class="pa-3">
        <v-col cols="6">
          <v-img height="100" :src="plot['optional_img_0']" v-if="plot['optional_img_0']" />
        </v-col>

        <v-col cols="6">
          <v-img height="100" :src="plot['optional_img_1']" v-if="plot['optional_img_1']" />
        </v-col>
      </v-row>

      <v-row justify="center" align="center" class="pa-3">
        <v-col cols="6">
          <v-img height="100" :src="plot['optional_img_2']" v-if="plot['optional_img_2']" />
        </v-col>

        <v-col cols="6">
          <v-img height="100" :src="plot['optional_img_3']" v-if="plot['optional_img_3']" />
        </v-col>
      </v-row>
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
      selectLabel: ["イイ道", "駐車場", "グルメ", "整備工場"],
      displayData: [
        {label:"イイ道", value: "road"},
        {label:"駐車場", value: "parking"},
        {label:"グルメ", value: "gourmet"},
        {label:"整備工場", value: "repair_shop"}
      ],
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
