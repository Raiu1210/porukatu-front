<template>
  <v-card flat>
    <v-row justify="center" align="center" class="mt-3">
      <v-col cols="1">
        <p>pass</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="gourmetRegisterObj.password"/>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>name</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="gourmetRegisterObj.name"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>tel</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="gourmetRegisterObj.tel"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>link</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="gourmetRegisterObj.link"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>description</p>
      </v-col>
      <v-col cols="10">
        <v-textarea outlined v-model="gourmetRegisterObj.description"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>lat</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo type="number" v-model="gourmetRegisterObj.lat"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>lon</p>
      </v-col>
      <v-col cols="10">
        <v-text-field type="number" solo v-model="gourmetRegisterObj.lon"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>star</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo type="number" v-model="gourmetRegisterObj.star"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <img-inputer
        v-model="gourmetOutsideImg"
        theme="light"
        size="large"
        placeholder="ファイルをここにドラッグする"
        bottom-text="クリックで画像を再選択"
      />
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="5">
        <img-inputer
          v-model="productImg0"
          theme="light"
          size="large"
          placeholder="ファイルをここにドラッグする"
          bottom-text="クリックで画像を再選択"
        />
      </v-col>
      <v-col cols="5">
        <img-inputer
          v-model="productImg1"
          theme="light"
          size="large"
          placeholder="ファイルをここにドラッグする"
          bottom-text="クリックで画像を再選択"
        />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="5">
        <img-inputer
          v-model="productImg2"
          theme="light"
          size="large"
          placeholder="ファイルをここにドラッグする"
          bottom-text="クリックで画像を再選択"
        />
      </v-col>
      <v-col cols="5">
        <img-inputer
          v-model="productImg3"
          theme="light"
          size="large"
          placeholder="ファイルをここにドラッグする"
          bottom-text="クリックで画像を再選択"
        />
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <v-btn
          class="ma-2"
          color="success"
          @click="addGourmet()"
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
      gourmetOutsideImg: null,
      productImg0: null,
      productImg1: null,
      productImg2: null,
      productImg3: null,
      gourmetRegisterObj: {
        password: "",
        name: "",
        tel: "",
        link: "",
        description: "",
        lat: 0.0,
        lon: 0.0,
        star: 0,
        outside_img: "",
        optional_img_0: "",
        optional_img_1: "",
        optional_img_2: "",
        optional_img_3: ""
      },
    }
  },
  methods: {
    async addGourmet() {
      if (this.gourmetOutsideImg != null) {
        var formdata = new FormData()
        formdata.append('file', this.gourmetOutsideImg)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.gourmetRegisterObj['outside_img'] = baseURL + '/' + res['data']['saved_file_path']
      }
      if (this.productImg0 != null) {
        var formdata = new FormData()
        formdata.append('file', this.productImg0)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.gourmetRegisterObj['optional_img_0'] = baseURL + '/' + res['data']['saved_file_path']
      }
      if (this.productImg1 != null) {
        var formdata = new FormData()
        formdata.append('file', this.productImg1)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.gourmetRegisterObj['optional_img_1'] = baseURL + '/' + res['data']['saved_file_path']
      }
      if (this.productImg2 != null) {
        var formdata = new FormData()
        formdata.append('file', this.productImg2)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.gourmetRegisterObj['optional_img_2'] = baseURL + '/' + res['data']['saved_file_path']
      }
      if (this.productImg3 != null) {
        var formdata = new FormData()
        formdata.append('file', this.productImg3)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.gourmetRegisterObj['optional_img_3'] = baseURL + '/' + res['data']['saved_file_path']
      }
      const res = await Api.post('/plot/add_gourmet', this.gourmetRegisterObj)
      alert(res['data']['message'])
      location.reload()
    },
  },
  components: {
    ImgInputer
  }
}
</script>
