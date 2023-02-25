<template>
  <v-card flat>
    <v-row justify="center" align="center" class="mt-3">
      <v-col cols="1">
        <p>pass</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="roadRegisterObj.password"/>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>name</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="roadRegisterObj.name"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>link</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="roadRegisterObj.link"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>description</p>
      </v-col>
      <v-col cols="10">
        <v-textarea outlined v-model="roadRegisterObj.description"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>lat</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo type="number" v-model="roadRegisterObj.lat"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>lon</p>
      </v-col>
      <v-col cols="10">
        <v-text-field type="number" solo v-model="roadRegisterObj.lon"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <img-inputer
        v-model="roadImg"
        theme="light"
        size="large"
        placeholder="ファイルをここにドラッグする"
        bottom-text="クリックで画像を再選択"
      />
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>star</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo type="number" v-model="roadRegisterObj.star"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <v-btn
          class="ma-2"
          color="success"
          @click="addRoad()"
        >
          追加
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import ImgInputer from 'vue-img-inputer'
import {axiosInstance as Api} from '~/myModules/api'
import {imageUploader as imageUploader} from '~/myModules/imageUploader'
import {baseURL as baseURL} from '~/myModules/baseURL'

export default {
  data() {
    return {
      roadImg: null,
      roadRegisterObj: {
        password: "",
        name: "",
        link: "",
        description: "",
        lat: 0.0,
        lon: 0.0,
        image_path: "",
        star: 0
      },
    }
  },
  methods: {
    async addRoad() {
      if (this.roadImg != null) {
        var formdata = new FormData()
        formdata.append('file', this.roadImg)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.roadRegisterObj['image_path'] = baseURL + '/' + res['data']['saved_file_path']
      }
      const res = await Api.post('/plot/add_road', this.roadRegisterObj)
      alert(res['data']['message'])
      location.reload()
    },
  },
  components: {
    ImgInputer
  }
}
</script>
