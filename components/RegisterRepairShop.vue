<template>
  <v-card flat>
    <v-row justify="center" align="center" class="mt-3">
      <v-col cols="1">
        <p>pass</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="repairShopRegisterObj.password"/>
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>name</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="repairShopRegisterObj.name"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>tel</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="repairShopRegisterObj.tel"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>link</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo v-model="repairShopRegisterObj.link"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>description</p>
      </v-col>
      <v-col cols="10">
        <v-textarea outlined v-model="repairShopRegisterObj.description"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>lat</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo type="number" v-model="repairShopRegisterObj.lat"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>lon</p>
      </v-col>
      <v-col cols="10">
        <v-text-field type="number" solo v-model="repairShopRegisterObj.lon"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="1">
        <p>star</p>
      </v-col>
      <v-col cols="10">
        <v-text-field solo type="number" v-model="repairShopRegisterObj.star"/>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <img-inputer
        v-model="repairShopOutsideImg"
        theme="light"
        size="large"
        placeholder="ファイルをここにドラッグする"
        bottom-text="クリックで画像を再選択"
      />
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="5">
        <img-inputer
          v-model="optionalImg0"
          theme="light"
          size="large"
          placeholder="ファイルをここにドラッグする"
          bottom-text="クリックで画像を再選択"
        />
      </v-col>
      <v-col cols="5">
        <img-inputer
          v-model="optionalImg1"
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
          v-model="optionalImg2"
          theme="light"
          size="large"
          placeholder="ファイルをここにドラッグする"
          bottom-text="クリックで画像を再選択"
        />
      </v-col>
      <v-col cols="5">
        <img-inputer
          v-model="optionalImg3"
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
          @click="addRepairShop()"
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
      repairShopOutsideImg: null,
      optionalImg0: null,
      optionalImg1: null,
      optionalImg2: null,
      optionalImg3: null,
      repairShopRegisterObj: {
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
    async addRepairShop() {
      if (this.repairShopOutsideImg != null) {
        var formdata = new FormData()
        formdata.append('file', this.repairShopOutsideImg)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.repairShopRegisterObj['outside_img'] = baseURL + '/' + res['data']['saved_file_path']
      }
      if (this.optionalImg0 != null) {
        var formdata = new FormData()
        formdata.append('file', this.optionalImg0)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.repairShopRegisterObj['optional_img_0'] = baseURL + '/' + res['data']['saved_file_path']
      }
      if (this.optionalImg1 != null) {
        var formdata = new FormData()
        formdata.append('file', this.optionalImg1)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.repairShopRegisterObj['optional_img_1'] = baseURL + '/' + res['data']['saved_file_path']
      }
      if (this.optionalImg2 != null) {
        var formdata = new FormData()
        formdata.append('file', this.optionalImg2)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.repairShopRegisterObj['optional_img_2'] = baseURL + '/' + res['data']['saved_file_path']
      }
      if (this.optionalImg3 != null) {
        var formdata = new FormData()
        formdata.append('file', this.optionalImg3)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.repairShopRegisterObj['optional_img_3'] = baseURL + '/' + res['data']['saved_file_path']
      }
      const res = await Api.post('/plot/add_repair_shop', this.repairShopRegisterObj)
      alert(res['data']['message'])
      location.reload()
    }
  },
  components: {
    ImgInputer
  }
}
</script>
