<template>
  <div>
    <v-card>
      <v-toolbar
        color="cyan"
        dark
        flat
      >
        <v-toolbar-title>管理画面</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs
            v-model="itemId"
            align-with-title
          >
            <v-tabs-slider color="yellow"></v-tabs-slider>
            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="itemId">
        <!-- news -->
        <v-tab-item>
          <v-card flat>
            <v-row justify="center" align="center" class="mt-3">
              <v-col cols="1">
                <p>pass</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="newsRegisterObj.password" />
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>title</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="newsRegisterObj.title" />
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>link</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="newsRegisterObj.link" />
              </v-col>
            </v-row>

            <v-row justify="center" align="center">
              <v-col cols="1">
                <v-btn
                  class="ma-2"
                  color="success"
                  @click="addNEWS()"
                >
                  追加
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>

        <!-- road -->
        <v-tab-item>
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
        </v-tab-item>

        <!-- parking -->
        <v-tab-item>
          <v-card flat>
            <v-row justify="center" align="center" class="mt-3">
              <v-col cols="1">
                <p>pass</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="parkingRegisterObj.password"/>
              </v-col>
            </v-row>

            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>name</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="parkingRegisterObj.name"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>link</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo v-model="parkingRegisterObj.link"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>description</p>
              </v-col>
              <v-col cols="10">
                <v-textarea outlined v-model="parkingRegisterObj.description"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>lat</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo type="number" v-model="parkingRegisterObj.lat"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>lon</p>
              </v-col>
              <v-col cols="10">
                <v-text-field type="number" solo v-model="parkingRegisterObj.lon"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <p>star</p>
              </v-col>
              <v-col cols="10">
                <v-text-field solo type="number" v-model="parkingRegisterObj.star"/>
              </v-col>
            </v-row>
            <v-row justify="center" align="center">
              <img-inputer
                v-model="parkingImg"
                theme="light"
                size="large"
                placeholder="ファイルをここにドラッグする"
                bottom-text="クリックで画像を再選択"
              />
            </v-row>
            <v-row justify="center" align="center">
              <v-col cols="1">
                <v-btn
                  class="ma-2"
                  color="success"
                  @click="addParking()"
                >
                  追加
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>

        <!-- gourmet -->
        <v-tab-item>
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
        </v-tab-item>

        <!-- repair_shop -->
        <v-tab-item>
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
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import {axiosInstance as Api} from '~/myModules/api'
import {imageUploader as imageUploader} from '~/myModules/imageUploader'
import {baseURL as baseURL} from '~/myModules/baseURL'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

export default {
  data () {
    return {
      roadImg: null,
      parkingImg: null,
      gourmetOutsideImg: null,
      productImg0: null,
      productImg1: null,
      productImg2: null,
      productImg3: null,
      repairShopOutsideImg: null,
      optionalImg0: null,
      optionalImg1: null,
      optionalImg2: null,
      optionalImg3: null,
      itemId: null,
      items: [
        'news', 'road', 'parking', 'gourmets', 'repair_shop',
      ],
      endPoints: [
        '/news/register_news',
        '/plot/add_road',
        '/plot/add_parking',
        '/plot/add_gourmet',
        '/plot/add_repair_shop'
      ],
      newsRegisterObj: {
        password: "",
        title: "",
        link: ""
      },
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
      parkingRegisterObj: {
        password: "",
        name: "",
        link: "",
        description: "",
        lat: 0.0,
        lon: 0.0,
        star: 0,
        image_path: "",
      },
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
    async addNEWS() {
      const res = await Api.post('/news/register_news', this.newsRegisterObj)
      alert(res['data']['message'])
      location.reload()
    },
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
    async addParking() {
      if (this.parkingImg != null) {
        var formdata = new FormData()
        formdata.append('file', this.parkingImg)
        const res = await imageUploader.post('/uploadfile', formdata)
        this.parkingRegisterObj['image_path'] = baseURL + '/' + res['data']['saved_file_path']
      }
      const res = await Api.post('/plot/add_parking', this.parkingRegisterObj)
      alert(res['data']['message'])
      location.reload()
    },
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
